import { getButtonCompleteLabel, getButtonLabel } from '../assets/lang';
import { galleryButtonStyle } from '../assets/styles';
import { ButtonState, GalleryImage, ModelImage } from '../domain/types';
import { getModeInfoAndImageList } from '../service/model_image_download';

import { getConfig } from '../infra/config_panel';
import {
  alertError,
  createLink,
  getTitle,
  selector,
  setTitle,
} from '../infra/dom';
import { createZip } from '../infra/file';
import { fetchGalleryData } from '../infra/req';
import {
  replaceWithDisabledButton,
  updateButtonText,
  waitForElement,
} from '../utils/dom';

const BUTTON_ID = 'download-all-gallery-images-and-prompts';

export const download200GalleryImagesAndPrompts =
  (
    modelId: string,
    modelVersionId: string,
    modelName: string,
    limit = 200, // API の仕様上200が上限
    downLoadedImgList?: (GalleryImage | ModelImage)[],
    onProgressFn?: (text: string) => void,
    onFinishFn?: (imgCount: number) => void
  ) =>
  async () => {
    console.log('download200GalleryImagesAndPrompts: start');
    try {
      const _imgList = await fetchGalleryData(
        modelId,
        null,
        modelVersionId,
        limit
      );

      // exclude downloaded images
      const downloadedImgIds =
        downLoadedImgList?.map(
          (x) => (x as GalleryImage).id ?? 'modelimage does not have id'
        ) ?? [];
      const imgList = _imgList.filter(
        ({ id }) => !downloadedImgIds.includes(id)
      );

      const filenameFormat = getConfig('galleryFilenameFormat');
      const filename = (filenameFormat as string)
        .replace('{modelId}', modelId ?? '')
        .replace('{modelName}', modelName ?? '')
        .replace('{modelVersionId}', modelVersionId ?? '');

      await createZip(
        onProgressFn ??
          (() => {
            /** noop **/
          })
      )(filename)(imgList);
      if (onFinishFn) {
        onFinishFn(imgList.length);
      }
    } catch (error: unknown) {
      alertError((error as Error).message);
    }
  };

export const addGalleryDownloadButton = async (href: string) => {
  if (!selector('#gallery')) {
    // throw new Error('#gallery not found');
    return;
  }

  const {
    modelId,
    modelName,
    // imageList,
    modelVersionId,
    // modelVersionName,
    // modelInfo,
  } = await getModeInfoAndImageList(href);

  const button = createLink(BUTTON_ID, galleryButtonStyle, getButtonLabel());
  button.setAttribute('data-state', ButtonState.ready);

  const onFinishFn = (button?: HTMLAnchorElement) => (imgCount: number) => {
    if (getConfig('galleryAutoDownload')) {
      setTitle('✅ ' + getTitle());
    }
    if (button) {
      replaceWithDisabledButton(
        button,
        ` ${imgCount} / ${imgCount} ${getButtonCompleteLabel()}`
      );
    }
  };

  const eventListener = async (e: MouseEvent) => {
    e.preventDefault();
    if (modelId && modelVersionId) {
      return await download200GalleryImagesAndPrompts(
        modelId.toString(),
        modelVersionId.toString(),
        modelName,
        200,
        [],
        updateButtonText(button),
        onFinishFn(button)
      )();
    }
    return null;
  };

  if (!eventListener) {
    throw new Error('No necessary parameters found');
  }

  button.addEventListener('click', eventListener);

  const h2 = await waitForElement('#gallery h2');
  if (h2) {
    const oldButton = await waitForElement(`#${BUTTON_ID}`);
    if (oldButton) {
      oldButton.remove();
    }
    h2.parentNode?.appendChild(button);
  }
  if (
    getConfig('galleryAutoDownload') &&
    button.getAttribute('data-state') === ButtonState.ready
  ) {
    setTimeout(() => {
      button.click();
    }, 500);
  }
};
