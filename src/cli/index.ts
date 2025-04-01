// 1. playwrightでスクショ
// 2. ディレクトリを作って保存
// 3. モデルダウンロード
// 4. 画像ダウンロード
// 5. トレーングデータダウンロード
//
import 'dotenv/config';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { styleText } from 'node:util';
import { downloadImages } from './downloadImages';
import { downloadModel, downloadTrainingData } from './downloadModel';
import { playErrorSound, playSuccessSound } from './playSound';
import { takeScreenShot } from './takeScreenShot';

const DOWNLOAD_DIR = path.join(os.homedir(), '/mydata/Downloads/temp');

const main = async () => {
  const urls = process.argv
    .pop()
    ?.split('\n')
    .filter((x) => !!x)
    .filter((x) => x.includes('civitai'));

  if (!urls || urls.length === 0) {
    console.error('need one argument: a url');
    return;
  }
  const errors = [];
  for (let i = 0; i < urls.length; i++) {
    try {
      console.log(`${i + 1}/${urls.length}`);
      await downloadAll(urls[i]);
    } catch (e) {
      errors.push(e);
    }
  }
  if (errors.length === 0) {
    playSuccessSound();
    console.error(styleText('blue', 'download successfully finished'));
  } else {
    errors.forEach((e) => {
      console.error(styleText('red', (e as Error).message));
    });
    playErrorSound();

    errors.forEach((e) =>
      console.log(
        (e as Error).message
          .match(/https.*\d*/)
          ?.at(0)
          ?.trim()
      )
    );
  }
};

const downloadAll = async (url: string) => {
  if (!url || !url.startsWith('https://civitai.com/models/')) {
    console.error('need one argument: a url');
    return;
  }

  const saveDir = path.join(
    DOWNLOAD_DIR,
    `選択項目から作成したフォルダ ${Date.now()}${Math.floor(
      Math.random() * 1000
    )}`
  );
  try {
    const [pageTitle, fullPathFilename, modelDownloadHref] =
      await takeScreenShot(DOWNLOAD_DIR, url);
    if (!fs.existsSync(saveDir)) {
      fs.mkdirSync(saveDir);
    }
    fs.renameSync(
      fullPathFilename,
      `${saveDir}/${path.basename(fullPathFilename)}`
    );
    console.log(styleText('cyan', `>> ${pageTitle}`));
    if (!modelDownloadHref) {
      throw new Error('modelDownloadHref is not found');
    }
    // eslint-disable-next-line
    const [_, { trainingDataUrl, modelId, modelVersionId }] = await Promise.all(
      [downloadModel(modelDownloadHref, saveDir), downloadImages(url, saveDir)]
    );
    if (trainingDataUrl) {
      await downloadTrainingData(trainingDataUrl, saveDir);
    }
    if (modelId && pageTitle && modelVersionId) {
      fs.renameSync(
        saveDir,
        path.join(DOWNLOAD_DIR, `${pageTitle}[${modelId}]_${modelVersionId}`)
      );
    }
    return styleText('green', 'successfully downloaded');
  } catch (e) {
    console.error(styleText('red', (e as Error).message));
    throw e;
  } finally {
    console.log('----------------------------');
  }
};

main();
