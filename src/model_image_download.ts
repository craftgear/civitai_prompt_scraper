import { buttonStyle, disabledButtonStyle } from './types';
import {
  waitForElement,
  parseNextData,
  getButtonLabel,
  getButtonCompleteLabel,
} from './utils';
import { createZip, fetchModelVersionInfo } from './infra';

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

  const {
    modelId,
    model: { name: modelName },
    images: imageList,
    name: modelVersionName,
  } = await fetchModelVersionInfo(modelVersionId);

  return { modelId, modelName, imageList, modelVersionName };
};

const downloadImagesAndPrompts = async () => {
  const button = await waitForElement(`#${BUTTON_ID}`);
  button?.removeEventListener('click', downloadImagesAndPrompts);

  const { modelId, modelName, imageList, modelVersionName } =
    await getModeInfoAndImageList(window.location.href);
  console.log('----- modelName:', modelName);
  console.log('----- imageList:', imageList);
  console.log('modelVersionName', modelVersionName);

  await createZip(button)(`${modelName}[${modelId}]_${modelVersionName}.zip`)(
    imageList
  );

  if (button) {
    button.setAttribute('style', disabledButtonStyle);
    button.innerText = ` ${imageList.length} / ${
      imageList.length
    } ${getButtonCompleteLabel()}`;
  }
};

export const addDownloadButton = async () => {
  const downloadButtonSelector = "a[href^='/api/download/models/']";
  await waitForElement(downloadButtonSelector);

  if (document.querySelector(`#${BUTTON_ID}`)) {
    document.querySelector(`#${BUTTON_ID}`)?.remove();
  }

  const button = document.createElement('a');
  button.addEventListener('click', downloadImagesAndPrompts);
  button.id = BUTTON_ID;
  button.innerText = getButtonLabel();
  button.setAttribute('style', buttonStyle);
  const buttonParent = document.querySelector(downloadButtonSelector);
  if (buttonParent) {
    buttonParent.parentNode?.appendChild(button);
  }
};
