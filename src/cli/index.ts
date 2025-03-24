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
import { downloadImages } from './downloadImages';
import { downloadModel } from './downloadModel';
import { takeScreenShot } from './takeScreenShot';

const DOWNLOAD_DIR = path.join(os.homedir(), '/mydata/Downloads/');

const main = async () => {
  const url = process.argv.pop();
  if (!url || !url.startsWith('https://civitai.com/models/')) {
    console.log('need one argument: a url');
    return;
  }
  let dir = '';
  try {
    const [pageTitle, fullPathFilename, modelDownloadHref] =
      await takeScreenShot(DOWNLOAD_DIR, url);
    dir = `${DOWNLOAD_DIR}${pageTitle}`;
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
      fs.renameSync(
        fullPathFilename,
        `${dir}/${path.basename(fullPathFilename)}`
      );
    }
    console.log('----- pageTitle', pageTitle);
    console.log('----- modelDownloadHref', modelDownloadHref);
    if (!modelDownloadHref) {
      throw new Error('modelDownloadHref is not found');
    }
    // TODO: トレーングデータがあったら一緒にダウンロードしたい
    await Promise.all([
      downloadModel(modelDownloadHref, dir),
      downloadImages(url, dir),
    ]);
  } catch (e) {
    console.error(url);
    console.error(e);
    console.log('----------------------------');
  }
  if (!dir) {
    console.error(`dir was not created. something went wrong.`);
    return;
  }
};

main();
