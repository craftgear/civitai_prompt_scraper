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
import { takeScreenShot } from './takeScreenShot';

const DOWNLOAD_DIR = path.join(os.homedir(), '/mydata/Downloads/');

const main = async () => {
  const url = process.argv.pop();
  if (!url || !url.startsWith('https://civitai.com/models/')) {
    console.error('need one argument: a url');
    return;
  }
  const saveDir = path.join(
    DOWNLOAD_DIR,
    `選択項目から作成したフォルダ ${Date.now()}`
  );
  try {
    const [pageTitle, fullPathFilename, modelDownloadHref] =
      await takeScreenShot(DOWNLOAD_DIR, url);
    if (!fs.existsSync(saveDir)) {
      fs.mkdirSync(saveDir);
      fs.renameSync(
        fullPathFilename,
        `${saveDir}/${path.basename(fullPathFilename)}`
      );
    }
    console.log(styleText('cyan', `>> ${pageTitle}`));
    if (!modelDownloadHref) {
      throw new Error('modelDownloadHref is not found');
    }
    // eslint-disable-next-line
    const [_, trainingDataUrl] = await Promise.all([
      downloadModel(modelDownloadHref, saveDir),
      downloadImages(url, saveDir),
    ]);
    if (trainingDataUrl) {
      await downloadTrainingData(trainingDataUrl, saveDir);
    }
  } catch (e) {
    console.error(styleText('red', url));
    console.error(e);
  } finally {
    console.log('----------------------------');
  }
  if (!saveDir) {
    console.error(
      styleText('red', `dir was not created. something went wrong.`)
    );
    return;
  }
};

main();
