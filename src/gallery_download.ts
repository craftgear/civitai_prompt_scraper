import { buttonStyle } from './types';
import {
  waitForElement,
  parseNextData,
  buildImgUrl,
  replaceWithDisabledButton,
} from './utils';
import { getButtonLabel, getButtonCompleteLabel } from './lang';
import { fetchGalleryData, createZip } from './infra';
import { downloadImagesAndPrompts } from './model_image_download';

const BUTTON_ID = 'download-all-gallery-images-and-prompts';

const downloadGalleryImagesAndPrompts =
  (buttonIdSelector: string, modelId: string | null, postId: string) =>
  async () => {
    const data = await fetchGalleryData(modelId, postId);

    const button = await waitForElement(buttonIdSelector);
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

    replaceWithDisabledButton(
      button,
      ` ${data.items.length} / ${data.items.length} ${getButtonCompleteLabel()}`
    );
  };

const downloadSingleImagesAndPrompts =
  (buttonIdSelector: string) => async () => {
    const data = parseNextData();
    const model = data.props.pageProps.trpcState.json.queries[0];
    const { id, url, meta, width, name, hash } = model.state.data;
    const imgUrl = buildImgUrl(url, width, name);

    const button = await waitForElement(buttonIdSelector);
    if (!button) {
      return;
    }

    await createZip(button)(`imageId_${id}.zip`)([{ url: imgUrl, hash, meta }]);

    replaceWithDisabledButton(button, getButtonCompleteLabel());
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

  const buttonIdSelector = `#${BUTTON_ID}`;
  document.querySelector(buttonIdSelector)?.remove();
  const button = document.createElement('button');

  // モデル画面のトップ画像から開いた場合
  // モデルの方のダウンロードボタンを使う
  if (modelVersionId && prioritizedUserId) {
    button.addEventListener(
      'click',
      downloadImagesAndPrompts(buttonIdSelector)
    );
  }
  // 画像単体で開いた場合
  if (!postId && !modelId && !modelVersionId) {
    button.addEventListener(
      'click',
      downloadSingleImagesAndPrompts(buttonIdSelector)
    );
  }
  // モデルのギャラリーエリアから開いた場合
  if (postId) {
    button.addEventListener(
      'click',
      downloadGalleryImagesAndPrompts(buttonIdSelector, modelId, postId)
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
