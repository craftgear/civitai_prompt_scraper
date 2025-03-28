import { spawn } from 'node:child_process';
import { styleText } from 'node:util';

export const downloadModel = (url: string, downloadDir: string) => {
  // console.log(`* start downloading model\r`);
  return __wget(`https://civitai.com${url}`, downloadDir);
};

export const downloadTrainingData = (url: string, downloadDir: string) =>
  __wget(url, downloadDir);

const DOWNLOAD_FINISHED_MESSAGE = 'へ保存完了';
const WGET_OPTIONS = [
  '--limit-rate=7M',
  '--compression=gzip',
  '--content-disposition',
  '--retry-connrefused',
  '--waitretry=30',
  '--tries=100',
  '--no-http-keep-alive',
  '--timeout=30',
];

const __wget = (canonicalUrl: string, downloadDir: string) => {
  let isDownloadSucceeded = false;
  const token = process.env.TOKEN;
  WGET_OPTIONS.push(`${canonicalUrl}&token=${token}`);
  return new Promise((resolve, reject) => {
    const child = spawn('wget', WGET_OPTIONS, {
      cwd: downloadDir,
    });
    child.stderr.on('data', function (data) {
      const output = data.toString();
      const percentage = output.match(/\d*%/);
      if (percentage) {
        process.stdout.write(
          styleText('white', `downloading model: ${percentage.at(0)}\r`)
        );
      }
      if (output && output.includes(DOWNLOAD_FINISHED_MESSAGE)) {
        isDownloadSucceeded = true;
      }
    });

    child.on('close', function (code) {
      if (isDownloadSucceeded) {
        console.log(
          styleText(
            'green',
            'downloaded model                                         '
          )
        );
        resolve(true);
        return;
      }
      if (code !== 0 || !isDownloadSucceeded) {
        reject(`failed to download ${canonicalUrl}`);
        return;
      }
    });
  });
};

// const _wget = (canonicalUrl: string, downloadDir: string) => {
//   const token = process.env.TOKEN;
//   WGET_OPTIONS.push(`${canonicalUrl}&token=${token}`);
//   return new Promise((resolve, reject) => {
//     const child = spawnSync(
//       'wget',
//       WGET_OPTIONS,
//       {
//         cwd: downloadDir,
//       }
//     );
//     console.log('stdout: ', child.stdout);
//     console.log('stderr: ', child.stderr);
//     console.log('exist code: ', child.status);
//     if (child.error) {
//       console.log('ERROR: ', child.error);
//       reject(child.error);
//       return;
//     }
//     resolve(true);
//   });
// };
