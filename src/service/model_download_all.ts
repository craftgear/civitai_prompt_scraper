import { getButtonCompleteLabel } from '../assets/lang';
import {
  downloadAllButtonStyle,
  // downloadAllGalleryButtonStyle,
  // downloadAllGalleryDisabledButtonStyle,
} from '../assets/styles';
import {
  darkenTextColor,
  deleteCreateButton,
  deleteDiscussion,
  deleteSuggestedResources,
  getButtonContainerNode,
  hideGallery,
  openGallery,
  // replaceWithDisabledButton,
  waitForElement,
  enableFullScreenCapture,
} from '../utils/dom';
// import { sleep } from '../utils/utils';

const BUTTON_ID = 'download-all-model-related-files';
const downloadButtonSelector = "a[href^='/api/download/models/']";

import {
  download200GalleryImagesAndPrompts,
  // downloadGalleryImagesAndPrompts,
} from './gallery_download';
import { downloadImagesAndPrompts } from './model_image_download';

const downloadAll = (buttonIdSelector: string) => async () => {
  // save previews as a zip file
  const {
    imageList: previewImageList,
    modelName,
    modelId,
    modelVersionId,
  } = (await downloadImagesAndPrompts(
    buttonIdSelector,
    window.location.href
  )()) ?? {};

  if (!modelId || !modelVersionId) {
    alert('modelId or modelVersionId not found');
    return;
  }

  await download200GalleryImagesAndPrompts(
    modelId.toString(),
    modelVersionId as string,
    modelName ?? '',
    200,
    previewImageList
  )();

  setTimeout(() => {
    const panel = document.createElement('div');

    panel.setAttribute(
      'style',
      `
      position: absolute;
      top: 0;
      left: 0;
      z-index:1000;
      height: 100%;
      width: 100%;
      color: black;
      opacity: 0.5;
    `
    );
    document?.querySelector('body')?.appendChild(panel);
  }, 100);
  console.warn('##### done #####');
  return;
};

export const addModelDownloadAllButton = async (href: string) => {
  hideGallery();
  deleteDiscussion();
  darkenTextColor();
  deleteCreateButton();
  deleteSuggestedResources();
  // deleteMainPaddingBottom();
  enableFullScreenCapture();

  const parentNode = await getButtonContainerNode();

  const buttonIdSelector = `#${BUTTON_ID}`;
  document.querySelector(buttonIdSelector)?.remove();

  const button = document.createElement('a');
  button.addEventListener(
    'click',
    // downloadAllModelRelatedFiles(buttonIdSelector)
    downloadAll(buttonIdSelector)
  );
  button.id = BUTTON_ID;
  button.innerText = '⇣'; //getButtonLabel();
  button.setAttribute('style', downloadAllButtonStyle);

  // start downloading a model
  button.addEventListener('click', async () => {
    openGallery();
    await waitForElement(downloadButtonSelector);
    const modelDownloadUrl = document
      .querySelector(downloadButtonSelector)
      ?.getAttribute('href');

    const fileSizeText =
      document.querySelector(downloadButtonSelector)?.innerHTML ?? '';
    if (
      modelDownloadUrl &&
      // モデルの場合はダウンロードしない
      !fileSizeText.includes(' GB)')
    ) {
      setTimeout(() => {
        window.open(modelDownloadUrl, '_blank');
      }, 0);
    }
  });

  if (parentNode) {
    parentNode.appendChild(button);
  }
};
