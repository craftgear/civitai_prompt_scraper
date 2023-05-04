// import html2canvas from "html2canvas";

import { addGalleryDownloadButton } from './gallery_download';
import { addDownloadButton } from './model_image_download';

import { sleep, log } from './utils';

// see https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
const observer = new MutationObserver(async (_mutationList) => {
  const href = window.location.href;
  if (prevHref !== href) {
    if (href.includes('/models/')) {
      log('model page changed');
      // FIXME: adhoc: wait for Nextjs rendering finish
      setTimeout(() => {
        addDownloadButton();
      }, 2000);

      const showMoreButton = Array.from(
        document.querySelectorAll('button')
      ).filter((x: HTMLElement) => x.innerHTML === 'Show More')[0];
      showMoreButton && showMoreButton.click();
    }
    if (href.includes('/images/')) {
      log('images');

      // FIXME: adhoc: wait for Nextjs rendering finish
      await sleep(2000);
      await addGalleryDownloadButton();
    }
    prevHref = window.location.href;
  }
});

let prevHref = '';
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
    log('models');

    // FIXME: adhoc: wait for Nextjs rendering finish
    await sleep(2000);
    await addDownloadButton();

    const showMoreButton = Array.from(
      document.querySelectorAll('button')
    ).filter((x: HTMLElement) => x.innerHTML === 'Show More')[0];
    showMoreButton && showMoreButton.click();

    // TODO: add download all gallery images
  }

  if (window.location.href.includes('/images/')) {
    log('images');

    // FIXME: adhoc: wait for Nextjs rendering finish
    await sleep(2000);
    await addGalleryDownloadButton();
  }

  log('done');
})();
