import {
  getButtonCompleteLabel,
  getButtonLabel,
  getI18nLabel,
} from '../assets/lang';
import { buttonStyle } from '../assets/styles';

import { getConfig } from '../infra/config_panel';
import { createLink, selector } from '../infra/dom';
import { createZip } from '../infra/file';
import {
  fetchGalleryData,
  fetchModelInfoByModleIdOrModelVersionId,
} from '../infra/req';
import {
  getButtonContainerNode,
  replaceWithDisabledButton,
  updateButtonText,
  waitForElement,
} from '../utils/dom';

const BUTTON_ID = 'download-all-images-and-prompts';
const downloadButtonSelector = "a[href^='/api/download/models/']";

const getModeInfoAndImageList = async (href: string) => {
  const hrefModelId =
    href.match(/\/models\/(?<modelId>\d*)/)?.groups?.modelId ??
    href.match(/modelId=(?<modelId>\d*)/)?.groups?.modelId;
  const hrefModelVersionId = href.match(/modelVersionId=(?<modelVersionId>\d*)/)
    ?.groups?.modelVersionId;

  const modelInfo = await fetchModelInfoByModleIdOrModelVersionId(
    hrefModelId,
    hrefModelVersionId
  );

  const {
    id: modelId,
    name: modelName,
    creator: { username: username },
  } = modelInfo;

  if (!modelId) {
    throw new Error(getI18nLabel('modelIdNotFoundError'));
  }

  const modelVersionId = hrefModelVersionId
    ? hrefModelVersionId
    : modelInfo.modelVersions[0].id;

  if (!modelVersionId) {
    throw new Error(getI18nLabel('modelVersionIdNotFoundError'));
  }

  const modelVersionName =
    modelInfo.modelVersions.find((x: { id: number }) => {
      return `${x.id}` === `${modelVersionId}`;
    })?.name || 'no_version_name';

  // use fetchGalleryData instead of fetchModelVersionData,
  // due to modelVersion api returns only first 10 images of preview.
  const imageList = await fetchGalleryData(
    `${modelId}`,
    null,
    `${modelVersionId}`,
    `${username}`
  );
  return {
    modelId,
    modelName,
    modelVersionId,
    modelVersionName,
    imageList,
    modelInfo,
  };
};

const startModelDownload = async () => {
  await waitForElement(downloadButtonSelector);
  const modelDownloadUrl = document
    .querySelector(downloadButtonSelector)
    ?.getAttribute('href');

  if (modelDownloadUrl) {
    window.open(modelDownloadUrl, '_blank');
  }
};

export const downloadImagesAndPrompts =
  (buttonIdSelector: string, location: string) => async () => {
    try {
      const button = await waitForElement(buttonIdSelector);

      if (!button) {
        return;
      }

      button.innerText = getI18nLabel('startingDownload');

      const {
        modelId,
        modelName,
        imageList,
        modelVersionId,
        modelVersionName,
        modelInfo,
      } = await getModeInfoAndImageList(location);

      const filenameFormat = getConfig('modelPreviewFilenameFormat');
      const filename = (filenameFormat as string)
        .replace('{modelId}', `${modelId ?? ''}`)
        .replace('{modelName}', modelName)
        .replace('{modelVersionId}', `${modelVersionId}`)
        .replace('{modelVersionName}', modelVersionName);

      await createZip(updateButtonText(button))(filename, modelInfo)(imageList);

      replaceWithDisabledButton(
        button,
        ` ${imageList.length} / ${imageList.length} ${getButtonCompleteLabel()}`
      );

      return { imageList, modelName };
    } catch (error: unknown) {
      alert((error as Error).message);
    }
  };

export const addModelImagesDownloadButton = async (href: string) => {
  const container = await getButtonContainerNode();
  const buttonIdSelector = `#${BUTTON_ID}`;
  selector(buttonIdSelector)?.remove();

  const button = createLink();
  button.addEventListener(
    'click',
    downloadImagesAndPrompts(buttonIdSelector, href)
  );
  button.id = BUTTON_ID;
  button.innerText = getButtonLabel();
  button.setAttribute('style', buttonStyle);

  if (getConfig('downloadModelAsWell')) {
    // start downloading a model
    button.addEventListener('click', startModelDownload);
  }

  container?.appendChild(button);
};
