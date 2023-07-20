import { getConfig, initConfigPanel } from './infra/config_panel';
import { addGalleryDownloadButton } from './service/gallery_download';
import { addModelImagesDownloadButton } from './service/model_image_download';

import { addButtonContainer } from './utils/dom';
import { log, sleep } from './utils/utils';

const addModelPreviewDownloadButton = async () => {
  const href = window.location.href;
  try {
    // await waitForElement('#gallery a[href^="/images"]');
    // FIXME: adhoc: wait for Nextjs rendering finish
    await sleep(2000);
    if (!href.match(/\/models\/\d*/)) {
      return;
    }
    log('model');

    if (getConfig('openShowMore')) {
      openShowMore(30);
    }

    await addButtonContainer();
    await addModelImagesDownloadButton(href);
  } catch (error: unknown) {
    alert((error as Error).message);
  }
};

const addGalleryImageDownloadButton = async () => {
  const href = window.location.href;
  try {
    // await waitForElement('.mantine-RichTextEditor-root');
    // FIXME: adhoc: wait for Nextjs rendering finish
    await sleep(2000);
    if (!href.match(/\/images\/\d*/)) {
      return;
    }
    log('gallery');
    await addGalleryDownloadButton(href);
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

const observer = new MutationObserver(async () => {
  const href = window.location.href;
  if (prevHref !== href) {
    prevHref = href;

    await addModelPreviewDownloadButton();
    await addGalleryImageDownloadButton();
  }
});

export default async function () {
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
}
