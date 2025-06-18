import { BlobReader, TextReader, ZipWriter } from '@zip.js/zip.js';
import fs from 'node:fs';
import { WritableStream } from 'stream/web';

import { styleText } from 'node:util';
import { optimizeUrl, unoptimizeUrl } from '../domain/logic';
import type {
  GalleryImagesResponse,
  ModelResponse,
  ModelVersionResponse,
} from '../domain/types';
import { chunkArray, sleep } from '../utils/utils';
const API_URL = 'https://civitai.com/api/v1';

const HEADERS = {
  'Accept-Encoding': 'gzip, deflate, br',
  Origin: 'https://civitai.com',
  Referer: 'https://civitai.com/',
};

export const downloadImages = async (url: string, dir: string) => {
  try {
    const {
      modelId,
      modelName,
      imageList,
      modelVersionId,
      modelVersionName,
      modelInfo,
      trainingDataUrl,
    } = await getModelInfoAndImageList(url, (log: string) => {
      process.stdout.write(`${log}\r`);
    });

    const filenameFormat = '{modelName}[{modelId}]_{modelVersionId}';
    const filename =
      (filenameFormat as string)
        .replace('{modelId}', `${modelId ?? ''}`)
        .replace('{modelName}', modelName)
        .replace('{modelVersionId}', `${modelVersionId}`)
        .replace('{modelVersionName}', modelVersionName)
        .replaceAll(/[<>\\/.*?"|]/g, '') + '.zip';

    const streamWriter = createNodeWritableStream(`${dir}/${filename}`);
    const zipWriter = new ZipWriter<WritableStream>(streamWriter, {
      zip64: true,
      bufferedWrite: true,
    });

    if (modelInfo) {
      await zipWriter.add(
        'model_info.json',
        new TextReader(JSON.stringify(modelInfo, null, '\t'))
      );
    }

    let chunkSize = 5;
    if (50 < imageList.length && imageList.length <= 200) {
      chunkSize = 10;
    }
    if (200 < imageList.length && imageList.length <= 400) {
      chunkSize = 20;
    }
    if (400 < imageList.length && imageList.length <= 1000) {
      chunkSize = 40;
    }
    if (1000 < imageList.length && imageList.length <= 5000) {
      chunkSize = 60;
    }
    if (imageList.length > 5000) {
      chunkSize = 100;
    }

    let count = 0;
    const addedNames = new Set<string>();
    const fetchImagesAndWriteToZip = fetchImgs(zipWriter, addedNames);
    for (const xs of chunkArray(imageList, chunkSize)) {
      count = count + xs.length;
      try {
        process.stdout.write(
          styleText(
            'white',
            `                        , downloading images ${count}/${imageList.length}\r`
          )
        );
        // 429対策でスリープ
        await fetchImagesAndWriteToZip(xs);
      } catch (e: unknown) {
        console.error('error: ', (e as Error).message);
        throw e;
      }
      await sleep(500);
    }
    console.log(
      styleText(
        'green',
        `downloaded ${imageList.length} images.                                         `
      )
    );

    await zipWriter.close();

    return { trainingDataUrl, modelId, modelVersionId };
  } catch (e) {
    throw new Error(`downloadImages: ${(e as Error).message}\n  ${url}`);
  }
};

const fetchImg = async (
  url: string,
  retried = 0
): Promise<{ blob: Blob; contentType: string } | null> => {
  const timeoutInSecs = 60;
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept:
          'image/webp,image/jpeg,image/avif;q=0.9,image/apng;q=0.8,image/*;q=0.7',
        'Accept-Encoding': 'gzip, deflate, br',
        Origin: 'https://civitai.com',
        Referer: 'https://civitai.com/',
      },
      signal: AbortSignal.timeout(timeoutInSecs * 1000),
    });
    const contentType = response.headers.get('content-type') || '';
    const blob = await response.blob();
    return {
      blob,
      contentType,
    };
  } catch (error: unknown) {
    // if (url.includes('optimized=true')) {
    //   return fetchImg(unoptimizeUrl(url), retried + 1);
    // }
    if (retried < RETRY_LIMIT) {
      await sleep(1000 * 5);
      console.log(`fetchImg: retry ${retried} ${url}                  `);
      return fetchImg(url, retried + 1);
    }
    console.log('fetchImg ----- e', (error as Error).message);
    throw error;
  }
};

const extractFilebasenameFromImageUrl = (url: string) => {
  const filename = url.split('/').slice(-1)[0];
  return filename.split('.')[0];
};
const fetchImgs =
  (zipWriter: ZipWriter<WritableStream>, addedNames: Set<string>) =>
  async (imgInfo: { url: string; hash: string; meta: unknown }[]) =>
    await Promise.all(
      imgInfo.map(async (x) => {
        const response = await fetchImg(optimizeUrl(x.url));
        if (!response) {
          throw new Error(
            `extractFilebasenameFromImageUrl response is null: ${x.url}`
          );
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
      })
    );

const fetchModelVersionData = async (
  modelVersionId: string,
  retryCount = 0
) => {
  try {
    const response = await fetch(
      `${API_URL}/model-versions/${modelVersionId}`,
      {
        method: 'GET',
        headers: HEADERS,
      }
    );
    if (response.status >= 500 && retryCount < RETRY_LIMIT) {
      // 500エラーはリトライする
      console.log(
        `fetchModelVersionData ----- response.status ${
          response.status
        }, retry ${retryCount + 1}                `
      );
      await sleep(5 * 1000);
      return fetchModelVersionData(modelVersionId, retryCount + 1);
    }
    if (response.status >= 400) {
      throw new Error(
        `fetchModelVersionData ${response.status} ${response.statusText}`
      );
    }
    return (await response.json()) as ModelVersionResponse;
  } catch (e) {
    console.error('fetchModelVersionData error', (e as Error).message);
    throw e;
  }
};

const fetchModelInfoByModleIdOrModelVersionId = async (
  modelId: string | undefined,
  modelVersionId: string | undefined
) => {
  const id = modelId
    ? modelId
    : modelVersionId
    ? (await fetchModelVersionData(modelVersionId)).modelId.toString()
    : '';

  if (!id) {
    throw new Error(
      'fetchModelInfoByModleIdOrModelVersionId :modelId is not found'
    );
  }

  try {
    const modelInfo = await fetchModelData(id);
    return modelInfo;
  } catch (e) {
    if (!modelVersionId) {
      throw e;
    }
    const modelVersionInfo = await fetchModelVersionData(modelVersionId);
    return {
      id: modelVersionInfo.modelId.toString(),
      name: modelVersionInfo.model.name,
      modelVersions: [modelVersionInfo],
      modelVersionInfo,
    };
  }
};

const fetchModelData = async (
  modelId: string,
  retry = 0
): Promise<ModelResponse> => {
  const response = await fetch(`${API_URL}/models/${modelId}`, {
    method: 'GET',
    headers: HEADERS,
  });
  if (response.status >= 500) {
    if (retry < RETRY_LIMIT) {
      console.log(
        `fetchModelData ----- response.status ${response.status}, retry ${
          retry + 1
        }              `
      );
      await sleep(1000 * 30);
      return fetchModelData(modelId, retry + 1);
    }
    throw new Error(`fetchModelData ${response.status} ${response.statusText}`);
  }
  return (await response.json()) as ModelResponse;
};

const getModelInfo = async (href: string) => {
  const hrefModelId =
    href.match(/\/models\/(?<modelId>\d*)/)?.groups?.modelId ??
    href.match(/modelId=(?<modelId>\d*)/)?.groups?.modelId;
  const hrefModelVersionId = href.match(/modelVersionId=(?<modelVersionId>\d*)/)
    ?.groups?.modelVersionId;

  const modelInfo = await fetchModelInfoByModleIdOrModelVersionId(
    hrefModelId,
    hrefModelVersionId
  );

  const { id: modelId, name: modelName, modelVersions } = modelInfo;

  if (!modelId) {
    throw new Error('getModelInfo modelId is not found');
  }

  const modelVersionId = hrefModelVersionId
    ? hrefModelVersionId
    : modelInfo.modelVersions[0].id;

  if (!modelVersionId) {
    throw new Error('getModelInfo modelVersionId is not found');
  }

  const modelVersionName =
    modelInfo.modelVersions.find((x: { id: number }) => {
      return `${x.id}` === `${modelVersionId}`;
    })?.name || 'no_version_name';

  return {
    modelId,
    modelName,
    modelVersionId,
    modelVersionName,
    modelVersions,
    modelInfo,
    hrefModelVersionId,
  };
};

const getModelInfoAndImageList = async (
  href: string,
  updateTextFn: (text: string) => void
) => {
  const {
    modelId,
    modelName,
    modelVersionId,
    modelVersionName,
    modelVersions,
    modelInfo,
    hrefModelVersionId,
  } = await getModelInfo(href);

  const modelVersion =
    modelVersions.length === 1
      ? modelVersions[0]
      : modelVersions?.find((x) => x.id.toString() === hrefModelVersionId);
  // NOTE: modelVersion.imagesにはimage.metaがない
  const modelImages = modelVersion?.images ?? [];

  const trainingDataUrl = modelVersion?.files.find(
    (x) => x.type === 'Training Data'
  )?.downloadUrl;

  const galleryImageList = await fetchGalleryData(updateTextFn)(
    `${modelId}`,
    null,
    `${modelVersionId}`
  );

  // NOTE: 通常プレビュー画像もギャラリーに含まれているので、
  // 画像のダウンロードはギャラリー画像を優先する。
  // (modelVersion.imagesにはmetaがないので、ギャラリーデータがある場合はそちらのほうがよい
  // まれにギャラリー画像がないモデルがあるので、その場合はmodelVersion.imagesをダウンロードする
  const imageList =
    galleryImageList.length > 0
      ? galleryImageList.length < modelImages.length
        ? [
            ...galleryImageList.filter((x) => !x.url.endsWith('mp4')),
            ...modelImages.filter((x) => !x.url.endsWith('mp4')),
          ]
        : galleryImageList
      : modelImages;
  return {
    modelId,
    modelName,
    modelVersionId,
    modelVersionName,
    imageList,
    modelInfo,
    trainingDataUrl,
  };
};

const RETRY_LIMIT = 100;
const fetchGalleryData =
  (onProgressFn?: (text: string) => void) =>
  async (
    modelId?: string | null,
    postId?: string | null,
    modelVersionId?: string | null,
    limit = 200,
    nextCursor?: string,
    retry = 0
  ): Promise<GalleryImagesResponse['items']> => {
    // エラーのリトライおよび、カーソルをたどるのは100回までにする
    if (retry > RETRY_LIMIT - 1) {
      if (!nextCursor) {
        // エラーリトライの場合はエラーをスロー
        throw new Error(`fetchGalleryData API returns error.`);
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
      onProgressFn(
        `                        , calling API ${retry + 1} / ${RETRY_LIMIT}`
      );
    }

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: HEADERS,
        signal: AbortSignal.timeout(60 * 1000),
      });

      // エラーの場合はリトライ
      if (response.status >= 500 && retry < RETRY_LIMIT) {
        console.log(
          `fetchGalleryData ----- ${response.status} ${
            response.statusText
          }: retry ${retry + 1}                  `
        );
        await sleep(1000 * 5);
        return fetchGalleryData(onProgressFn)(
          modelId,
          postId,
          modelVersionId,
          limit,
          undefined,
          retry + 1
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
    } catch (e: unknown) {
      if ((e as Error).name === 'AbortError' && retry < RETRY_LIMIT) {
        console.log(
          `fetchGalleryData ----- AbortError: retry ${
            retry + 1
          }                  `
        );
        await sleep(1000 * 5);
        return fetchGalleryData(onProgressFn)(
          modelId,
          postId,
          modelVersionId,
          limit,
          nextCursor,
          retry + 1
        );
      }
      console.error('fetchGalleryData error', (e as Error).message);
      throw e;
    }
  };

function createNodeWritableStream(filePath: string) {
  const nodeStream = fs.createWriteStream(filePath);
  return new WritableStream({
    write(chunk) {
      return new Promise((resolve) => {
        if (!nodeStream.write(Buffer.from(chunk))) {
          nodeStream.once('drain', resolve);
        } else {
          resolve();
        }
      });
    },
    close() {
      return new Promise((resolve) => {
        nodeStream.end(resolve);
      });
    },
    abort(err) {
      return new Promise((_, reject) => {
        nodeStream.destroy(err);
        reject(err);
      });
    },
  });
}
