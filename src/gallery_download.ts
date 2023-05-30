import { buttonStyle } from './styles';
import {
  waitForElement,
  parseNextData,
  buildImgUrl,
  replaceWithDisabledButton,
  updateButtonText,
} from './utils';
import { getButtonLabel, getButtonCompleteLabel } from './lang';
import { fetchGalleryData, createZip } from './infra';
import { downloadImagesAndPrompts } from './model_image_download';
import { getConfig } from './config_panel';

const BUTTON_ID = 'download-all-gallery-images-and-prompts';

export const downloadGalleryImagesAndPrompts =
  (
    buttonIdSelector: string,
    modelId: string | null,
    postId: string,
    onFinishFn?: Function
  ) =>
  async () => {
    try {
      const imgList = await fetchGalleryData(modelId, postId);

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

const downloadSingleImagesAndPrompts =
  (buttonIdSelector: string) => async () => {
    try {
      const data = parseNextData();
      const model = data.props.pageProps.trpcState.json.queries[0];
      const { id, url, meta, width, name, hash } = model.state.data;
      const imgUrl = buildImgUrl(url, width, name);

      const button = await waitForElement(buttonIdSelector);
      if (!button) {
        return;
      }

      await createZip(updateButtonText(button))(`imageId_${id}.zip`)([
        { url: imgUrl, hash, meta },
      ]);

      replaceWithDisabledButton(button, getButtonCompleteLabel());
    } catch (error: unknown) {
      alert((error as Error).message);
    }
  };

export const addGalleryDownloadButton = async () => {
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

  const buttonIdSelector = `#${BUTTON_ID}`;
  document.querySelector(buttonIdSelector)?.remove();
  const button = document.createElement('button');

  // open gallery from model preview images
  if (modelVersionId && prioritizedUserId) {
    button.addEventListener(
      'click',
      downloadImagesAndPrompts(buttonIdSelector)
    );
  }
  // open gallery from a single image
  if (!postId && !modelId && !modelVersionId) {
    button.addEventListener(
      'click',
      downloadSingleImagesAndPrompts(buttonIdSelector)
    );
  }
  // open gallery from model gallery areas
  if (postId) {
    button.addEventListener(
      'click',
      downloadGalleryImagesAndPrompts(buttonIdSelector, modelId, postId)
    );
  }

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
  if (true) {
    button.click();
  }
};
