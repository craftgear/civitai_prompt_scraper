import { addGalleryDownloadButton } from './gallery_download';
import { buttonContainerStyle } from './styles';
import { addModelImagesDownloadButton } from './model_image_download';
import { getConfig, initConfigPanel } from './config_panel';
import { addDownloadAllButton } from './model_download_all';

import { sleep, log, waitForElement } from './utils';

const BUTTON_CONTAINER_ID = 'civitai_prompt_scraper';
const addButtonContainer = async () => {
  const downloadButtonSelector = "a[href^='/api/download/models/']";
  const buttonParent = await waitForElement(downloadButtonSelector);

  const container = document.createElement('div');
  container.id = BUTTON_CONTAINER_ID;
  container.setAttribute('style', buttonContainerStyle);

  buttonParent?.parentNode?.parentNode?.appendChild(container);
  return container;
};

export const getButtonContainerNode = async () => {
  return waitForElement(`#${BUTTON_CONTAINER_ID}`);
};

const darkenTextColor = () => {
  Array.from(document.querySelectorAll('.mantine-Spoiler-root span')).forEach(
    (x) => {
      const style = x.getAttribute('style');
      const colorValue = (style?.match(/color:\s*(.*);?/) ?? [])[1];
      if (!colorValue) {
        return;
      }
      if (colorValue.startsWith('rgb')) {
        x.setAttribute('style', `${x.getAttribute('style')} color: black;`);
        return;
      }
      const colorNumber = new Number(`0x${colorValue.slice(1)}`);
      if (colorNumber > 10000000) {
        x.setAttribute('style', `${x.getAttribute('style')} color: black;`);
      }
    }
  );
};

const deleteCreateButton = () => {
  const createButton = Array.from(document.querySelectorAll('button')).filter(
    (x: HTMLElement) => x.innerHTML.includes('Create')
  )[0];
  if (createButton) {
    createButton?.remove();
  }
};

const deleteSuggestedResources = (retry = 5) => {
  const el = Array.from(
    document.querySelectorAll('.mantine-Container-root h2')
  ).filter((x: Element) => x.innerHTML.includes('Suggested Resources'))[0];
  if (el?.parentElement?.parentElement?.parentElement?.parentElement) {
    el?.parentElement?.parentElement?.parentElement?.parentElement?.remove();
  } else {
    setTimeout(() => {
      deleteSuggestedResources(retry - 1);
    }, 1000);
  }
};

const addModelPreviewDownloadButton = async () => {
  try {
    // await waitForElement('#gallery a[href^="/images"]');
    // FIXME: adhoc: wait for Nextjs rendering finish
    await sleep(1000);
    if (!window.location.href.match(/\/models\/\d*/)) {
      return;
    }
    log('model');
    if (getConfig('openShowMore')) {
      openShowMore(20);
    }
    darkenTextColor();
    deleteCreateButton();
    deleteSuggestedResources();

    await addButtonContainer();
    await addModelImagesDownloadButton();
    await addDownloadAllButton();
  } catch (error: unknown) {
    alert((error as Error).message);
  }
};

const addGalleryImageDownloadButton = async () => {
  try {
    // await waitForElement('.mantine-RichTextEditor-root');
    // FIXME: adhoc: wait for Nextjs rendering finish
    await sleep(1000);
    if (!window.location.href.match(/\/images\/\d*/)) {
      return;
    }
    log('gallery');
    await addGalleryDownloadButton();
  } catch (error: unknown) {
    alert((error as Error).message);
  }
};

const openShowMore = (retryCount = 1) => {
  const showMoreButton = Array.from(document.querySelectorAll('button')).filter(
    (x: HTMLElement) => x.innerHTML.includes('Show More')
  )[0];
  if (showMoreButton) {
    showMoreButton.click();
    return;
  }

  if (retryCount > 0) {
    setTimeout(() => {
      openShowMore(retryCount - 1);
    }, 1000);
  }
};

let prevHref = '';

const observer = new MutationObserver(async (_mutationList) => {
  const href = window.location.href;
  if (prevHref !== href) {
    prevHref = href;

    await addModelPreviewDownloadButton();
    await addGalleryImageDownloadButton();
  }
});

(async function () {
  prevHref = window.location.href;

  log('start');

  const html = document.querySelector('html');
  if (html) {
    observer.observe(html, {
      attributes: true,
      childList: true,
      subtree: true,
    });
    initConfigPanel();
  }

  if (window.location.href.match(/\/models\/\d*/)) {
    await addModelPreviewDownloadButton();
  } else if (window.location.href.match(/\/images\/\d*/)) {
    await addGalleryImageDownloadButton();
  }

  log('done');
})();
