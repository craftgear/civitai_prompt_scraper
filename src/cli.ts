// 1. playwrightでスクショ
// 2. ディレクトリを作って保存
// 3. モデルダウンロード
// 4. 画像ダウンロード
// 5. トレーングデータダウンロード
//
import 'dotenv/config';
import os from 'node:os';
import path from 'node:path';
import type { Page } from 'puppeteer';
import puppeteer from 'puppeteer';
import { sleep } from './utils/utils';

const DOWNLOAD_DIR = path.join(os.homedir(), '/mydata/Downloads/');

// NOTE: puppeteer 内のDOMで実行されるので、関数定義もすべてこの中で行う必要がある
const evalInsideBrowser = async () => {
  // eslint-disable-next-line
  (window as any).__name = (func: Function) => func;

  const hideGallery = () => {
    const g: HTMLElement | null = document.querySelector('#gallery');
    if (!g) {
      return false;
    }
    g.style.overflow = 'hidden';
    g.style.height = '100px';
    return true;
  };

  const openShowMore = (retry = 100) => {
    const showMoreButton = Array.from(
      document.querySelectorAll('button')
    ).filter((x: HTMLElement) => x.innerHTML.includes('Show More'))[0];
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

  const _hideElement = async (
    getElementFn: () => HTMLElement | null | undefined,
    retry = 5
  ) => {
    if (retry === 0) {
      return;
    }
    const targetEl = getElementFn();
    if (!targetEl) {
      await new Promise((resolve) => {
        setTimeout(() => resolve(true), 1000);
      });
      return _hideElement(getElementFn, retry - 1);
    }
    targetEl.style.display = 'none';
    return;
  };

  const hideSuggestedResources = () =>
    _hideElement(() => {
      const el = Array.from(
        document.querySelectorAll('.mantine-Stack-root h2')
      ).filter((x: Element) => x.innerHTML.includes('Suggested Resources'))[0];

      return el?.parentElement?.parentElement?.parentElement?.parentElement;
    });

  const hideDiscussion = () =>
    _hideElement(() => {
      const el = Array.from(
        document.querySelectorAll('.mantine-Container-root h2')
      ).filter((x: Element) => x.innerHTML.includes('Discussion'))[0];
      return el?.parentElement?.parentElement?.parentElement?.parentElement;
    });

  const hideHeader = () => _hideElement(() => document.querySelector('header'));
  const hideFooter = () => _hideElement(() => document.querySelector('footer'));
  const hideStickyMenu = () =>
    _hideElement(() => document.querySelector('.sticky') as HTMLElement);
  const hideAnnouncements = () =>
    _hideElement(
      () => document.querySelector('div.announcements') as HTMLElement,
      2
    );

  const deleteMainPaddingBottom = (retry = 5) => {
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

  const enableFullScreenCapture = () => {
    const highestElement = document.querySelector('main > div > div');
    if (highestElement) {
      document
        .querySelector('html')
        ?.setAttribute('style', 'overflow-y: auto; overflow-x: hidden;');
      document.querySelector('body')?.setAttribute('style', 'height: auto;');
      document
        .querySelector('main > div')
        ?.setAttribute('style', 'overflow: hidden;');
      document
        .querySelector('.mantine-Container-root')
        ?.setAttribute('style', 'margin: 0;');
    }
  };

  const darkenTextColor = () => {
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

  await hideDiscussion();
  await hideSuggestedResources();
  await hideFooter();
  await hideHeader();
  await hideStickyMenu();
  await hideAnnouncements();
  hideGallery();
  openShowMore();
  deleteMainPaddingBottom();
  enableFullScreenCapture();
  darkenTextColor();
};

const screenshot = async (page: Page, filenameBase: string) => {
  await sleep(1000);
  const bodyHeight = await page.evaluate(() => {
    return document.body.scrollHeight;
  });
  console.log('----- bodyHeight', bodyHeight);
  await page.setViewport({
    width: 1050,
    height: bodyHeight,
    deviceScaleFactor: 2,
  });
  await page.screenshot({
    path: path.join(DOWNLOAD_DIR, `${filenameBase}.jpg`),
    type: 'jpeg',
    fullPage: true,
    captureBeyondViewport: true,
    fromSurface: true,
  });
};

const takeScreenShot = async () => {
  const url = process.argv.pop();
  if (!url) {
    console.log('need one argument: a url');
    return;
  }
  const username = process.env.USERNAME;
  if (!username) {
    console.log('no userename');
    return;
  }
  // Launch the browser
  const browser = await puppeteer.launch({
    userDataDir: path.join(DOWNLOAD_DIR, './.puppeteer_user_data'),
  });
  try {
    const page = await browser.newPage();

    // XXX: ログインは初回のみ必要
    // await page.goto( 'https://civitai.com/api/auth/callback/email?callbackUrl=https%3A%2F%2Fcivitai.com%2F&token=ee929d298251e004f6d0e9e533c8a906fe84b0d7e76e40153bbc765e18b232af&email=craftgear%40gmail.com');
    // await page.goto('https://civitai.com/login');
    // await page.setViewport({
    //   width: 1600,
    //   height: 1920,
    // });
    // await page.locator('input[type="email"]').fill(username);
    //
    // const loginButton = page.locator('button[type="submit"]');
    // await loginButton.click();
    // return

    await page.goto(url);
    await page.waitForSelector('main > div > div');

    // NOTE:ライトモードに切り替え
    // await page.$eval('button[aria-haspopup="dialog"] svg.tabler-icon-bolt', (el) => el.click());
    // await page.locator('button svg.tabler-icon-sun').click();
    // sleep();
    // NOTE: フィルタ適用
    // await page.$eval(
    //   '#mantine-R1lpbaj3qb6-target',
    //   (el) => (el.parentNode as HTMLElement).click()
    // );
    // await screenshot(page, 'fuga');
    // await page.$eval(
    //   'div.mantine-Checkbox-root:nth-child(1) > div:nth-child(1) > div:nth-child(2) > label:nth-child(1) > div:nth-child(1)',
    //   (el) => el.click()
    // );
    // await page.$eval('input[type="checkbox"][]', (el) => el.click());
    // await screenshot(page, 'fuga2');

    // Evaluate JavaScript
    await page.evaluate(evalInsideBrowser);
    const pageTitle = (await page.title())
      .replaceAll('|', '-')
      .replaceAll(/[<>\\/.*?"|]/g, '')
      .replace('Civitai', '')
      .trim();
    await screenshot(page, pageTitle);
    return pageTitle;
  } catch (e) {
    console.error(url);
    console.error(e);
    console.log('');
  } finally {
    await browser.close();
  }
};

const main = async () => {
  const pageTitle = await takeScreenShot();
  console.log('----- pageTitle', pageTitle);
  // TODO: ディレクトリ作成
  // TODO: スクリーンショットをディレクトリに移動
  // TODO: モデルダウンロード
  // TODO: 画像とプロンプトダウンロード
};

main();
