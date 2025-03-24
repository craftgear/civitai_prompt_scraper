import { spawnSync } from 'node:child_process';

export const downloadModel = (url: string, downloadDir: string) => {
  process.stdout.write(`* start downloading model\r`);
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
        `https://civitai.com${url}&token=${token}`,
      ],
      {
        cwd: downloadDir,
      }
    );
    resolve(true);
  });
};
