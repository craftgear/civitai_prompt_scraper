import { spawn } from 'node:child_process';
import { styleText } from 'node:util';

export const downloadModel = (url: string, downloadDir: string) => {
  console.log(`* start downloading model\r`);
  return __wget(`https://civitai.com${url}`, downloadDir);
};

export const downloadTrainingData = (url: string, downloadDir: string) =>
  __wget(url, downloadDir);

const __wget = (canonicalUrl: string, downloadDir: string) => {
  let isDownloadSucceeded = false;
  const token = process.env.TOKEN;
  return new Promise((resolve, reject) => {
    const child = spawn(
      'wget',
      [
        '--limit-rate=5M',
        '--compression=gzip',
        '--content-disposition',
        '--retry-connrefused',
        '--waitretry=30',
        '--tries=100',
        '--no-http-keep-alive',
        '--timeout=30',
        `${canonicalUrl}&token=${token}`,
      ],
      {
        cwd: downloadDir,
      }
    );
    child.stderr.on('data', function (data) {
      const output = data.toString();
      const percentage = output.match(/\d*%/);
      if (percentage) {
        process.stdout.write(
          styleText('grey', `downloading model: ${percentage.at(0)}\r`)
        );
      }
      if (output && output.includes('保存完了')) {
        isDownloadSucceeded = true;
      }
    });

    //     stderr: 2025-03-28 11:37:11 (4.29 MB/s) - `aziibpixelmix_v10.safetensors' へ保存完了 [2132625894/2132625894]
    //
    // closing code: 0

    child.on('close', function (code) {
      console.log('code', code);
      if (isDownloadSucceeded) {
        console.log(
          styleText(
            'green',
            'downloaded the model                                    '
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
//   return new Promise((resolve, reject) => {
//     const child = spawnSync(
//       'wget',
//       [
//         '--limit-rate=5M',
//         '--compression=gzip',
//         '--content-disposition',
//         '--retry-connrefused',
//         '--waitretry=60',
//         '--tries=100',
//         '--no-http-keep-alive',
//         '--timeout=30',
//         `${canonicalUrl}&token=${token}`,
//       ],
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
