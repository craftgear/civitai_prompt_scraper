import { getConfig, initConfigPanel } from './infra/config_panel';
import { alertError } from './infra/dom';
import { addGalleryDownloadButton } from './service/gallery_download';
import { addModelImagesDownloadButton } from './service/model_image_download';

import { addButtonContainer } from './utils/dom';
import { log, sleep } from './utils/utils';

const openShowMore = (retry = 10) => {
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
    }, 200);
  }
};

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
      openShowMore();
      document.addEventListener('focus', () => openShowMore());
    }

    await addButtonContainer();
    await addModelImagesDownloadButton(href);
  } catch (error: unknown) {
    alertError((error as Error).message);
  }
};

const addGalleryImageDownloadButton = async () => {
  const href = window.location.href;
  try {
    // await waitForElement('.mantine-RichTextEditor-root');
    // FIXME: adhoc: wait for Nextjs rendering finish
    await sleep(2000);
    if (!href.match(/\/images\/\d*/) || href.match(/\/user/)) {
      return;
    }
    log('gallery');
    await addGalleryDownloadButton(href);
  } catch (error: unknown) {
    alertError((error as Error).message);
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
