import { buttonStyle } from './types';
import {
  waitForElement,
  parseNextData,
  replaceWithDisabledButton,
} from './utils';
import { getButtonLabel, getButtonCompleteLabel } from './lang';
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

  if (!modelVersionId) {
    throw new Error(`modelVersionId is not found.`);
  }

  const {
    modelId,
    model: { name: modelName },
    images: imageList,
    name: modelVersionName,
  } = await fetchModelVersionInfo(modelVersionId);

  return { modelId, modelName, imageList, modelVersionName };
};

export const downloadImagesAndPrompts =
  (buttonIdSelector: string) => async () => {
    const button = await waitForElement(buttonIdSelector);

    if (!button) {
      return;
    }

    const { modelId, modelName, imageList, modelVersionName } =
      await getModeInfoAndImageList(window.location.href);

    await createZip(button)(`${modelName}[${modelId}]_${modelVersionName}.zip`)(
      imageList
    );

    replaceWithDisabledButton(
      button,
      ` ${imageList.length} / ${imageList.length} ${getButtonCompleteLabel()}`
    );
  };

export const addDownloadButton = async () => {
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
