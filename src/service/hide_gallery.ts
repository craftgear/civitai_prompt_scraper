import { toggleGalleryStyle } from '../assets/styles';
import { hideGallery, toggleGallery } from '../utils/dom';

import { createLink, selector } from '../infra/dom';

export const hideAndToggleGallery = () => {
  const result = hideGallery();
  if (!result) {
    setTimeout(() => {
      hideAndToggleGallery();
    }, 100);
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
