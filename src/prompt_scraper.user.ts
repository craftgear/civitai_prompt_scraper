import { addGalleryDownloadButton } from './gallery_download';
import { addModelImagesDownloadButton } from './model_image_download';
import { initConfigPanel } from './config_panel';
import { getConfig } from './config_panel';

import { sleep, log } from './utils';

const addModelPreviewDownloadButton = async () => {
  try {
    // await waitForElement('#gallery a[href^="/images"]');
    // FIXME: adhoc: wait for Nextjs rendering finish
    await sleep(2000);
    if (!window.location.href.match(/\/models\/\d*/)) {
      return;
    }
    log('model');

    await addModelImagesDownloadButton();
  } catch (error: unknown) {
    alert((error as Error).message);
  }
};

const addGalleryImageDownloadButton = async () => {
  try {
    // await waitForElement('.mantine-RichTextEditor-root');
    // FIXME: adhoc: wait for Nextjs rendering finish
    await sleep(2000);
    if (!window.location.href.match(/\/images\/\d*/)) {
      return;
    }
    log('gallery');
    await addGalleryDownloadButton();
  } catch (error: unknown) {
    alert((error as Error).message);
  }
};

const openShowMore = (retry = 5) => {
  const showMoreButton = Array.from(document.querySelectorAll('button')).filter(
    (x: HTMLElement) => x.innerHTML.includes('Show More')
  )[0];
  if (showMoreButton) {
    showMoreButton.click();
    return;
  }
  if (retry > 0) {
    setTimeout(() => {
      openShowMore(retry - 1);
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

    if (getConfig('openShowMore')) {
      openShowMore(30);
    }
  } else if (window.location.href.match(/\/images\/\d*/)) {
    await addGalleryImageDownloadButton();
  }

  log('done');
})();
