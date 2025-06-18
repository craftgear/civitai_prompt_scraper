// 1. playwrightでスクショ
// 2. ディレクトリを作って保存
// 3. モデルダウンロード
// 4. 画像ダウンロード
// 5. トレーングデータダウンロード
//
import 'dotenv/config';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { styleText } from 'node:util';
// import { sleep } from '../utils/utils';
import { downloadImages } from './downloadImages';
import { downloadModel, downloadTrainingData } from './downloadModel';
import { playErrorSound, playSuccessSound } from './playSound';
import { takeScreenShot } from './takeScreenShot';

const DOWNLOAD_DIR = path.join(os.homedir(), '/mydata/Downloads/temp');

const main = async () => {
  const urls = process.argv
    .pop()
    ?.split('\n')
    .filter((x) => !!x && x.startsWith('https'))
    .reduce((acc: string[], x: string) => {
      if (acc.includes(x)) {
        console.log('----- duplicate entry', x);
        return acc;
      }
      return [...acc, x];
    }, []);

  if (!urls || urls.length === 0) {
    console.error('need one argument: a url');
    return;
  }

  const errors = [];
  for (let i = 0; i < urls.length; i++) {
    console.log('----------------------------');
    console.log(`${i + 1}/${urls.length}`);
    const url = urls[i].trim();
    if (!url || !url.startsWith('https://civitai.com/models/')) {
      console.error('need one argument: a url');
      continue;
    }
    const isAlreadyDownloaded = checkIfModelDownloaded(url);
    if (isAlreadyDownloaded) {
      console.log(styleText('yellowBright', 'already downloaded'));
      console.log(styleText('yellowBright', url));
      console.log(styleText('yellowBright', isAlreadyDownloaded.toString()));
      continue;
    }
    try {
      await downloadAll(url);
    } catch (e) {
      errors.push(e);
    }
    // if (i < urls.length - 1) {
    //   process.stdout.write('sleeping 5 seconds...\n\n');
    //   await sleep(1000 * 5);
    // }
  }
  if (errors.length === 0) {
    playSuccessSound();
    console.error(
      styleText(['bold', 'blue'], 'download successfully finished')
    );
  } else {
    errors.forEach((e) => {
      console.error(styleText('red', (e as Error).message));
      console.log('');
    });
    playErrorSound();

    errors
      .map((e) => (e as Error).message)
      .filter((message) => !message.startsWith('404'))
      .forEach((message) =>
        console.log(
          message
            .match(/https.*\d*/)
            ?.at(0)
            ?.trim()
        )
      );
  }
};

const checkIfModelDownloaded = (url: string): boolean | string => {
  const pattern =
    /https:\/\/civitai\.com\/models\/(?<modelId>\d+)(?:\/[^?]*)?(?:\?modelVersionId=(?<modelVersionId>\d+))?/;
  // eslint-disable-next-line
  const [_, modelId, modelVersionId] = url.match(pattern) ?? [];

  if (!modelId) {
    return false;
  }

  const result = execFileSync(
    '/Volumes/SSD_2TB/mydata/Downloads/StableDiffusion Models/f.sh',
    [`\\[${modelId}\\].*${modelVersionId ?? ''}`]
  );
  if (result.length === 0) {
    return false;
  }

  return result.toString().trim();
};

const downloadAll = async (url: string) => {
  const saveDirName = path.join(
    DOWNLOAD_DIR,
    `選択項目から作成したフォルダ ${Date.now()}${Math.floor(
      Math.random() * 1000
    )}`
  );
  try {
    const [pageTitle, fullPathFilename, modelDownloadHref] =
      await takeScreenShot(DOWNLOAD_DIR, url);
    if (!fs.existsSync(saveDirName)) {
      fs.mkdirSync(saveDirName);
    }
    fs.renameSync(
      fullPathFilename,
      `${saveDirName}/${path.basename(fullPathFilename)}`
    );
    console.log(styleText('cyan', `>> ${pageTitle}`));
    if (!modelDownloadHref) {
      throw new Error('modelDownloadHref is not found');
    }
    // eslint-disable-next-line
    const [_, { trainingDataUrl, modelId, modelVersionId }] = await Promise.all(
      [
        downloadModel(modelDownloadHref, saveDirName),
        downloadImages(url, saveDirName),
      ]
    );
    if (trainingDataUrl) {
      await downloadTrainingData(trainingDataUrl, saveDirName);
    }
    if (modelId && pageTitle && modelVersionId) {
      fs.renameSync(
        saveDirName,
        path.join(DOWNLOAD_DIR, `${pageTitle}[${modelId}]_${modelVersionId}`)
      );
    }
    return styleText('green', 'successfully downloaded');
  } catch (e) {
    console.error(styleText('red', (e as Error).message));
    throw e;
  }
};

main();
