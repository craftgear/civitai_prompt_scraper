import {
  getButtonCompleteLabel,
  getButtonLabel,
  getI18nLabel,
} from '../assets/lang';
import { galleryButtonStyle } from '../assets/styles';
import { buildImgUrl } from '../domain/logic';
import { ButtonState } from '../domain/types';
import { downloadImagesAndPrompts } from '../service/model_image_download';

import { getConfig } from '../infra/config_panel';
import { createLink, getTitle, selector, setTitle } from '../infra/dom';
import { createZip } from '../infra/file';
import { fetchGalleryData } from '../infra/req';
import {
  parseModelMetaFromGalleryNextData,
  parseModelMetaFromSingleImageNextData,
  replaceWithDisabledButton,
  updateButtonText,
  waitForElement,
} from '../utils/dom';

import { GalleryImage } from '../domain/types';

const BUTTON_ID = 'download-all-gallery-images-and-prompts';

export const downloadGalleryImagesAndPrompts =
  (
    buttonIdSelector: string,
    modelId: string | null,
    postId: string,
    modelName: string | null,
    onFinishFn?: () => void,
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

const downloadSingleImagesAndPrompts =
  (buttonIdSelector: string) => async () => {
    try {
      const model = parseModelMetaFromSingleImageNextData();
      const { id, url, meta, width, name, hash } = model.state.data;
      if (!url || !width || !name) {
        throw new Error(
          `image properties not found: url ${url}, width ${width}, name ${name}`
        );
      }
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

const extractIdsFromUrl = (href: string) => {
  const matchedModel = href.match(/modelId=(?<modelId>\d*)/);
  const modelId = matchedModel?.groups?.modelId || null;

  const matchedModelVersion = href.match(
    /modelVersionId=(?<modelVersionId>\d*)/
  );
  const modelVersionId = matchedModelVersion?.groups?.modelVersionId || null;

  const matchedPost = href.match(/postId=(?<postId>\d*)/);
  const postId = matchedPost?.groups?.postId || null;

  const matchedPrioritizedUser = href.match(
    /prioritizedUserIds=(?<prioritizedUserId>\d*)/
  );
  const prioritizedUserId =
    matchedPrioritizedUser?.groups?.prioritizedUserId || null;

  const matchedImageId = href.match(/images\/(?<imageId>\d*)/);
  const imageId = matchedImageId?.groups?.imageId || null;

  return { modelVersionId, prioritizedUserId, modelId, postId, imageId };
};

const extractModelNameFromNextData = () => {
  const metaData = parseModelMetaFromGalleryNextData();

  const modelName = metaData?.Model ?? 'undefined';

  if (getConfig('preferModelNameToLoRAName')) {
    return modelName;
  }

  // Apparently a key starts with double quotation(") is a LoRA name.
  const keys = Object.keys(metaData).filter((x) => x.startsWith('"'));

  return keys.length > 0
    ? keys.map((x) => x.replace('"', '')).join(',')
    : 'undefined';
};

const extractModelName = (metaData: any) => {
  const modelName = metaData?.Model ?? 'undefined';

  if (getConfig('preferModelNameToLoRAName')) {
    return modelName;
  }

  // Apparently a key starts with double quotation(") is a LoRA name.
  const keys = Object.keys(metaData).filter((x) => x.startsWith('"'));

  return keys.length > 0
    ? keys.map((x) => x.replace('"', '')).join(',')
    : 'undefined';
};

export const addGalleryDownloadButton = async (href: string) => {
  const buttonIdSelector = `#${BUTTON_ID}`;
  const _button = selector(buttonIdSelector);
  if (_button && _button.getAttribute('data-state') !== ButtonState.ready) {
    return;
  }
  if (_button) {
    _button?.remove();
  }

  const { modelVersionId, prioritizedUserId, modelId, postId, imageId } =
    extractIdsFromUrl(href);

  const modelName = extractModelNameFromNextData();

  const onFinishFn = () => {
    if (getConfig('galleryAutoDownload')) {
      setTitle('✅ ' + getTitle());
    }
  };

  const eventListener = (() => {
    // open gallery from model preview images
    if (modelVersionId && prioritizedUserId) {
      return downloadImagesAndPrompts(buttonIdSelector, href);
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
    if (imageId) {
      return downloadSingleImagesAndPrompts(buttonIdSelector);
    }
    return null;
  })();

  if (!eventListener) {
    throw new Error('No necessary parameters found');
  }

  const button = createLink(
    BUTTON_ID,
    galleryButtonStyle,
    getButtonLabel(),
    eventListener
  );
  button.setAttribute('data-state', ButtonState.ready);
  if (selector('.mantine-Modal-modal')) {
    const parentNode = await waitForElement(
      '.mantine-Modal-modal .mantine-Card-cardSection'
    );
    parentNode?.appendChild(button);
  } else if (!selector('#gallery')) {
    const parentNode = await waitForElement('#freezeBlock .mantine-Stack-root');
    parentNode?.appendChild(button);
  }

  if (
    getConfig('galleryAutoDownload') &&
    button.getAttribute('data-state') === ButtonState.ready
  ) {
    setTimeout(() => {
      button.click();
    }, 500);
  }
};
