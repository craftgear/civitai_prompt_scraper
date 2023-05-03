import { saveAs } from "file-saver";
import { buttonStyle, disabledButtonStyle } from "./types";
import {
  waitForElement,
  createZip,
  parseNextData,
  buildImgUrl,
  getButtonLabel,
  getButtonCompleteLabel,
} from "./utils";

const BUTTON_ID = "download-all-images-and-prompts";

const getModelInfo = () => {
  const data = parseNextData();
  const model = data.props.pageProps.trpcState.json.queries[1];
  return model.state.data;
};

const getImagesData = () => {
  const data = parseNextData();
  const images = data.props.pageProps.trpcState.json.queries[0];
  return images.state.data.pages[0].items;
};

const downloadImagesAndPrompts = async () => {
  const button = await waitForElement(`#${BUTTON_ID}`);
  button?.removeEventListener("click", downloadImagesAndPrompts);

  const model = await getModelInfo();
  const modelName = model.name;
  const modelVersions = model.modelVersions;

  const imageData = getImagesData();
  const modelVersionName =
    modelVersions.find((x: any) => x.id === imageData[0].modelVersionId).name ||
    "";

  const urlAndMeta = imageData.map(
    (x: {
      url: string;
      width: number;
      name: string;
      hash: string;
      meta: object;
    }) => ({
      url: buildImgUrl(x.url, x.width, x.name),
      hash: x.hash,
      meta: x.meta,
    })
  );

  const { content, error } = await createZip(button)(urlAndMeta);

  if (error) {
    alert(error.message);
    return;
  }

  saveAs(content, `${modelName}[${model.id}]_${modelVersionName}.zip`);

  if (button) {
    button.setAttribute("style", disabledButtonStyle);
    button.innerText = ` ${urlAndMeta.length} / ${
      urlAndMeta.length
    } ${getButtonCompleteLabel()}`;
  }
};

export const addDownloadButton = async () => {
  const downloadButtonSelector = "a[href^='/api/download/models/']";
  await waitForElement(downloadButtonSelector);
  const button = document.createElement("a");
  button.addEventListener("click", downloadImagesAndPrompts);
  button.id = BUTTON_ID;
  button.innerText = getButtonLabel();
  button.setAttribute("style", buttonStyle);
  const buttonParent = document.querySelector(downloadButtonSelector);
  if (buttonParent) {
    buttonParent.parentNode?.appendChild(button);
  }
};
