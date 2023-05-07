import { addGalleryDownloadButton } from './gallery_download';
import { addModelImagesDownloadButton } from './model_image_download';
import { initConfigPanel } from './config_panel';
import { getConfig } from './config_panel';

import { waitForElement, sleep, log } from './utils';

let shouldAbortAddDownloadButton = false;
const addModelPreviewDownloadButton = async () => {
  log('model');

  try {
    await waitForElement('#gallery a[href^="/images"]');
    // FIXME: adhoc: wait for Nextjs rendering finish
    await sleep(2000);
    if (shouldAbortAddDownloadButton) {
      shouldAbortAddDownloadButton = false;
      return;
    }
    await addModelImagesDownloadButton();
  } catch (error: unknown) {
    alert((error as Error).message);
  }
};

const addGalleryImageDownloadButton = async () => {
  log('gallery');

  try {
    await waitForElement('.mantine-RichTextEditor-root');
    // FIXME: adhoc: wait for Nextjs rendering finish
    await sleep(2000);
    if (shouldAbortAddDownloadButton) {
      shouldAbortAddDownloadButton = false;
      return;
    }
    await addGalleryDownloadButton();
  } catch (error: unknown) {
    alert((error as Error).message);
  }
};

const openShowMore = () => {
  const showMoreButton = Array.from(document.querySelectorAll('button')).filter(
    (x: HTMLElement) => x.innerHTML === 'Show More'
  )[0];
  if (showMoreButton) {
    showMoreButton.click();
    return;
  }
  setTimeout(() => {
    openShowMore();
  }, 1000);
};

let prevHref = '';

const observer = new MutationObserver(async (_mutationList) => {
  const href = window.location.href;
  if (prevHref !== href) {
    prevHref = href;
    shouldAbortAddDownloadButton = true;

    if (href.match(/\/models\/\d*/)) {
      await addModelPreviewDownloadButton();
      return;
    }
    if (href.match(/\/images\/\d*/)) {
      await addGalleryImageDownloadButton();
      return;
    }
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

    if (getConfig('openShowMore')) {
      openShowMore();
    }
  } else if (window.location.href.match(/\/images\/\d*/)) {
    await addGalleryImageDownloadButton();
  }

  log('done');
})();
