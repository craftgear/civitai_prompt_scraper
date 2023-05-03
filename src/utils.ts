import { ImagesResponse, NextData } from "./types";
import { BlobWriter, BlobReader, TextReader, ZipWriter } from "@zip.js/zip.js";
import p from "../package.json";

const API_URL = `https://civitai.com/api/v1/images`;

export const log = (...xs: any[]) => {
  console.log(`${p.name}:`, ...xs);
};

const getLocale = () => {
  return window.navigator.language;
};

export const getButtonLabel = () => {
  const locale = getLocale();
  switch (locale) {
    case "ja": {
      return "画像＆JSONダウンロード";
    }
    case "zh-TW": {
      return "下載圖像和JSON";
    }
    case "zh-CN": {
      return "下载图像和JSON";
    }
    default: {
      return "Download images with JSON";
    }
  }
};

export const getButtonProgressLabel = () => {
  const locale = getLocale();
  switch (locale) {
    case "ja": {
      return "ダウンロード中";
    }
    case "zh-TW": {
      return "下載中";
    }
    case "zh-CN": {
      return "下载中";
    }
    default: {
      return "downloading";
    }
  }
};

export const getButtonCompleteLabel = () => {
  const locale = getLocale();
  switch (locale) {
    case "ja": {
      return "完了";
    }
    case "zh-TW":
    case "zh-CN": {
      return "完成";
    }
    default: {
      return "done";
    }
  }
};

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

export const buildImgUrl = (url: string, width: number, name: string) =>
  `https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/${url}/width=${width},optimized=true/${
    name ?? ""
  }`;

export const parseNextData = () => {
  const nextData: NextData = (document.querySelector(
    "#__NEXT_DATA__"
  ) as HTMLElement) || { innerText: "" };
  const data = JSON.parse(nextData.innerText);
  return data;
};

export const fetchGalleryData = async (modelId: string, postId: string) => {
  let url = API_URL;
  let params = [];
  if (postId) {
    params.push(`postId=${postId}`);
  }
  if (modelId) {
    params.push(`modelId=${modelId}`);
  }
  if (params.length > 0) {
    url = `${url}?${params.join("&")}`;
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
    xs: { url: string; hash: string; meta: Object }[]
  ): Promise<{ content: Blob; error: Error | null }> => {
    const addedNames = new Set();
    const blobWriter = new BlobWriter(`application/zip`);
    const zipWriter = new ZipWriter(blobWriter);

    let counter = 0;
    let error = null;
    for (const x of xs) {
      if (button) {
        button.innerText = `${counter + 1} / ${
          xs.length
        } ${getButtonProgressLabel()}`;
      }

      try {
        const response = await fetchImg(x.url);
        if (!response) {
          throw new Error("response is null");
        }
        const { blob, contentType } = response;

        let name =
          extractFilebasenameFromImageUrl(x.url) ||
          x.hash.replace(/[\;\:\?\*\.]/g, "_");
        while (addedNames.has(name)) {
          name += "_";
        }

        const filename =
          (contentType && `${name}.${contentType.split("/")[1]}`) ||
          `${name}.png`;

        await zipWriter.add(filename, new BlobReader(blob));
        addedNames.add(name);

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

export const screenShot = async () => {
  const main = await waitForElement("main");

  if (!main) {
    return;
  }
  main.style.letterSpacing = "0.1rem";

  document.querySelectorAll("canvas").forEach((x) => x.remove());
  const canvas = await html2canvas(main, {
    allowTaint: true,
  });

  const div = document.createElement("div");
  div.setAttribute("style", "border: 1px solid red;");
  div.appendChild(canvas);

  document.body.appendChild(div);

  main.style.letterSpacing = "inherit";
};
