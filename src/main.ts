import { getConfig, initConfigPanel } from './infra/config_panel';
import { alertError } from './infra/dom';
import { addGalleryDownloadButton } from './service/gallery_download';
import { hideAndToggleGallery } from './service/hide_gallery';
import { addModelDownloadAllButton } from './service/model_download_all';
import { addModelImagesDownloadButton } from './service/model_image_download';
// import { hideHeader } from './utils/dom';
import { log, sleep } from './utils/utils';

const openShowMore = (retry = 200) => {
  const isOpenShowMore = getConfig('openShowMore');
  if (!isOpenShowMore) {
    return;
  }
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
    }, 100);
  }
};

const addDownloadAllButton = async () => {
  const href = window.location.href;
  // FIXME: adhoc: wait for Nextjs rendering finish
  await sleep(1000);
  try {
    if (!href.match(/\/models\/\d*/)) {
      setTimeout(addDownloadAllButton, 100);
      return;
    }
    log('download all');

    await addModelDownloadAllButton();
  } catch (error: unknown) {
    alert((error as Error).message);
  }
};

const addGalleryImageDownloadButton = async () => {
  const href = window.location.href;
  try {
    // await waitForElement('.mantine-RichTextEditor-root');
    if (!href.match(/\/models\/\d*/)) {
      setTimeout(addGalleryImageDownloadButton, 100);
      return;
    }
    await addModelImagesDownloadButton(href);
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

    await run();
  }
});

const run = async () => {
  openShowMore();
  await addDownloadAllButton();
  // await addModelPreviewDownloadButton();
  await addGalleryImageDownloadButton();
  hideAndToggleGallery();
};

export default async function () {
  prevHref = window.location.href;

  log('start');

  const html = document.querySelector('html');
  if (html) {
    initConfigPanel();
    observer.observe(html, {
      attributes: true,
      childList: true,
      subtree: true,
    });
  }

  if (window.location.href.match(/\/models\/\d*/)) {
    await run();
  }

  if (window.location.href.endsWith('models')) {
    console.log('window.location.href', window.location.href);

    // hideHeader();
  }

  log('done');
}
