import { ButtonState } from './types';
// import html2canvas from 'html2canvas';
import { NextData } from './types';
import pkg from '../package.json';
import { disabledButtonStyle } from './styles';

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
  text: string
) => {
  const disabledButton = document.createElement('div');
  disabledButton.setAttribute('style', disabledButtonStyle);
  disabledButton.id = button.id;
  disabledButton.innerText = text;
  disabledButton.setAttribute('data-state', ButtonState.done);
  button.parentNode?.replaceChild(disabledButton, button);
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

// export const screenShot = async () => {
//   const main = await waitForElement('main');
//
//   if (!main) {
//     return;
//   }
//   main.style.letterSpacing = '0.1rem';
//
//   document.querySelectorAll('canvas').forEach((x) => x.remove());
//   const canvas = await html2canvas(main, {
//     allowTaint: true,
//   });
//
//   const div = document.createElement('div');
//   div.setAttribute('style', 'border: 1px solid red;');
//   div.appendChild(canvas);
//
//   document.body.appendChild(div);
//
//   main.style.letterSpacing = 'inherit';
// };
//
// export const getImagesDataFromNextData = () => {
//   const data = parseNextData();
//   const images = data.props.pageProps.trpcState.json.queries[0];
//   return images.state.data.pages[0].items;
// };
//
// export const getModelIdFromNextData = () => {
//   const data = parseNextData();
//   const model = data.props.pageProps.trpcState.json.queries[1];
//   return model.state.data.id;
// };
