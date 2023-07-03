import { ButtonState } from './types';
import { galleryButtonStyle } from './styles';
import {
  waitForElement,
  replaceWithDisabledButton,
  updateButtonText,
  parseNextData,
} from './utils';
import { getI18nLabel, getButtonLabel, getButtonCompleteLabel } from './lang';
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
    modelName: string | null,
    onFinishFn?: Function,
    downLoadedImgList?: GalleryImage[]
  ) =>
  async () => {
    try {
      const _imgList = await fetchGalleryData(modelId, postId);

      // exclude downloaded images
      const downloadedImgIds = downLoadedImgList?.map(({ id }) => id) ?? [];
      const imgList = _imgList.filter(
        ({ id }) => !downloadedImgIds.includes(id)
      );

      const button = await waitForElement(buttonIdSelector);
      if (!button) {
        return;
      }
      button.setAttribute('data-state', 'in-progress');
      button.innerText = getI18nLabel('startingDownload');

      const filenameFormat = getConfig('galleryFilenameFormat');
      const filename = (filenameFormat as string)
        .replace('{modelId}', modelId ?? '')
        .replace('{modelName}', modelName ?? '')
        .replace('{postId}', postId);

      await createZip(updateButtonText(button))(filename)(imgList);

      if (onFinishFn) {
        onFinishFn();
      }
      replaceWithDisabledButton(
        button,
        ` ${imgList.length} / ${imgList.length} ${getButtonCompleteLabel()}`
      );
    } catch (error: unknown) {
      alert((error as Error).message);
    }
  };

const extractIdsFromUrl = (href: string) => {
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

  return { modelVersionId, prioritizedUserId, modelId, postId };
};

const extractModelNameFromNextData = () => {
  const nextData = parseNextData();

  // Apparently a key starts with double quotation(") is a LoRA name. starts with double quotation
  const keys = Object.keys(
    nextData.props.pageProps?.trpcState?.json?.queries[0]?.state?.data?.meta ??
      {}
  ).filter((x) => x.startsWith('"'));
  if (keys.length > 0) {
    return keys[0].replace('"', '');
  }

  return (
    nextData.props.pageProps?.trpcState?.json?.queries[0]?.state?.data?.meta
      ?.Model ?? ''
  );
};

export const addGalleryDownloadButton = async () => {
  const buttonIdSelector = `#${BUTTON_ID}`;
  const _button = document.querySelector(buttonIdSelector);
  if (_button && _button.getAttribute('data-state') !== ButtonState.ready) {
    return;
  }
  if (_button) {
    _button?.remove();
  }

  const { modelVersionId, prioritizedUserId, modelId, postId } =
    extractIdsFromUrl(window.location.href);

  const modelName = extractModelNameFromNextData();

  const button = document.createElement('button');

  const onFinishFn = () => {
    if (getConfig('galleryAutoDownload')) {
      document.title = '✅ ' + document.title;
    }
  };
  const eventListener = (() => {
    // open gallery from model preview images
    if (modelVersionId && prioritizedUserId) {
      return downloadImagesAndPrompts(buttonIdSelector);
    }
    // open gallery from model gallery areas
    if (modelId && postId) {
      return downloadGalleryImagesAndPrompts(
        buttonIdSelector,
        modelId,
        postId,
        modelName,
        onFinishFn
      );
    }
    // open gallery from post pages
    if (postId) {
      return downloadGalleryImagesAndPrompts(
        buttonIdSelector,
        null,
        postId,
        modelName,
        onFinishFn
      );
    }
    return null;
  })();

  if (!eventListener) {
    throw new Error('No necessary parameters found');
  }

  button.addEventListener('click', eventListener);

  button.id = BUTTON_ID;
  button.innerText = getButtonLabel();
  button.setAttribute('style', galleryButtonStyle);
  button.setAttribute('data-state', ButtonState.ready);
  if (document.querySelector('.mantine-Modal-modal')) {
    const parentNode = await waitForElement(
      '.mantine-Modal-modal .mantine-Card-cardSection'
    );
    parentNode?.appendChild(button);
  } else if (!document.querySelector('#gallery')) {
    const parentNode = await waitForElement('#freezeBlock .mantine-Stack-root');
    parentNode?.appendChild(button);
  }

  if (
    getConfig('galleryAutoDownload') &&
    button.getAttribute('data-state') === ButtonState.ready
  ) {
    setTimeout(() => {
      button.click();
    }, 0);
  }
};
