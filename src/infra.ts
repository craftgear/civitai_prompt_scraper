import { saveAs } from 'file-saver';
import { BlobWriter, BlobReader, TextReader, ZipWriter } from '@zip.js/zip.js';
import { sleep, getButtonProgressLabel } from './utils';
import { ImagesResponse, ModelVersionResponse } from './types';

const extractFilebasenameFromImageUrl = (url: string) => {
  const filename = url.split('/').slice(-1)[0];
  return filename.split('.')[0];
};

export const fetchModelVersionInfo = async (modelVersionId: string) => {
  const response = await fetch(
    `https://civitai.com/api/v1/model-versions/${modelVersionId}`
  );
  if (response.status >= 400) {
    throw new Error(` ${response.status} ${response.statusText}`);
  }
  return (await response.json()) as ModelVersionResponse;
};

export const fetchGalleryData = async (
  modelId: string | null,
  postId: string | null
) => {
  let url = 'https://civitai.com/api/v1/images';
  let params = [];
  if (postId) {
    params.push(`postId=${postId}`);
  }
  if (modelId) {
    params.push(`modelId=${modelId}`);
  }
  if (params.length > 0) {
    url = `${url}?${params.join('&')}`;
  }

  const response = await fetch(url);
  if (response.status >= 400) {
    throw new Error(` ${response.status} ${response.statusText}`);
  }
  return (await response.json()) as ImagesResponse;
};

export const fetchImg = async (
  url: string
): Promise<{ blob: Blob; contentType: string } | null> => {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept:
          'image/webp,image/jpeg,image/avif;q=0.9,image/apng;q=0.8,image/*;q=0.7',
        'Accept-Encoding': 'gzip, deflate, br',
        Origin: 'https://civitai.com',
        Referer: 'https://civitai.com/',
        Cookie: document.cookie,
      },
    });
    const contentType = response.headers.get('content-type') || '';
    const blob = await response.blob();

    return {
      blob,
      contentType,
    };
  } catch (error) {
    if (url.includes('image.civitai.com')) {
      return await fetchImg(
        url.replace('image.civitai.com', 'imagecache.civitai.com')
      );
    }
    throw error;
  }
};

export const createZip =
  (button: HTMLElement | null) =>
  (zipFilename: string) =>
  async (
    imgInfo: { url: string; hash: string; meta: Object }[]
  ): Promise<void> => {
    const addedNames = new Set();
    const blobWriter = new BlobWriter(`application/zip`);
    const zipWriter = new ZipWriter(blobWriter);

    let counter = 0;
    let error = null;
    for (const x of imgInfo) {
      if (button) {
        button.innerText = `${counter + 1} / ${
          imgInfo.length
        } ${getButtonProgressLabel()}`;
      }

      try {
        const response = await fetchImg(x.url);
        if (!response) {
          throw new Error('response is null');
        }
        const { blob, contentType } = response;

        let name =
          extractFilebasenameFromImageUrl(x.url) ||
          x.hash.replace(/[\;\:\?\*\.]/g, '_');
        while (addedNames.has(name)) {
          name += '_';
        }

        const filename =
          (contentType && `${name}.${contentType.split('/')[1]}`) ||
          `${name}.png`;

        await zipWriter.add(filename, new BlobReader(blob));
        addedNames.add(name);

        if (!!x.meta) {
          const jsonFilename = name + '.json';
          await zipWriter.add(
            jsonFilename,
            new TextReader(JSON.stringify(x.meta))
          );
        }
        counter += 1;
      } catch (e: unknown) {
        console.log('error: ', (e as Error).message, x.url);
        error = new Error(`${(e as Error).message}, ${x.url}`);
        break;
      }
      await sleep(100);
    }

    if (error) {
      alert(error.message);
      return;
    }

    saveAs(await zipWriter.close(undefined, {}), zipFilename);
  };
