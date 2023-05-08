import { buttonStyle } from './styles';
import {
  waitForElement,
  replaceWithDisabledButton,
  updateButtonText,
} from './utils';
import { getI18nLabel, getButtonLabel, getButtonCompleteLabel } from './lang';
import { createZip, fetchModelData, fetchGalleryData } from './infra';
import { getConfig } from './config_panel';

const BUTTON_ID = 'download-all-images-and-prompts';

const getModelInfo = async (modelId: string) => {
  const modelInfo = await fetchModelData(modelId);
  return modelInfo;
};

const getModeInfoAndImageList = async (href: string) => {
  const hrefModelId = href.match(/\/models\/(?<modelId>\d*)/)?.groups?.modelId;
  const hrefModelVersionId = href.match(/modelVersionId=(?<modelVersionId>\d*)/)
    ?.groups?.modelVersionId;

  if (!hrefModelId) {
    throw new Error(getI18nLabel('modelIdNotFoundError'));
  }

  const modelInfo = await getModelInfo(hrefModelId);

  const {
    id: modelId,
    name: modelName,
    creator: { username: username },
  } = modelInfo;

  const modelVersionId = hrefModelVersionId
    ? hrefModelVersionId
    : modelInfo.modelVersions[0].id;

  if (!modelVersionId) {
    throw new Error(getI18nLabel('modeVersionlIdNotFoundError'));
  }

  const modelVersionName =
    modelInfo.modelVersions.find((x: { id: number }) => {
      return `${x.id}` === `${modelVersionId}`;
    })?.name || 'no_version_name';

  // use fetchGalleryData instead of fetchModelVersionData,
  // due to modelVersion api returns first 10 images of preview.
  const imageList = await fetchGalleryData(
    `${modelId}`,
    null,
    `${modelVersionId}`,
    username
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

export const downloadImagesAndPrompts =
  (buttonIdSelector: string) => async () => {
    try {
      const button = await waitForElement(buttonIdSelector);

      if (!button) {
        return;
      }

      const {
        modelId,
        modelName,
        imageList,
        modelVersionId,
        modelVersionName,
        modelInfo,
      } = await getModeInfoAndImageList(window.location.href);

      const filenameFormat = getConfig('modelPreviewFilenameFormat');
      const filename = (filenameFormat as string)
        .replace('{modelId}', `${modelId ?? ''}`)
        .replace('{modelName}', modelName)
        .replace('{modelVersionId}', `${modelVersionId}`)
        .replace('{modelVersionName}', modelVersionName);

      await createZip(updateButtonText(button))(filename, modelInfo)(
        imageList.map((x) => ({
          ...x,
          url: x.url.replace(/width=\d*/, `width=${x.width},optimized=true`),
        }))
      );

      replaceWithDisabledButton(
        button,
        ` ${imageList.length} / ${imageList.length} ${getButtonCompleteLabel()}`
      );
    } catch (error: unknown) {
      alert((error as Error).message);
    }
  };

export const addModelImagesDownloadButton = async () => {
  const downloadButtonSelector = "a[href^='/api/download/models/']";
  await waitForElement(downloadButtonSelector);
  const buttonIdSelector = `#${BUTTON_ID}`;
  document.querySelector(buttonIdSelector)?.remove();

  const button = document.createElement('a');
  button.addEventListener('click', downloadImagesAndPrompts(buttonIdSelector));
  button.id = BUTTON_ID;
  button.innerText = getButtonLabel();
  button.setAttribute('style', buttonStyle);
  const buttonParent = document.querySelector(downloadButtonSelector);
  if (buttonParent) {
    buttonParent.parentNode?.appendChild(button);
  }
};
