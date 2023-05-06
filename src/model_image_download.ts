import { buttonStyle } from './styles';
import {
  waitForElement,
  parseNextData,
  replaceWithDisabledButton,
  updateButtonText,
} from './utils';
import { getI18nLabel, getButtonLabel, getButtonCompleteLabel } from './lang';
import { createZip, fetchGalleryData } from './infra';
import { getConfig } from './config_panel';

const BUTTON_ID = 'download-all-images-and-prompts';

const getModelInfo = () => {
  try {
    const data = parseNextData();
    const model = data.props.pageProps.trpcState.json.queries[1];
    return model.state.data;
  } catch (error: unknown) {
    throw new Error(
      `${getI18nLabel('parsingNextDataError')} ${(error as Error).message}`
    );
  }
};

const getModeInfoAndImageList = async (href: string) => {
  const modelInfo = getModelInfo();

  const {
    id: modelId,
    name: modelName,
    user: { username: username },
  } = modelInfo;

  if (!modelId) {
    throw new Error(getI18nLabel('modelIdNotFoundError'));
  }

  const hrefModelVersionId = href.match(/modelVersionId=(?<modelVersionId>\d*)/)
    ?.groups?.modelVersionId;
  const modelVersionId = hrefModelVersionId
    ? hrefModelVersionId
    : modelInfo.modelVersions[0].id;

  if (!modelVersionId) {
    throw new Error(getI18nLabel('modeVersionlIdNotFoundError'));
  }

  const modelVersionName =
    modelInfo.modelVersions.find((x: { id: number }) => {
      return `${x.id}` === `${modelVersionId}`;
    }).name || 'no_version_name';

  // use fetchGalleryData instead of fetchModelVersionData,
  // due to modelVersion api returns first 10 images of preview.
  const imageList = await fetchGalleryData(
    modelId,
    null,
    modelVersionId,
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
        .replace('{modelVersionId}', modelVersionId)
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

  if (document.querySelector(buttonIdSelector)) {
    document.querySelector(buttonIdSelector)?.remove();
  }

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
