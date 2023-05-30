import {
  downloadAllButtonStyle,
  downloadAllGalleryStyle,
  downloadAllGalleryDoneStyle,
} from './styles';
import {
  // screenShot,
  sleep,
  waitForElement,
  replaceWithDisabledButton,
} from './utils';
import { getI18nLabel, getButtonLabel, getButtonCompleteLabel } from './lang';
// import { getConfig } from './config_panel';

const BUTTON_ID = 'download-all-model-related-files';
const downloadButtonSelector = "a[href^='/api/download/models/']";

import { downloadImagesAndPrompts } from './model_image_download';
import { downloadGalleryImagesAndPrompts } from './gallery_download';

const getGalleryModelIdAndPostId = (href: string) => {
  const hrefModelId = href.match(/modelId=(?<modelId>\d*)/)?.groups?.modelId;
  const hrefPostId = href.match(/postId=(?<postId>\d*)/)?.groups?.postId;

  if (!hrefModelId || !hrefPostId) {
    throw new Error(getI18nLabel('modelIdNotFoundError'));
  }

  return {
    modelId: hrefModelId,
    postId: hrefPostId,
  };
};

const downloadAllModelRelatedFiles = (buttonIdSelector: string) => async () => {
  // start downloading a model
  await waitForElement(downloadButtonSelector);
  const modelUrl = document
    .querySelector(downloadButtonSelector)
    ?.getAttribute('href');
  if (modelUrl) {
    window.open(modelUrl, '_blank');
  }

  // save galleries as zip files
  const clientHeight = document.querySelector('body')?.clientHeight;
  if (clientHeight) {
    window.scrollTo(0, clientHeight);
  } else {
    document.querySelector('#gallery')?.scrollIntoView();
  }

  const galleryElementSelector = '#gallery a[href^="/images/"]';
  await waitForElement(galleryElementSelector);
  await sleep(1000);

  const galleryLinks = document.querySelectorAll(galleryElementSelector);
  const postIdSet = new Set();

  await Promise.all([
    // save previews as a zip file
    downloadImagesAndPrompts(buttonIdSelector)(),
    // download gallery
    ...Array.from(galleryLinks).map(async (x: Element, i: number) => {
      const href = x.getAttribute('href');
      if (!href) {
        return;
      }
      const { modelId, postId } = getGalleryModelIdAndPostId(href);
      if (postIdSet.has(postId)) {
        return;
      }

      const button = document.createElement('div');
      button.id = `${BUTTON_ID}_${i}`;
      button.innerText = `${modelId}_${postId}`;
      button.setAttribute('style', downloadAllGalleryStyle);
      document.querySelector('#gallery h2')?.parentNode?.appendChild(button);

      postIdSet.add(postId);

      const onFinishFn = () => {
        replaceWithDisabledButton(
          button,
          `${postId} done`,
          downloadAllGalleryDoneStyle
        );
      };
      return downloadGalleryImagesAndPrompts(
        `#${BUTTON_ID}_${i}`,
        modelId,
        postId,
        onFinishFn
      )();
    }),
  ]);
  alert('done');
  console.warn('##### done #####');
};

export const addDownloadAllButton = async () => {
  await waitForElement(downloadButtonSelector);

  const buttonIdSelector = `#${BUTTON_ID}`;
  document.querySelector(buttonIdSelector)?.remove();

  const button = document.createElement('a');
  button.addEventListener(
    'click',
    downloadAllModelRelatedFiles(buttonIdSelector)
  );
  button.id = BUTTON_ID;
  button.innerText = 'dowload all'; //getButtonLabel();
  button.setAttribute('style', downloadAllButtonStyle);
  const buttonParent = document.querySelector(downloadButtonSelector);
  if (buttonParent) {
    buttonParent.parentNode?.appendChild(button);
  }
};
