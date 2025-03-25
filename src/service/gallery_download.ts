import { getButtonCompleteLabel, getButtonLabel } from '../assets/lang';
import { galleryButtonStyle } from '../assets/styles';
import { ButtonState, GalleryImage, ModelImage } from '../domain/types';
import { getModelInfo } from '../service/model_image_download';
import { sleep } from '../utils/utils';

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

export const downloadGalleryImagesAndPrompts =
  (
    modelId: string,
    modelVersionId: string,
    modelName: string,
    downLoadedImgList?: (GalleryImage | ModelImage)[],
    onProgressFn?: (text: string) => void,
    onFinishFn?: (imgCount: number) => void
  ) =>
  async () => {
    console.log('downloadGalleryImagesAndPrompts: start');
    try {
      const _imgList = await fetchGalleryData(onProgressFn)(
        modelId,
        null,
        modelVersionId
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
      setTitle('✅ ' + getTitle());
    } catch (error: unknown) {
      alertError((error as Error).message);
    }
  };

export const addGalleryDownloadButton = async (href: string) => {
  const oldButton = await waitForElement(`#${BUTTON_ID}`, 1);
  if (oldButton) {
    oldButton.remove();
  }

  if (!selector('#gallery')) {
    // throw new Error('#gallery not found');
    console.log('#gallery not found');
    await sleep(100);
    await addGalleryDownloadButton(href);
    return;
  }
  const {
    modelId,
    modelName,
    // imageList,
    modelVersionId,
    // modelVersionName,
    // modelInfo,
  } = await getModelInfo(href);

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
      return await downloadGalleryImagesAndPrompts(
        modelId.toString(),
        modelVersionId.toString(),
        modelName,
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

  const h2 = await waitForElement('#gallery h2', 1);
  if (h2) {
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
