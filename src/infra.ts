import { saveAs } from 'file-saver';
import { BlobWriter, BlobReader, TextReader, ZipWriter } from '@zip.js/zip.js';
import { sleep } from './utils';
import {
  GalleryImagesResponse,
  ModelResponse,
  ModelVersionResponse,
  Config,
} from './types';
import { getButtonProgressLabel, getI18nLabel } from './lang';
import { getConfig } from './config_panel';

const extractFilebasenameFromImageUrl = (url: string) => {
  const filename = url.split('/').slice(-1)[0];
  return filename.split('.')[0];
};

const API_URL = 'https://civitai.com/api/v1';

const HEADERS = {
  'Accept-Encoding': 'gzip, deflate, br',
  Origin: 'https://civitai.com',
  Referer: 'https://civitai.com/',
  Cookie: document.cookie,
};

export const fetchModelData = async (modelId: string) => {
  const response = await fetch(`${API_URL}/models/${modelId}`, {
    method: 'GET',
    headers: HEADERS,
  });
  if (response.status >= 400) {
    throw new Error(` ${response.status} ${response.statusText}`);
  }
  return (await response.json()) as ModelResponse;
};

export const fetchModelVersionData = async (modelVersionId: string) => {
  const response = await fetch(`${API_URL}/model-versions/${modelVersionId}`, {
    method: 'GET',
    headers: HEADERS,
  });
  if (response.status >= 400) {
    throw new Error(` ${response.status} ${response.statusText}`);
  }
  return (await response.json()) as ModelVersionResponse;
};

export const fetchModelInfoByModleIdOrModelVersionId = async (
  modelId: string | undefined,
  modelVersionId: string | undefined
) => {
  const id = modelId
    ? modelId
    : modelVersionId
    ? (await fetchModelVersionData(modelVersionId)).modelId.toString()
    : '';

  if (!id) {
    throw new Error(getI18nLabel('modelIdNotFoundError'));
  }

  const modelInfo = await fetchModelData(id);
  return modelInfo;
};

export const fetchGalleryData = async (
  modelId?: string | null,
  postId?: string | null,
  modelVersionId?: string | null,
  username?: string | null
) => {
  let url = `${API_URL}/images`;
  let params = ['limit=20'];

  if (postId) {
    params.push(`postId=${postId}`);
  }
  if (modelId) {
    params.push(`modelId=${modelId}`);
  }
  if (modelVersionId) {
    params.push(`modelVersionId=${modelVersionId}`);
  }
  if (username) {
    params.push(`username=${username}`);
  }

  if (params.length > 0) {
    url = `${url}?${params.join('&')}`;
  }

  const response = await fetch(url, {
    method: 'GET',
    headers: HEADERS,
  });
  if (response.status >= 400) {
    throw new Error(` ${response.status} ${response.statusText}`);
  }
  const data = (await response.json()) as GalleryImagesResponse;
  return data.items.map((x) => {
    return {
      ...x,
      url: x.url.replace(/width=\d*/, `width=${x.width},optimized=true`),
    };
  }) as GalleryImagesResponse['items'];
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
        ...HEADERS,
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
      return fetchImg(
        url.replace('image.civitai.com', 'imagecache.civitai.com')
      );
    }
    throw error;
  }
};

export const createZip =
  (buttnTextUpdateFn: (text: string) => void | null) =>
  (zipFilename: string, modelInfo?: Object) =>
  async (
    imgInfo: { url: string; hash: string; meta: Object }[]
  ): Promise<void> => {
    const addedNames = new Set();
    const blobWriter = new BlobWriter(`application/zip`);
    const zipWriter = new ZipWriter(blobWriter);

    if (modelInfo) {
      await zipWriter.add(
        'model_info.json',
        new TextReader(JSON.stringify(modelInfo, null, '\t'))
      );
    }

    let counter = 0;
    let errors = [];

    for (const x of imgInfo) {
      if (buttnTextUpdateFn) {
        buttnTextUpdateFn(
          `${counter + 1} / ${imgInfo.length} ${getButtonProgressLabel()}`
        );
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
            new TextReader(JSON.stringify(x.meta, null, '\t'))
          );
        }

        counter += 1;
      } catch (e: unknown) {
        console.log('error: ', (e as Error).message, x.url);
        errors.push(`${(e as Error).message}, ${x.url}`);
        if (!getConfig('continueWithFetchError')) {
          break;
        }
      }
      await sleep(100);
    }

    if (errors.length > 0) {
      if (!getConfig('continueWithFetchError')) {
        throw new Error(errors.join('\n\r'));
      }
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
