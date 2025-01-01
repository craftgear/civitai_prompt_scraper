import { toggleGalleryStyle } from '../assets/styles';
import { hideGallery, toggleGallery } from '../utils/dom';

import { createLink, selector } from '../infra/dom';

export const hideAndToggleGallery = (retry = 1) => {
  const result = hideGallery();

  if (retry > 10) {
    console.info('no gallery found');
    return;
  }
  if (!result) {
    setTimeout(() => {
      hideAndToggleGallery(retry + 1);
    }, 1000);
    return;
  }

  // show/hide gallery button
  if (!selector('#hide-gallery')) {
    const xGallery = createLink(
      'hide-gallery',
      toggleGalleryStyle,
      '-',
      toggleGallery
    );
    const h2 = selector('#gallery h2');
    if (h2) {
      h2.parentNode?.appendChild(xGallery);
    }
  }
};
