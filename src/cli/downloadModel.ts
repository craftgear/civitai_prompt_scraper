import { spawnSync } from 'node:child_process';

export const downloadModel = (url: string, downloadDir: string) => {
  console.log('----- start downloading model');
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
        `https://civitai.com${url}&token=6faaa72e4d1575ccc0e49f2f29807552`,
      ],
      {
        cwd: downloadDir,
      }
    );
    resolve(true);
  });
};
