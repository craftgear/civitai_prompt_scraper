import { buttonStyle, buttonContainerStyle } from './styles';
import {
  waitForElement,
  replaceWithDisabledButton,
  updateButtonText,
} from './utils';
import { getI18nLabel, getButtonLabel, getButtonCompleteLabel } from './lang';
import {
  createZip,
  fetchModelInfoByModleIdOrModelVersionId,
  fetchGalleryData,
} from './infra';
import { GalleryImagesResponse } from './types';
import { getConfig } from './config_panel';

const BUTTON_ID = 'download-all-images-and-prompts';

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
    // creator: { username: username },
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
  // due to modelVersion api returns first 10 images of preview.
  const imageList = await fetchGalleryData(
    `${modelId}`,
    null,
    `${modelVersionId}`,
    null
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
  (buttonIdSelector: string) =>
  async (): Promise<{
    imageList: GalleryImagesResponse['items'];
    modelName: string;
  } | null> => {
    try {
      const button = await waitForElement(buttonIdSelector);

      if (!button) {
        return null;
      }

      button.innerText = getI18nLabel('startingDownload');

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

      return { imageList, modelName };
    } catch (error: unknown) {
      alert((error as Error).message);
      return null;
    }
  };

const BUTTON_CONTAINER_ID = 'civitai_prompt_scraper';
export const addButtonContainer = async () => {
  const downloadButtonSelector = "a[href^='/api/download/models/']";
  const buttonParent = await waitForElement(downloadButtonSelector);

  const container = document.createElement('div');
  container.id = BUTTON_CONTAINER_ID;
  container.setAttribute('style', buttonContainerStyle);

  buttonParent?.parentNode?.parentNode?.appendChild(container);
};

export const getButtonContainerNode = async () => {
  return waitForElement(`#${BUTTON_CONTAINER_ID}`);
};

export const addModelImagesDownloadButton = async () => {
  const container = await getButtonContainerNode();
  const buttonIdSelector = `#${BUTTON_ID}`;
  document.querySelector(buttonIdSelector)?.remove();

  const button = document.createElement('a');
  button.addEventListener('click', downloadImagesAndPrompts(buttonIdSelector));
  button.id = BUTTON_ID;
  button.innerText = getButtonLabel();
  button.setAttribute('style', buttonStyle);

  container?.appendChild(button);
};
