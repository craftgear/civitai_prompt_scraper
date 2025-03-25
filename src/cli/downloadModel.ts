import { spawnSync } from 'node:child_process';

export const downloadModel = (url: string, downloadDir: string) => {
  console.log(`* start downloading model\r`);
  return _wget(`https://civitai.com${url}`, downloadDir);
};

export const downloadTrainingData = (url: string, downloadDir: string) =>
  _wget(url, downloadDir);

const _wget = (canonicalUrl: string, downloadDir: string) => {
  const token = process.env.TOKEN;
  return new Promise((resolve) => {
    spawnSync(
      'wget',
      [
        '--limit-rate=5M',
        '--compression=gzip',
        '--content-disposition',
        '--retry-connrefused',
        '--waitretry=60',
        '--tries=100',
        '--no-http-keep-alive',
        `${canonicalUrl}&token=${token}`,
      ],
      {
        cwd: downloadDir,
      }
    );
    resolve(true);
  });
};
