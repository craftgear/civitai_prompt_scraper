import { ImagesResponse } from "./types";
import { BlobWriter, BlobReader, TextReader, ZipWriter } from "@zip.js/zip.js";

export const sleep = (ms = 1000) =>
  new Promise((resolve) => setTimeout(() => resolve(true), ms));

export const waitForElement = async (
  selector: string,
  retryLimit = 10
): Promise<HTMLElement | null> => {
  if (retryLimit < 1) {
    return null;
  }
  const element = document.querySelector(selector);
  if (!element) {
    await sleep();
    return await waitForElement(selector, retryLimit - 1);
  } else {
    return element as HTMLElement;
  }
};

export const fetchGalleryData = async (modelId: string, postId: string) => {
  let url = `https://civitai.com/api/v1/images/?postId=${postId}`;
  if (modelId) {
    url = `${url}&modelId=${modelId}`;
  }
  const response = await fetch(url);
  return (await response.json()) as ImagesResponse;
};

export const fetchImg = async (
  url: string
): Promise<{ blob: Blob; contentType: string } | null> => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "image/webp,image/avif,*/*",
        Origin: "https://civitai.com",
        Referer: "https://civitai.com/",
        Cookie: document.cookie,
      },
    });
    const contentType = response.headers.get("content-type") || "";
    const blob = await response.blob();

    return {
      blob,
      contentType,
    };
  } catch (error) {
    if (url.includes("image.civitai.com")) {
      return await fetchImg(
        url.replace("image.civitai.com", "imagecache.civitai.com")
      );
    }
    throw error;
  }
};
const extractFilebasenameFromImageUrl = (url: string) => {
  const filename = url.split("/").slice(-1)[0];
  return filename.split(".")[0];
};

export const createZip =
  (button: HTMLElement | null) =>
  async (
    xs: { url: string; meta: Object }[]
  ): Promise<{ content: Blob; error: Error | null }> => {
    // create ZIP with all images/model
    const blobWriter = new BlobWriter(`application/zip`);
    const zipWriter = new ZipWriter(blobWriter);

    let counter = 0;
    let error = null;
    for (const x of xs) {
      if (button) {
        button.innerHTML = `${counter + 1} / ${xs.length} ダウンロード中`;
      }

      try {
        const response = await fetchImg(x.url);
        if (!response) {
          throw new Error("response is null");
        }
        const { blob, contentType } = response;

        const name = extractFilebasenameFromImageUrl(x.url);
        const filename =
          (contentType && `${name}.${contentType.split("/")[1]}`) ||
          `${x.url}.png`;

        await zipWriter.add(filename, new BlobReader(blob));

        if (!!x.meta) {
          const jsonFilename = name + ".json";
          await zipWriter.add(
            jsonFilename,
            new TextReader(JSON.stringify(x.meta))
          );
        }
        counter += 1;
      } catch (e: unknown) {
        console.log("error: ", (e as Error).message, x.url);
        error = new Error(
          `画像ダウンロードでエラーが発生しました。${(e as Error).message}, ${
            x.url
          }`
        );
        break;
      }
      // await sleep(100);
    }

    return { content: (await zipWriter.close(undefined, {})) as Blob, error };
  };
