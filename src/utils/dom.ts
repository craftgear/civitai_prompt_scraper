import { buttonContainerStyle, disabledButtonStyle } from '../assets/styles';
import {
  extractModelMetaFromGalleryNextData,
  extractModelMetaFromSingleImageNextData,
} from '../domain/logic';
import { ButtonState, NextData } from '../domain/types';
import { createDiv, selector } from '../infra/dom';

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

export const updateButtonText = (button: HTMLElement) => (text: string) => {
  button.innerText = text;
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
export const addButtonContainer = async () => {
  const downloadButtonSelector = "a[href^='/api/download/models/']";
  const buttonParent = await waitForElement(downloadButtonSelector);

  const container = createDiv();
  container.id = BUTTON_CONTAINER_ID;
  container.setAttribute('style', buttonContainerStyle);

  buttonParent?.parentNode?.parentNode?.appendChild(container);
  return container;
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
    return;
  }
  g.style.overflow = 'hidden';
  g.style.height = GALLERY_HIDDEN_HIGHT;
  return;
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
        x.setAttribute('style', `${x.getAttribute('style')} color: black;`);
        return;
      }
      const colorNumber = new Number(`0x${colorValue.slice(1)}`);
      if (colorNumber > 10000000) {
        x.setAttribute('style', `${x.getAttribute('style')} color: black;`);
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
    document.querySelectorAll('.mantine-Container-root h2')
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
  const el: HTMLElement | null = document.querySelector('main');
  if (!el) {
    setTimeout(() => {
      deleteMainPaddingBottom(retry - 1);
    }, 1000);
    return;
  }
  el.style.paddingBottom = '0';
};
