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

const downloadGalleryImagesAndPrompts =
  (buttonIdSelector: string, modelId: string | null, postId: string) =>
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

      replaceWithDisabledButton(
        button,
        ` ${imgList.length} / ${imgList.length} ${getButtonCompleteLabel()}`
      );
    } catch (error: unknown) {
      alert((error as Error).message);
    }
  };

// const downloadSingleImagesAndPrompts =
//   (buttonIdSelector: string) => async () => {
//     try {
//       const data = parseNextData();
//       const model = data.props.pageProps.trpcState.json.queries[0];
//       const { id, url, meta, width, name, hash } = model.state.data;
//       if (!url || !width || !name) {
//         throw new Error(
//           `image properties not found: url ${url}, width ${width}, name ${name}`
//         );
//       }
//       const imgUrl = buildImgUrl(url, width, name);
//
//       const button = await waitForElement(buttonIdSelector);
//       if (!button) {
//         return;
//       }
//
//       await createZip(updateButtonText(button))(`imageId_${id}.zip`)([
//         { url: imgUrl, hash, meta },
//       ]);
//
//       replaceWithDisabledButton(button, getButtonCompleteLabel());
//     } catch (error: unknown) {
//       alert((error as Error).message);
//     }
//   };

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
};
