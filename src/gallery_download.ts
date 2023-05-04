import { saveAs } from 'file-saver';
import { buttonStyle, disabledButtonStyle } from './types';
import {
  waitForElement,
  parseNextData,
  buildImgUrl,
  getButtonLabel,
  getButtonCompleteLabel,
} from './utils';
import { fetchGalleryData, createZip } from './infra';

const BUTTON_ID = 'download-all-gallery-images-and-prompts';

const downloadGalleryImagesAndPrompts =
  (modelId: string, postId: string) => async () => {
    const data = await fetchGalleryData(modelId, postId);

    const button = await waitForElement(`#${BUTTON_ID}`);
    if (!button) {
      return;
    }

    await createZip(button)(`modelId_${modelId}-postId_${postId}.zip`)(
      data.items.map((x) => ({
        ...x,
        url: x.url.replace(
          `width=${x.width}`,
          `width=${x.width},optimized=true`
        ),
      }))
    );

    if (button) {
      button.setAttribute('style', disabledButtonStyle);
      button.innerText = ` ${data.items.length} / ${
        data.items.length
      } ${getButtonCompleteLabel()}`;
    }
  };

const downloadSingleImagesAndPrompts = async () => {
  const data = parseNextData();
  const model = data.props.pageProps.trpcState.json.queries[0];
  const { id, url, meta, width, name, hash } = model.state.data;
  const imgUrl = buildImgUrl(url, width, name);

  const button = await waitForElement(`#${BUTTON_ID}`);
  if (!button) {
    return;
  }

  await createZip(button)(`imageId_${id}.zip`)([{ url: imgUrl, hash, meta }]);

  if (button) {
    button.setAttribute('style', disabledButtonStyle);
    button.innerText = getButtonCompleteLabel();
  }
};

export const addGalleryDownloadButton = async () => {
  const href = window.location.href;
  const matchedModel = href.match(/modelId=(?<modelId>\d*)/);
  const matchedModelVersion = href.match(
    /modelVersionId=(?<modelVersionId>\d*)/
  );
  const matchedPost = href.match(/postId=(?<postId>\d*)/);
  const matchedPrioritizedUser = href.match(
    /prioritizedUserIds=(?<prioritizedUserId>\d*)/
  );

  const modelId = matchedModel?.groups?.modelId || null;
  const modelVersionId = matchedModelVersion?.groups?.modelVersionId || null;
  const postId = matchedPost?.groups?.postId || null;
  const prioritizedUserId =
    matchedPrioritizedUser?.groups?.prioritizedUserId || null;

  document.querySelector(`#${BUTTON_ID}`)?.remove();
  const button = document.createElement('button');

  // モデル画面のトップ画像から開いた場合
  if (modelVersionId && prioritizedUserId) {
    // TODO: モデルの方のダウンロードボタンを使う
    // const data = parseNextData();
    // const model = data.props.pageProps.trpcState.json.queries[1];
    // button.addEventListener(
    //   'click',
    //   downloadGalleryImagesAndPrompts(model.id, postId)
    // );
  }
  // 画像単体で開いた場合
  if (!postId && !modelId && !modelVersionId) {
    button.addEventListener('click', downloadSingleImagesAndPrompts);
  }
  // モデルのギャラリーエリアから開いた場合
  if (modelId && postId) {
    button.addEventListener(
      'click',
      downloadGalleryImagesAndPrompts(modelId, postId)
    );
  }

  button.id = BUTTON_ID;
  button.innerText = getButtonLabel();
  button.setAttribute('style', buttonStyle);
  if (document.querySelector('.mantine-Modal-modal')) {
    document
      .querySelector('.mantine-Modal-modal .mantine-Card-cardSection')
      ?.appendChild(button);
  } else {
    document
      .querySelector('#freezeBlock .mantine-Stack-root')
      ?.appendChild(button);
  }
};
