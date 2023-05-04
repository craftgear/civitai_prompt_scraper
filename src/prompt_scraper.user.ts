import { addGalleryDownloadButton } from './gallery_download';
import { addDownloadButton } from './model_image_download';

import { waitForElement, sleep, log } from './utils';

const addModelPreviewDownloadButton = async () => {
  log('model');

  await waitForElement('#gallery a[href^="/images"]');
  // FIXME: adhoc: wait for Nextjs rendering finish
  await sleep(2000);
  await addDownloadButton();

  // TODO: add download all gallery images
};

const addGalleryImageDownloadButton = async () => {
  log('gallery');

  await waitForElement('.mantine-RichTextEditor-root');
  // FIXME: adhoc: wait for Nextjs rendering finish
  await sleep(2000);
  await addGalleryDownloadButton();
};

let prevHref = '';

// see https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
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
  }

  if (window.location.href.includes('/models/')) {
    await addModelPreviewDownloadButton();

    const showMoreButton = Array.from(
      document.querySelectorAll('button')
    ).filter((x: HTMLElement) => x.innerHTML === 'Show More')[0];
    showMoreButton && showMoreButton.click();
  }

  if (window.location.href.includes('/images/')) {
    await addGalleryImageDownloadButton();
  }

  log('done');
})();
