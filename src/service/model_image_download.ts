import {
  getButtonCompleteLabel,
  getButtonLabel,
  getI18nLabel,
} from '../assets/lang';
import { buttonStyle } from '../assets/styles';

import { getConfig } from '../infra/config_panel';
import { alertError, createLink, selector } from '../infra/dom';
import { createZip } from '../infra/file';
import {
  fetchGalleryData,
  fetchModelInfoByModleIdOrModelVersionId,
} from '../infra/req';
import {
  getButtonContainerNode,
  getDownloadATag,
  replaceWithDisabledButton,
  updateButtonText,
  waitForElement,
} from '../utils/dom';

const BUTTON_ID = 'download-all-images-and-prompts';

export const getModeInfoAndImageList = async (href: string) => {
  const hrefModelId =
    href.match(/\/models\/(?<modelId>\d*)/)?.groups?.modelId ??
    href.match(/modelId=(?<modelId>\d*)/)?.groups?.modelId;
  const hrefModelVersionId = href.match(/modelVersionId=(?<modelVersionId>\d*)/)
    ?.groups?.modelVersionId;

  const modelInfo = await fetchModelInfoByModleIdOrModelVersionId(
    hrefModelId,
    hrefModelVersionId
  );

  const { id: modelId, name: modelName, modelVersions } = modelInfo;

  const modelVersion =
    modelVersions.length === 1
      ? modelVersions[0]
      : modelVersions?.find((x) => x.id.toString() === hrefModelVersionId);
  // NOTE: modelVersion.imagesにはimage.metaがない
  const modelImages = modelVersion?.images ?? [];

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

  const galleryImageList = await fetchGalleryData(
    `${modelId}`,
    null,
    `${modelVersionId}`
  );

  // NOTE: 通常プレビュー画像もギャラリーに含まれているので、
  // 画像のダウンロードはギャラリー画像を優先する。
  // (modelVersion.imagesにはmetaがないので、ギャラリーデータがある場合はそちらのほうがよい
  // まれにギャラリー画像がないモデルがあるので、その場合はmodelVersion.imagesをダウンロードする
  const imageList =
    galleryImageList.length > 0
      ? galleryImageList.length < modelImages.length
        ? [
            ...galleryImageList.filter((x) => !x.url.endsWith('mp4')),
            ...modelImages.filter((x) => !x.url.endsWith('mp4')),
          ]
        : galleryImageList
      : modelImages;
  return {
    modelId,
    modelName,
    modelVersionId,
    modelVersionName,
    imageList,
    modelInfo,
  };
};

const startModelDownload = async (e: MouseEvent) => {
  e.preventDefault();
  const aTag = await getDownloadATag();

  if (aTag) {
    aTag.dispatchEvent(new Event('click'));
  }
};

export const downloadImagesAndPrompts =
  (buttonIdSelector: string, location: string) => async () => {
    try {
      const button = await waitForElement(buttonIdSelector);

      if (!button) {
        throw new Error('downloadImagesAndPrompts: button not found');
      }

      button.innerText = getI18nLabel('startingDownload');

      const {
        modelId,
        modelName,
        imageList,
        modelVersionId,
        modelVersionName,
        modelInfo,
      } = await getModeInfoAndImageList(location);

      const filenameFormat = getConfig('modelPreviewFilenameFormat');
      const filename = (filenameFormat as string)
        .replace('{modelId}', `${modelId ?? ''}`)
        .replace('{modelName}', modelName)
        .replace('{modelVersionId}', `${modelVersionId}`)
        .replace('{modelVersionName}', modelVersionName);

      await createZip(updateButtonText(button))(filename, modelInfo)(imageList);

      replaceWithDisabledButton(
        button,
        ` ${imageList.length} / ${imageList.length} ${getButtonCompleteLabel()}`
      );

      return { imageList, modelName, modelId, modelVersionId };
    } catch (error: unknown) {
      alertError((error as Error).message);
    }
  };

export const addModelImagesDownloadButton = async (href: string) => {
  const container = await getButtonContainerNode();
  const buttonIdSelector = `#${BUTTON_ID}`;
  selector(buttonIdSelector)?.remove();

  const button = createLink(
    BUTTON_ID,
    buttonStyle,
    getButtonLabel(),
    downloadImagesAndPrompts(buttonIdSelector, href)
  );

  if (getConfig('downloadModelAsWell')) {
    // start downloading a model
    button.addEventListener('click', startModelDownload);
  }

  container?.appendChild(button);
};
