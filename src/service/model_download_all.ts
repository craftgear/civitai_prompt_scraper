import { downloadAllButtonStyle } from '../assets/styles';
import { getConfig } from '../infra/config_panel';
import { getTitle, setTitle } from '../infra/dom';
import {
  addButtonContainer,
  darkenTextColor,
  deleteCreateButton,
  deleteDiscussion,
  deleteMainPaddingBottom,
  deleteSuggestedResources,
  enableFullScreenCapture,
  getDownloadATag,
  getFileSizeText,
  moveFileSizePanelUp,
  // hideHeader,
  removeButtonContainer,
  // openGallery,
  scrollIntoView,
  warnLargeModels,
} from '../utils/dom';

const BUTTON_ID = 'download-all-model-related-files';

// import { download200GalleryImagesAndPrompts } from './gallery_download';
import { downloadImagesAndPrompts } from './model_image_download';

const downloadAllImages = (buttonIdSelector: string) => async () => {
  console.log('downloadAllImages: start');

  await downloadImagesAndPrompts(buttonIdSelector, window.location.href)();

  const overlayPanel = document.createElement('div');
  overlayPanel.onclick = () => {
    overlayPanel.remove();
  };

  overlayPanel.setAttribute(
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
  document?.querySelector('#main')?.appendChild(overlayPanel);
  setTitle('✅ ' + getTitle());

  scrollIntoView('#gallery');

  // if (!modelId || !modelVersionId) {
  //   alert('downloadAll: modelId or modelVersionId not found');
  //   return;
  // }
  //
  // const galleryDownloadProgressText = document.createElement('div');
  // const GalleryDownloadProgressTextId = 'gallery-download-progress-text';
  // galleryDownloadProgressText.id = GalleryDownloadProgressTextId;
  // galleryDownloadProgressText.setAttribute(
  //   'style',
  //   `
  //     position: fixed;
  //     top: 50px;
  //     right: 50px;
  //     z-index:1000;
  //     background-color: black;
  //     color: white;
  //     opacity: 0.8;
  //     width: fit-content;
  //     padding: 1rem 2rem;
  //   `
  // );
  // document?.querySelector('body')?.appendChild(galleryDownloadProgressText);
  //
  // // const progressFn = (progressMsg: string) => {
  // //   galleryDownloadProgressText.innerText = progressMsg;
  // // };
  //
  // const finishFn = () => {
  //   const panel = document.createElement('div');
  //   panel.onclick = () => {
  //     panel.remove();
  //   };
  //
  //   panel.setAttribute(
  //     'style',
  //     `
  //     position: absolute;
  //     top: 0;
  //     left: 0;
  //     z-index:1000;
  //     height: 100%;
  //     width: 100%;
  //     background-color: black;
  //     opacity: 0.5;
  //   `
  //   );
  //   document?.querySelector('#main')?.appendChild(panel);
  //   document.querySelector(`#${GalleryDownloadProgressTextId}`)?.remove();
  //   setTitle('✅ ' + getTitle());
  //
  //   scrollIntoView('#gallery');
  //   // openGallery(); // galleryを開くと、ダウンロードが遅くなる
  //   console.log('download200GalleryImagesAndPrompts: done');
  // };
  //
  // await download200GalleryImagesAndPrompts(
  //   modelId.toString(),
  //   modelVersionId as string,
  //   modelName ?? '',
  //   200,
  //   previewImageList,
  //   progressFn,
  //   finishFn
  // )();
  //
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
  moveFileSizePanelUp();
  // hideHeader();
  warnLargeModels();

  removeButtonContainer();
  const parentNode = await addButtonContainer();

  const fileSizeText = await getFileSizeText();
  const doNotDownloadLargeModels =
    fileSizeText.includes(' GB)') && getConfig('doNotDownloadLargeModels');

  const buttonIdSelector = `#${BUTTON_ID}`;
  const button = document.createElement('a');
  button.id = BUTTON_ID;
  button.innerText = '⇣'; //getButtonLabel();
  button.setAttribute('style', downloadAllButtonStyle);
  button.addEventListener('click', async (e) => {
    e.preventDefault();
    setTimeout(async () => {
      await downloadAllImages(buttonIdSelector)();
    }, 1000);

    if (doNotDownloadLargeModels) {
      console.info('Model size is larger than expected, abort downloading.');
      return;
    }
    // start downloading a model
    const aTag = await getDownloadATag();
    if (aTag) {
      aTag.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    }
  });

  if (parentNode) {
    parentNode.appendChild(button);
  }
};
