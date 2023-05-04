import { NextData } from './types';
import html2canvas from 'html2canvas';
import pkg from '../package.json';

export const log = (...xs: any[]) => {
  console.log(`${pkg.name}:`, ...xs);
};

const getLocale = () => {
  return window.navigator.language;
};

export const getButtonLabel = () => {
  const locale = getLocale();
  switch (locale) {
    case 'ja':
      return '画像＆JSONダウンロード';
    case 'zh-TW':
      return '下載圖像和JSON';
    case 'zh-CN':
      return '下载图像和JSON';
    default:
      return 'Download images with JSON';
  }
};

export const getButtonProgressLabel = () => {
  const locale = getLocale();
  switch (locale) {
    case 'ja':
      return 'ダウンロード中';
    case 'zh-TW':
      return '下載中';
    case 'zh-CN':
      return '下载中';
    default:
      return 'downloading';
  }
};

export const getButtonCompleteLabel = () => {
  const locale = getLocale();
  switch (locale) {
    case 'ja':
      return '完了';
    case 'zh-TW':
    case 'zh-CN':
      return '完成';
    default:
      return 'done';
  }
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

export const buildImgUrl = (url: string, width: number, name: string) =>
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

export const screenShot = async () => {
  const main = await waitForElement('main');

  if (!main) {
    return;
  }
  main.style.letterSpacing = '0.1rem';

  document.querySelectorAll('canvas').forEach((x) => x.remove());
  const canvas = await html2canvas(main, {
    allowTaint: true,
  });

  const div = document.createElement('div');
  div.setAttribute('style', 'border: 1px solid red;');
  div.appendChild(canvas);

  document.body.appendChild(div);

  main.style.letterSpacing = 'inherit';
};
