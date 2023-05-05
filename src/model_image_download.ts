import { buttonStyle } from './styles';
import {
  waitForElement,
  parseNextData,
  replaceWithDisabledButton,
  updateButtonText,
} from './utils';
import { getButtonLabel, getButtonCompleteLabel } from './lang';
import { createZip, fetchModelVersionData } from './infra';
import { getConfig } from './config_panel';

const BUTTON_ID = 'download-all-images-and-prompts';

const getModelInfo = () => {
  const data = parseNextData();
  const model = data.props.pageProps.trpcState.json.queries[1];
  return model.state.data;
};

const getModeInfoAndImageList = async (href: string) => {
  let modelVersionId = href.match(/modelVersionId=(?<modelVersionId>\d*)/)
    ?.groups?.modelVersionId;
  // バージョンが一つの場合モデルページのurlにmodelVersionIdがない
  if (!modelVersionId) {
    const model = await getModelInfo();
    modelVersionId = model.modelVersions[0].id;
  }

  if (!modelVersionId) {
    throw new Error(`modelVersionId is not found.`);
  }

  const modelInfo = await fetchModelVersionData(modelVersionId);
  const {
    modelId,
    model,
    files,
    baseModel,
    trainedWords,
    createdAt,
    updatedAt,
    images: imageList,
    name: modelVersionName,
  } = modelInfo;

  return {
    modelId,
    modelName: model.name,
    modelVersionId,
    modelVersionName,
    imageList,
    modelMeta: {
      id: modelId,
      ...model,
      modelVersionId,
      modelVersionName,
      baseModel,
      trainedWords,
      files,
      createdAt,
      updatedAt,
    },
  };
};

export const downloadImagesAndPrompts =
  (buttonIdSelector: string) => async () => {
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
      modelMeta,
    } = await getModeInfoAndImageList(window.location.href);

    const filenameFormat = getConfig('modelPreviewFilenameFormat');
    const filename = (filenameFormat as string)
      .replace('{modelId}', `${modelId ?? ''}`)
      .replace('{modelName}', modelName)
      .replace('{modelVersionId}', modelVersionId)
      .replace('{modelVersionName}', modelVersionName);

    await createZip(updateButtonText(button))(filename, modelMeta)(
      imageList.map((x) => ({
        ...x,
        url: x.url.replace(/width=\d*/, `width=${x.width},optimized=true`),
      }))
    );

    replaceWithDisabledButton(
      button,
      ` ${imageList.length} / ${imageList.length} ${getButtonCompleteLabel()}`
    );
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
