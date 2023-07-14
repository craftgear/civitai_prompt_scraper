import { getButtonCompleteLabel } from '../assets/lang';
import {
  downloadAllButtonStyle,
  downloadAllGalleryButtonStyle,
  downloadAllGalleryDisabledButtonStyle,
} from '../assets/styles';
import {
  darkenTextColor,
  deleteCreateButton,
  deleteSuggestedResources,
  getButtonContainerNode,
  replaceWithDisabledButton,
  waitForElement,
} from '../utils/dom';
import { sleep } from '../utils/utils';

const BUTTON_ID = 'download-all-model-related-files';
const downloadButtonSelector = "a[href^='/api/download/models/']";

import { downloadGalleryImagesAndPrompts } from './gallery_download';
import {
  downloadImagesAndPrompts,
  toggleGallary,
} from './model_image_download';

const getGalleryModelIdAndPostId = (href: string) => {
  const hrefModelId = href.match(/modelId=(?<modelId>\d*)/)?.groups?.modelId;
  const hrefPostId = href.match(/postId=(?<postId>\d*)/)?.groups?.postId;
  if (!hrefModelId || !hrefPostId) {
    throw new Error('Either modelId or postId found');
  }

  return {
    modelId: hrefModelId,
    postId: hrefPostId,
  };
};

const downloadAllModelRelatedFiles = (buttonIdSelector: string) => async () => {
  // save previews as a zip file
  const { imageList: previewImageList, modelName } =
    (await downloadImagesAndPrompts(
      buttonIdSelector,
      window.location.href
    )()) ?? {};

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
  const postIds = (() => {
    const postIdSet = new Set();
    return Array.from(galleryLinks).reduce(
      (acc: { modelId: string; postId: string; x: Element }[], x: Element) => {
        const href = x.getAttribute('href');
        if (!href) {
          return acc;
        }
        const { modelId, postId } = getGalleryModelIdAndPostId(href);
        if (!postId) {
          return acc;
        }
        if (postIdSet.has(postId)) {
          return acc;
        }
        postIdSet.add(postId);
        return [...acc, { modelId, postId, x }];
      },
      []
    );
  })();

  await Promise.all(
    postIds.length === 1
      ? []
      : postIds.map(async ({ modelId, postId, x }, i: number) => {
          const button = document.createElement('div');
          button.id = `${BUTTON_ID}_${i}`;
          button.innerText = `${modelId}_${postId}`;
          button.setAttribute('style', downloadAllGalleryButtonStyle);
          x.parentNode?.parentNode?.appendChild(button);

          const onFinishFn = () => {
            replaceWithDisabledButton(
              button,
              `${postId} ${getButtonCompleteLabel()}`,
              downloadAllGalleryDisabledButtonStyle
            );
          };
          return downloadGalleryImagesAndPrompts(
            `#${BUTTON_ID}_${i}`,
            modelId,
            postId,
            modelName ?? '',
            onFinishFn,
            previewImageList
          )();
        })
  );

  setTimeout(() => {
    alert('done');
  }, 100);
  console.warn('##### done #####');
  return;
};

export const addModelDownloadAllButton = async (href: string) => {
  darkenTextColor();
  deleteCreateButton();
  deleteSuggestedResources();
  // deleteMainPaddingBottom();

  const parentNode = await getButtonContainerNode();

  const buttonIdSelector = `#${BUTTON_ID}`;
  document.querySelector(buttonIdSelector)?.remove();

  const button = document.createElement('a');
  button.addEventListener(
    'click',
    downloadAllModelRelatedFiles(buttonIdSelector)
  );
  button.id = BUTTON_ID;
  button.innerText = '⇣'; //getButtonLabel();
  button.setAttribute('style', downloadAllButtonStyle);

  // start downloading a model
  button.addEventListener('click', async () => {
    toggleGallary();
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

  toggleGallary();
};
