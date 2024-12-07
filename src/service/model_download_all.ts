import { downloadAllButtonStyle } from '../assets/styles';
import { getConfig } from '../infra/config_panel';
import {
  addButtonContainer,
  darkenTextColor,
  deleteCreateButton,
  deleteDiscussion,
  deleteMainPaddingBottom,
  deleteSuggestedResources,
  enableFullScreenCapture,
  getDownloadATag,
  hideHeader,
  removeButtonContainer,
  // openGallery,
  scrollIntoView,
} from '../utils/dom';

const BUTTON_ID = 'download-all-model-related-files';

import { download200GalleryImagesAndPrompts } from './gallery_download';
import { downloadImagesAndPrompts } from './model_image_download';

const downloadAll = (buttonIdSelector: string) => async () => {
  console.log('downloadAll: start');
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
    alert('downloadAll: modelId or modelVersionId not found');
    return;
  }

  const galleryDownloadProgressText = document.createElement('div');
  const GalleryDownloadProgressTextId = 'gallery-download-progress-text';
  galleryDownloadProgressText.id = GalleryDownloadProgressTextId;
  galleryDownloadProgressText.setAttribute(
    'style',
    `
      position: fixed;
      top: 50px;
      right: 50px;
      z-index:1000;
      background-color: black;
      color: white;
      opacity: 0.8;
      width: fit-content;
      padding: 1rem 2rem;
    `
  );
  document?.querySelector('body')?.appendChild(galleryDownloadProgressText);

  const progressFn = (progressMsg: string) => {
    galleryDownloadProgressText.innerText = progressMsg;
  };

  const finishFn = () => {
    const panel = document.createElement('div');
    panel.onclick = () => {
      panel.remove();
    };

    panel.setAttribute(
      'style',
      `
      position: absolute;
      top: 0;
      left: 0;
      z-index:1000;
      height: 100%;
      width: 100%;
      background-color: black;
      opacity: 0.5;
    `
    );
    document?.querySelector('#main')?.appendChild(panel);
    document.querySelector(`#${GalleryDownloadProgressTextId}`)?.remove();

    scrollIntoView('#gallery');
    // openGallery(); // galleryを開くと、ダウンロードが遅くなる
    console.log('download200GalleryImagesAndPrompts: done');
  };

  await download200GalleryImagesAndPrompts(
    modelId.toString(),
    modelVersionId as string,
    modelName ?? '',
    200,
    previewImageList,
    progressFn,
    finishFn
  )();

  console.warn('##### done #####');

  return;
};

export const addModelDownloadAllButton = async () => {
  enableFullScreenCapture();
  darkenTextColor();
  deleteCreateButton();
  deleteDiscussion();
  deleteMainPaddingBottom();
  deleteSuggestedResources();
  hideHeader();

  removeButtonContainer();
  const parentNode = await addButtonContainer();

  const buttonIdSelector = `#${BUTTON_ID}`;
  const button = document.createElement('a');
  button.addEventListener('click', (e) => {
    e.preventDefault();
    setTimeout(async () => {
      await downloadAll(buttonIdSelector)();
    }, 1000);
  });
  button.id = BUTTON_ID;
  button.innerText = '⇣'; //getButtonLabel();
  button.setAttribute('style', downloadAllButtonStyle);

  // start downloading a model
  button.addEventListener('click', async (e) => {
    e.preventDefault();
    const aTag = await getDownloadATag();

    const fileSizeText = (aTag as HTMLElement).innerHTML ?? '';
    if (
      aTag &&
      // モデルの場合はダウンロードしない
      !fileSizeText.includes(' GB)') &&
      getConfig('doNotDownloadLargeModels')
    ) {
      aTag.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    }
  });

  if (parentNode) {
    parentNode.appendChild(button);
  }
};
