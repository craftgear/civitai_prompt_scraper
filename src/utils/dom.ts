import { buttonContainerStyle, disabledButtonStyle } from '../assets/styles';
import {
  extractModelMetaFromGalleryNextData,
  extractModelMetaFromSingleImageNextData,
} from '../domain/logic';
import { ButtonState, NextData } from '../domain/types';
import { createDiv, selector, selectorAll } from '../infra/dom';

import { sleep } from './utils';

/**
 * DOM related
 */
export const waitForElement = async (
  descriptor: string,
  retryLimit = 10
): Promise<HTMLElement | null> => {
  if (retryLimit < 1) {
    return null;
  }
  const element = selector(descriptor);
  if (!element) {
    await sleep();
    return await waitForElement(descriptor, retryLimit - 1);
  } else {
    return element as HTMLElement;
  }
};

const parseNextData = () => {
  const nextData: NextData = selector('#__NEXT_DATA__') as HTMLElement;
  const data = nextData ? JSON.parse(nextData.innerText) : {};
  return data;
};

export const parseModelMetaFromSingleImageNextData = () =>
  extractModelMetaFromSingleImageNextData(parseNextData());

export const parseModelMetaFromGalleryNextData = () =>
  extractModelMetaFromGalleryNextData(parseNextData());

export const updateButtonText = (button?: HTMLElement) => (text: string) => {
  if (button) {
    button.innerText = text;
  }
};

export const replaceWithDisabledButton = (
  button: HTMLElement,
  text: string,
  style?: string
) => {
  const disabledButton = createDiv();
  disabledButton.setAttribute('style', style ? style : disabledButtonStyle);
  disabledButton.id = button.id;
  disabledButton.innerText = text;
  disabledButton.setAttribute('data-state', ButtonState.done);
  button.parentNode?.replaceChild(disabledButton, button);
};

const BUTTON_CONTAINER_ID = 'civitai_prompt_scraper';
const downloadButtonSelector = 'a[type="button"][href^="/api"]';
const SHARE_BUTTON_SVG_SELECTOR =
  'main svg[class*="tabler-icon tabler-icon-share-3"]';

export const getFileSizeText = () => {
  const buttons = selectorAll(downloadButtonSelector);
  return (
    Array.from(buttons).filter((x) => x.textContent?.includes('Download'))[0]
      .textContent ?? ''
  );
};

export const getDownloadATag = async () => {
  const button = await waitForElement(downloadButtonSelector);
  return button;
};

export const addButtonContainer = async () => {
  const buttonSVG = await waitForElement(SHARE_BUTTON_SVG_SELECTOR);

  const aTag =
    buttonSVG?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode;

  const container = createDiv();
  container.id = BUTTON_CONTAINER_ID;
  container.setAttribute('style', buttonContainerStyle);

  aTag?.parentNode?.appendChild(container);

  return container;
};

export const removeButtonContainer = () => {
  const container = selector(`#${BUTTON_CONTAINER_ID}`);
  container?.remove();
};

export const getButtonContainerNode = async () => {
  return waitForElement(`#${BUTTON_CONTAINER_ID}`);
};

const GALLERY_HIDDEN_HIGHT = '100px';
export const toggleGallery = (e: unknown) => {
  const el = (e as PointerEvent).target as HTMLElement;
  const g: HTMLElement | null = selector('#gallery');
  if (!g) {
    return;
  }
  g.style.overflow = 'hidden';
  if (g.style.height === GALLERY_HIDDEN_HIGHT) {
    g.style.height = 'auto';
    el.innerText = '-';
    return;
  }
  el.innerText = '+';
  g.style.height = GALLERY_HIDDEN_HIGHT;
};

export const openGallery = () => {
  const g: HTMLElement | null = selector('#gallery');
  if (!g) {
    return;
  }
  g.style.height = 'auto';
  return;
};

export const hideGallery = () => {
  const g: HTMLElement | null = selector('#gallery');
  if (!g) {
    return false;
  }
  g.style.overflow = 'hidden';
  g.style.height = GALLERY_HIDDEN_HIGHT;
  return true;
};

export const darkenTextColor = () => {
  Array.from(document.querySelectorAll('.mantine-Spoiler-root span')).forEach(
    (x) => {
      const style = x.getAttribute('style');
      const colorValue = (style?.match(/color:\s*(.*);?/) ?? [])[1];
      if (!colorValue) {
        return;
      }
      if (colorValue.startsWith('rgb')) {
        x.setAttribute('style', `${x.getAttribute('style')}; color: black;`);
        return;
      }
      const colorNumber = new Number(`0x${colorValue.slice(1)}`);
      if (colorNumber.valueOf() > 10000000) {
        x.setAttribute('style', `${x.getAttribute('style')}; color: black;`);
      }
    }
  );
};

export const deleteCreateButton = () => {
  const createButtons = Array.from(document.querySelectorAll('button')).filter(
    (x: HTMLElement) => x.innerHTML.includes('Create')
  );
  if (createButtons.length > 0) {
    createButtons.forEach((x) => {
      x.style.display = 'none';
    });
  }
};

export const deleteSuggestedResources = (retry = 5) => {
  const el = Array.from(
    document.querySelectorAll('.mantine-Stack-root h2')
  ).filter((x: Element) => x.innerHTML.includes('Suggested Resources'))[0];
  const targetEl =
    el?.parentElement?.parentElement?.parentElement?.parentElement;
  if (targetEl) {
    targetEl.style.display = 'none';
  } else {
    setTimeout(() => {
      deleteSuggestedResources(retry - 1);
    }, 1000);
  }
};

export const deleteDiscussion = (retry = 5) => {
  const el = Array.from(
    document.querySelectorAll('.mantine-Container-root h2')
  ).filter((x: Element) => x.innerHTML.includes('Discussion'))[0];
  const targetEl =
    el?.parentElement?.parentElement?.parentElement?.parentElement;
  if (targetEl) {
    targetEl.style.display = 'none';
  } else {
    setTimeout(() => {
      deleteDiscussion(retry - 1);
    }, 1000);
  }
};

export const deleteMainPaddingBottom = (retry = 5) => {
  const main: HTMLElement | null = document.querySelector('main');
  if (!main) {
    setTimeout(() => {
      deleteMainPaddingBottom(retry - 1);
    }, 1000);
    return;
  }
  const el = main.children?.item(0) as HTMLElement;
  if (el) {
    el.style.paddingBottom = '0';
  }
};

export const enableFullScreenCapture = () => {
  const modifyHeight = () => {
    const highestElement = selector('main > div > div');
    if (highestElement) {
      // const newHeight = highestElement.clientHeight + 300;
      selector('html')?.setAttribute(
        'style',
        'overflow-y: auto; overflow-x: hidden;'
      );
      selector('body')?.setAttribute(
        'style',
        // `height: ${newHeight}px; max-width:1320px;`
        `height: auto;`
      );
      selector('main > div')?.setAttribute('style', 'overflow: hidden;');
    }
  };
  document.addEventListener('focus', () => {
    modifyHeight();
  });
  modifyHeight();
};

export const scrollIntoView = (cssSelector: string) => {
  selector(cssSelector)?.scrollIntoView({ behavior: 'smooth' });
};
