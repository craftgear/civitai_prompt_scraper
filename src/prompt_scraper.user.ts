import { addGalleryDownloadButton } from './gallery_download';
import { addModelImagesDownloadButton } from './model_image_download';
import { initConfigPanel } from './config_panel';
import { getConfig } from './config_panel';

import { waitForElement, sleep, log } from './utils';

const addModelPreviewDownloadButton = async () => {
  log('model');

  await waitForElement('#gallery a[href^="/images"]');
  // FIXME: adhoc: wait for Nextjs rendering finish
  await sleep(2000);
  await addModelImagesDownloadButton();
};

const addGalleryImageDownloadButton = async () => {
  log('gallery');

  try {
    await waitForElement('.mantine-RichTextEditor-root');
    // FIXME: adhoc: wait for Nextjs rendering finish
    await sleep(2000);
    await addGalleryDownloadButton();
  } catch (error: unknown) {
    alert((error as Error).message);
  }
};

let prevHref = '';

const observer = new MutationObserver(async (_mutationList) => {
  const href = window.location.href;
  if (prevHref !== href) {
    if (href.includes('/models/')) {
      await addModelPreviewDownloadButton();
    }
    if (href.includes('/images/')) {
      await addGalleryImageDownloadButton();
    }
    prevHref = window.location.href;
  }
});

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

  if (window.location.href.includes('/models/')) {
    await addModelPreviewDownloadButton();

    if (getConfig('openShowMore')) {
      openShowMore();
    }
  }

  if (window.location.href.includes('/images/')) {
    await addGalleryImageDownloadButton();
  }

  log('done');
})();
