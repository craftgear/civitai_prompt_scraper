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

// const getGalleryModelIdAndPostId = (href: string) => {
//   const hrefModelId = href.match(/modelId=(?<modelId>\d*)/)?.groups?.modelId;
//   const hrefPostId = href.match(/postId=(?<postId>\d*)/)?.groups?.postId;
//   if (!hrefModelId || !hrefPostId) {
//     throw new Error('Either modelId or postId found');
//   }
//
//   return {
//     modelId: hrefModelId,
//     postId: hrefPostId,
//   };
// };
//
// const downloadAllModelRelatedFiles = (buttonIdSelector: string) => async () => {
//   // save previews as a zip file
//   const {
//     imageList: previewImageList,
//     modelName,
//     modelId,
//     modelVersionId,
//   } = (await downloadImagesAndPrompts(
//     buttonIdSelector,
//     window.location.href
//   )()) ?? {};
//
//   // save galleries as zip files
//   const clientHeight = document.querySelector('body')?.clientHeight;
//   if (clientHeight) {
//     window.scrollTo(0, clientHeight);
//   } else {
//     document.querySelector('#gallery')?.scrollIntoView();
//   }
//   const galleryElementSelector = '#gallery a[href^="/images/"]';
//   await waitForElement(galleryElementSelector);
//   await sleep(3000);
//
//   const galleryLinks = document.querySelectorAll(galleryElementSelector);
//   const postIds = (() => {
//     const postIdSet = new Set();
//     return Array.from(galleryLinks).reduce(
//       (acc: { modelId: string; postId: string; x: Element }[], x: Element) => {
//         const href = x.getAttribute('href');
//         if (!href) {
//           return acc;
//         }
//         const { modelId, postId } = getGalleryModelIdAndPostId(href);
//         if (!postId) {
//           return acc;
//         }
//         if (postIdSet.has(postId)) {
//           return acc;
//         }
//         postIdSet.add(postId);
//         return [...acc, { modelId, postId, x }];
//       },
//       []
//     );
//   })();
//
//   await Promise.all(
//     postIds.length === 1
//       ? []
//       : postIds.map(async ({ modelId, postId, x }, i: number) => {
//           const button = document.createElement('div');
//           button.id = `${BUTTON_ID}_${i}`;
//           button.innerText = `${modelId}_${postId}`;
//           button.setAttribute('style', downloadAllGalleryButtonStyle);
//           x.parentNode?.parentNode?.appendChild(button);
//
//           const onFinishFn = () => {
//             replaceWithDisabledButton(
//               button,
//               `${postId} ${getButtonCompleteLabel()}`,
//               downloadAllGalleryDisabledButtonStyle
//             );
//           };
//           return downloadGalleryImagesAndPrompts(
//             `#${BUTTON_ID}_${i}`,
//             modelId,
//             postId,
//             modelName ?? '',
//             onFinishFn,
//             previewImageList,
//             postIds.length
//           )();
//         })
//   );
//
//   setTimeout(() => {
//     const panel = document.createElement('div');
//
//     panel.setAttribute(
//       'style',
//       `
//       position: absolute;
//       top: 0;
//       left: 0;
//       z-index:1000;
//       height: 100%;
//       width: 100%;
//       color: black;
//       opacity: 0.5;
//     $
//     );
//     document?.querySelector('body')?.appendChild(panel);
//   }, 100);
//   console.warn('##### done #####');
//   return;
// };
//

export const addModelDownloadAllButton = async (href: string) => {
  hideGallery();
  deleteDiscussion();
  darkenTextColor();
  deleteCreateButton();
  deleteSuggestedResources();
  // deleteMainPaddingBottom();
  enableFullScreenCapture();

  const parentNode = await getButtonContainerNode();

  const buttonIdSelector = `${BUTTON_ID}`;
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
