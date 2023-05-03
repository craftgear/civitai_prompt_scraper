import { saveAs } from "file-saver";
import { buttonStyle, disabledButtonStyle, NextData } from "./types";
import { waitForElement, createZip } from "./utils";

const BUTTON_ID = "download-all-images-and-prompts";

const parseNextData = () => {
  const nextData: NextData = (document.querySelector(
    "#__NEXT_DATA__"
  ) as HTMLElement) || { innerText: "" };
  const data = JSON.parse(nextData.innerText);
  return data;
};
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
  const versionName =
    modelVersions.find((x: any) => x.id === imageData[0].modelVersionId).name ||
    "";

  const urlAndMeta = imageData.map(
    (x: { url: string; width: number; name: string; meta: object }) => ({
      url: `https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/${x.url}/width=${
        x.width
      },optimized=true/${x.name && ""}`,
      meta: x.meta,
    })
  );

  const { content, error } = await createZip(button)(urlAndMeta);

  if (error) {
    alert(error.message);
    return;
  }

  saveAs(content, `${modelName}_${versionName}.zip`);

  if (button) {
    button.setAttribute("style", disabledButtonStyle);
    button.innerHTML = ` ${urlAndMeta.length} / ${urlAndMeta.length} 完了`;
  }
};

export const addDownloadButton = async () => {
  const downloadButtonSelector = "a[href^='/api/download/models/']";
  await waitForElement(downloadButtonSelector);
  const button = document.createElement("a");
  button.addEventListener("click", downloadImagesAndPrompts);
  button.id = BUTTON_ID;
  button.innerText = "画像＆jsonダウンロード";
  button.setAttribute("style", buttonStyle);
  document
    .querySelector(downloadButtonSelector)
    .parentNode?.appendChild(button);
};
