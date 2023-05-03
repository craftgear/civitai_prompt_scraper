import { buttonStyle, disabledButtonStyle } from "./types";
import { saveAs } from "file-saver";
import { fetchGalleryData, createZip, waitForElement } from "./utils";

const BUTTON_ID = "download-all-gallery-images-and-prompts";

const downloadGalleryImagesAndPrompts =
  (modelId: string, postId: string) => async () => {
    const data = await fetchGalleryData(modelId, postId);

    const button = await waitForElement(`#${BUTTON_ID}`);
    if (!button) {
      return;
    }

    const { content, error } = await createZip(button)(data.items);

    if (error) {
      alert(error.message);
      return;
    }

    saveAs(content, `${modelId}_${postId}.zip`);

    if (button) {
      button.setAttribute("style", disabledButtonStyle);
      button.innerHTML = ` ${data.items.length} / ${data.items.length} 完了`;
    }
  };

export const addGalleryDownloadButton = async () => {
  const matchedModel = window.location.search.match(/modelId=(?<modelId>\d*)/);
  const matchedPost = window.location.search.match(/postId=(?<postId>\d*)/);

  const modelId = matchedModel?.groups?.modelId || "";
  const postId = matchedPost?.groups?.postId || "";
  document.querySelector(`#${BUTTON_ID}`)?.remove();
  if (!postId) {
    return;
  }
  const button = document.createElement("button");
  button.addEventListener(
    "click",
    downloadGalleryImagesAndPrompts(modelId, postId)
  );
  button.id = BUTTON_ID;
  button.innerText = "画像＆jsonダウンロード";
  button.setAttribute("style", buttonStyle);
  document
    .querySelector("#freezeBlock .mantine-Stack-root")
    .appendChild(button);
};
