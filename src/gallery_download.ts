import { buttonStyle } from './styles';
import {
  waitForElement,
  // parseNextData,
  // buildImgUrl,
  replaceWithDisabledButton,
  updateButtonText,
} from './utils';
import { getButtonLabel, getButtonCompleteLabel } from './lang';
import { fetchGalleryData, createZip } from './infra';
import { downloadImagesAndPrompts } from './model_image_download';
import { getConfig } from './config_panel';

import { GalleryImage } from './types';

const BUTTON_ID = 'download-all-gallery-images-and-prompts';

export const downloadGalleryImagesAndPrompts =
  (
    buttonIdSelector: string,
    modelId: string | null,
    postId: string,
    onFinishFn?: Function,
    downLoadedImgList?: GalleryImage[]
  ) =>
  async () => {
    try {
      const _imgList = await fetchGalleryData(modelId, postId);

      // ここでダウンロード済みの画像を弾く
      const downloadedImgIds = downLoadedImgList?.map(({ id }) => id) ?? [];
      const imgList = _imgList.filter(
        ({ id }) => !downloadedImgIds.includes(id)
      );

      const button = await waitForElement(buttonIdSelector);
      if (!button) {
        return;
      }

      const filenameFormat = getConfig('galleryFilenameFormat');
      const filename = (filenameFormat as string)
        .replace('{modelId}', modelId ?? '')
        .replace('{postId}', postId);

      await createZip(updateButtonText(button))(filename)(imgList);

      if (onFinishFn) {
        onFinishFn();
      } else {
        replaceWithDisabledButton(
          button,
          ` ${imgList.length} / ${imgList.length} ${getButtonCompleteLabel()}`
        );
      }
    } catch (error: unknown) {
      alert((error as Error).message);
    }
  };

export const addGalleryDownloadButton = async () => {
  const buttonIdSelector = `#${BUTTON_ID}`;
  const existButton = document.querySelector(buttonIdSelector);
  if (
    getConfig('galleryAutoDownload') &&
    existButton &&
    existButton.className === 'disabled'
  ) {
    // オートダウンロード有効ですでにダウンロード済みの場合は何もしない
    return;
  } else {
    existButton?.remove();
  }

  const href = window.location.href;
  const matchedModel = href.match(/modelId=(?<modelId>\d*)/);
  const matchedModelVersion = href.match(
    /modelVersionId=(?<modelVersionId>\d*)/
  );
  const matchedPost = href.match(/postId=(?<postId>\d*)/);
  const matchedPrioritizedUser = href.match(
    /prioritizedUserIds=(?<prioritizedUserId>\d*)/
  );

  const modelId = matchedModel?.groups?.modelId || null;
  const modelVersionId = matchedModelVersion?.groups?.modelVersionId || null;
  const postId = matchedPost?.groups?.postId || null;
  const prioritizedUserId =
    matchedPrioritizedUser?.groups?.prioritizedUserId || null;

  const button = document.createElement('button');

  const eventListener = (() => {
    // open gallery from model preview images
    if (modelVersionId && prioritizedUserId) {
      return downloadImagesAndPrompts(buttonIdSelector);
    }
    // open gallery from model gallery areas
    if (modelId && postId) {
      return downloadGalleryImagesAndPrompts(buttonIdSelector, modelId, postId);
    }
    // open gallery from post pages
    if (postId) {
      return downloadGalleryImagesAndPrompts(buttonIdSelector, null, postId);
    }
    return null;
  })();

  if (!eventListener) {
    throw new Error('No parameters found');
  }

  button.addEventListener('click', eventListener);

  button.id = BUTTON_ID;
  button.innerText = getButtonLabel();
  button.setAttribute('style', buttonStyle);
  if (document.querySelector('.mantine-Modal-modal')) {
    document
      .querySelector('.mantine-Modal-modal .mantine-Card-cardSection')
      ?.appendChild(button);
  } else if (!document.querySelector('#gallery')) {
    document
      .querySelector('#freezeBlock .mantine-Stack-root')
      ?.appendChild(button);
  }

  // TODO: 自動ダウンロード開始設定を付ける
  if (getConfig('galleryAutoDownload')) {
    setTimeout(() => {
      button.click();
    }, 500);
  }
};
