import { ButtonState } from './types';
// import html2canvas from 'html2canvas';
import { NextData } from './types';
import pkg from '../package.json';
import { disabledButtonStyle } from './styles';
// import { saveAs } from 'file-saver';
import { buttonContainerStyle } from './styles';

export const log = (...xs: any[]) => {
  console.log(`${pkg.name}:`, ...xs);
};

export const sleep = (ms = 1000) =>
  new Promise((resolve) => setTimeout(() => resolve(true), ms));

export const waitForElement = async (
  selector: string,
  retryLimit = 10
): Promise<HTMLElement | null> => {
  if (retryLimit < 1) {
    return null;
  }
  const element = document.querySelector(selector);
  if (!element) {
    await sleep();
    return await waitForElement(selector, retryLimit - 1);
  } else {
    return element as HTMLElement;
  }
};

export const buildImgUrl = (url: string, width: number, name?: string) =>
  `https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/${url}/width=${width},optimized=true/${
    name ?? ''
  }`;

export const parseNextData = () => {
  const nextData: NextData = (document.querySelector(
    '#__NEXT_DATA__'
  ) as HTMLElement) || { innerText: '' };
  const data = JSON.parse(nextData.innerText);
  return data;
};

export const updateButtonText = (button: HTMLElement) => (text: string) => {
  button.innerText = text;
};

export const replaceWithDisabledButton = (
  button: HTMLElement,
  text: string,
  style?: string
) => {
  const disabledButton = document.createElement('div');
  disabledButton.setAttribute('style', style ?? disabledButtonStyle);
  disabledButton.id = button.id;
  disabledButton.className = 'disabled';
  disabledButton.innerText = text;
  disabledButton.setAttribute('data-state', ButtonState.done);
  button.parentNode?.replaceChild(disabledButton, button);
};

export const getImagesDataFromNextData = () => {
  const data = parseNextData();
  const images = data.props.pageProps.trpcState.json.queries[0];
  return images.state.data.pages[0].items;
};

export const getModelIdFromNextData = () => {
  const data = parseNextData();
  const model = data.props.pageProps.trpcState.json.queries[1];
  return model.state.data.id;
};

export const chunkArray = <T>(xs: T[], chunkSize = 5): T[][] =>
  xs.reduce<T[][]>((acc: T[][], curr: T) => {
    const tail: T[] = acc.pop() ?? [];
    if (tail.length < chunkSize) {
      tail.push(curr);
      return [...acc, tail];
    }
    return [...acc, tail, [curr]];
  }, []);

const BUTTON_CONTAINER_ID = 'civitai_prompt_scraper';
export const addButtonContainer = async () => {
  const downloadButtonSelector = "a[href^='/api/download/models/']";
  const buttonParent = await waitForElement(downloadButtonSelector);

  const container = document.createElement('div');
  container.id = BUTTON_CONTAINER_ID;
  container.setAttribute('style', buttonContainerStyle);

  buttonParent?.parentNode?.parentNode?.appendChild(container);
  return container;
};

export const getButtonContainerNode = async () => {
  return waitForElement(`#${BUTTON_CONTAINER_ID}`);
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
  const createButton = Array.from(document.querySelectorAll('button')).filter(
    (x: HTMLElement) => x.innerHTML.includes('Create')
  )[0];
  if (createButton) {
    createButton?.remove();
  }
};

export const deleteSuggestedResources = (retry = 5) => {
  const el = Array.from(
    document.querySelectorAll('.mantine-Container-root h2')
  ).filter((x: Element) => x.innerHTML.includes('Suggested Resources'))[0];
  if (el?.parentElement?.parentElement?.parentElement?.parentElement) {
    el?.parentElement?.parentElement?.parentElement?.parentElement?.remove();
  } else {
    setTimeout(() => {
      deleteSuggestedResources(retry - 1);
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


// export const screenShot = async () => {
//    const main = await waitForElement('body');
//
//    if (!main) {
//      return;
//    }
//    main.style.letterSpacing = '0.1rem';
//
//    document.querySelectorAll('canvas').forEach((x) => x.remove());
//    const canvas = await html2canvas(main, {
//      allowTaint: true,
//      useCORS: true,
//    });
//
//    // saveAs(canvas.toDataURL(), 'test.png');
//    const div = document.createElement('div');
//    div.setAttribute('style', 'border: 1px solid red;');
//    div.appendChild(canvas);
//
//    document.body.appendChild(div);
//
//    main.style.letterSpacing = 'none';
//  };
//
