import { BlobWriter, TextReader, ZipWriter } from '@zip.js/zip.js';
import { saveAs } from 'file-saver';

import { getButtonProgressLabel } from '../assets/lang';
import type { Config } from '../domain/types';
import { chunkArray, sleep } from '../utils/utils';

import { getConfig } from './config_panel';
import { fetchImgs } from './req';

export const createZip =
  (buttnTextUpdateFn?: (text: string) => void | null) =>
  (zipFilename: string, modelInfo?: unknown) =>
  async (
    imgInfo: { url: string; hash: string; meta: unknown }[],
    chunkSize = 20
  ): Promise<void> => {
    if (!modelInfo && imgInfo.length === 0) {
      return;
    }
    const blobWriter = new BlobWriter(`application/zip`);
    const zipWriter = new ZipWriter(blobWriter);

    if (modelInfo) {
      await zipWriter.add(
        'model_info.json',
        new TextReader(JSON.stringify(modelInfo, null, '\t'))
      );
    }

    const addedNames = new Set<string>();
    const predicate = fetchImgs(zipWriter, addedNames);
    let counter = 0;
    for (const xs of chunkArray(imgInfo, chunkSize)) {
      counter += xs.length;
      if (buttnTextUpdateFn) {
        buttnTextUpdateFn(
          `${counter} / ${imgInfo.length} ${getButtonProgressLabel()}`
        );
      }

      try {
        await predicate(xs);
      } catch (e: unknown) {
        console.log('error: ', (e as Error).message);
        if (!getConfig('continueWithFetchError')) {
          zipWriter.close(undefined, {});
          throw e;
        }
      }
      await sleep(500);
    }

    saveAs(await zipWriter.close(undefined, {}), zipFilename);
  };

export const saveConfig = (config: Config) => {
  localStorage.setItem('config', JSON.stringify(config));
};

export const loadConfig = (): Config => {
  const config = localStorage.getItem('config');
  return config ? JSON.parse(config) : {};
};
