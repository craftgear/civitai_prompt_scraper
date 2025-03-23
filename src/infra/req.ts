import { BlobReader, TextReader, ZipWriter } from '@zip.js/zip.js';
import { getI18nLabel } from '../assets/lang';
import { optimizeUrl, unoptimizeUrl } from '../domain/logic';
import {
  GalleryImagesResponse,
  ModelResponse,
  ModelVersionResponse,
} from '../domain/types';
import { sleep } from '../utils/utils';
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

export const fetchModelData = async (
  modelId: string,
  retry = 0
): Promise<ModelResponse> => {
  const response = await fetch(`${API_URL}/models/${modelId}`, {
    method: 'GET',
    headers: HEADERS,
  });
  if (response.status >= 400) {
    if (retry < 10) {
      sleep(1000);
      return fetchModelData(modelId, retry + 1);
    }
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

const RETRY_LIMIT = 100;
export const fetchGalleryData =
  (onProgressFn?: (text: string) => void) =>
  async (
    modelId?: string | null,
    postId?: string | null,
    modelVersionId?: string | null,
    limit = 200,
    nextCursor?: string,
    retry = 0
  ): Promise<GalleryImagesResponse['items']> => {
    sleep(1000);
    // エラーのリトライおよび、カーソルをたどるのは10回までにする
    if (retry > RETRY_LIMIT - 1) {
      if (!nextCursor) {
        // エラーリトライの場合はエラーをスロー
        throw new Error(` API returns error.`);
      }
      return [];
    }

    let url = `${API_URL}/images`;
    const params = ['sort=Most%20Reactions&nsfw=X&withMeta=true'];

    if (limit) {
      params.push(`limit=${limit}`);
    }
    if (postId) {
      params.push(`postId=${postId}`);
    }
    if (modelId) {
      params.push(`modelId=${modelId}`);
    }
    if (modelVersionId) {
      params.push(`modelVersionId=${modelVersionId}`);
    }
    if (nextCursor) {
      params.push(`cursor=${nextCursor}`);
    }
    // 2024.07.09 usernameをつけるとエラーになるのでコメントアウト
    // if (username) {
    //   params.push(`username=${username}`);
    // }

    if (params.length > 0) {
      url = `${url}?${params.join('&')}`;
    }

    if (onProgressFn) {
      onProgressFn(`calling API ${retry + 1} / ${RETRY_LIMIT}`);
    }

    const response = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
      // signal: AbortSignal.timeout(5000),
    });

    // エラーの場合はリトライ
    if (response.status >= 400) {
      console.log(` ${response.status} ${response.statusText}`);
      return fetchGalleryData(onProgressFn)(
        modelId,
        postId,
        modelVersionId,
        limit,
        undefined,
        response.status > 500 ? retry : retry + 1
      );
    }

    const data = (await response.json()) as GalleryImagesResponse;
    // 次ページのカーソルがある場合は再帰呼び出し
    if (data.metadata.nextCursor) {
      return [
        ...data.items,
        ...(await fetchGalleryData(onProgressFn)(
          modelId,
          postId,
          modelVersionId,
          limit,
          data.metadata.nextCursor,
          retry + 1
        )),
      ];
    }
    return data.items;
  };

export const fetchImg = async (
  url: string,
  retried = 0
): Promise<{ blob: Blob; contentType: string } | null> => {
  const parsedNum = Number(getConfig('networkRequestTimeout')) && 10;
  const timeoutInSecs = Number.isNaN(parsedNum) ? 10 : parsedNum;
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept:
          'image/webp,image/jpeg,image/avif;q=0.9,image/apng;q=0.8,image/*;q=0.7',
        ...HEADERS,
      },
      signal: AbortSignal.timeout(timeoutInSecs * 1000),
    });
    const contentType = response.headers.get('content-type') || '';
    const blob = await response.blob();

    return {
      blob,
      contentType,
    };
  } catch (error) {
    if (url.includes('optimized=true')) {
      return fetchImg(unoptimizeUrl(url), retried + 1);
    }
    if (retried < 10) {
      return fetchImg(url, retried + 1);
    }
    throw error;
  }
};

export const fetchImgs =
  (zipWriter: ZipWriter<Blob>, addedNames: Set<string>) =>
  async (imgInfo: { url: string; hash: string; meta: unknown }[]) =>
    await Promise.all(
      imgInfo
        // do not download mp4
        // .filter((x) => !x.url.endsWith('mp4'))
        .map(async (x) => {
          try {
            const response = await fetchImg(
              getConfig('preferOptimizedImages') ? optimizeUrl(x.url) : x.url
            );
            if (!response) {
              throw new Error(`response is null: ${x.url}`);
            }
            const { blob, contentType } = response;

            let name =
              extractFilebasenameFromImageUrl(x.url) ||
              x.hash.replace(/[;:?*.]/g, '_');
            while (addedNames.has(name)) {
              name += '_';
            }
            addedNames.add(name);

            const filename =
              (contentType && `${name}.${contentType.split('/')[1]}`) ||
              `${name}.png`;

            await zipWriter.add(filename, new BlobReader(blob));

            if (x.meta) {
              const jsonFilename = name + '.json';
              await zipWriter.add(
                jsonFilename,
                new TextReader(JSON.stringify(x.meta, null, '\t'))
              );
            }
          } catch (e) {
            if (getConfig('continueWithFetchError')) {
              console.log('fetchImgs throws an error: ', e);
              return;
            }
            throw e;
          }
        })
    );
