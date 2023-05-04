export const buttonStyle = `
 display: flex;
 width: 100%;
 justify-content: center;
 align-items: center;
 color: white;
 background-color: #228be6;
 height: 36px;
 border-radius: 4px;
 font-weight: bold;
 font-size: small;
 cursor: pointer;
 word-break: keep-all;
`;

export const disabledButtonStyle = `
 display: flex;
 width: 100%;
 justify-content: center;
 align-items: center;
 color: white;
 background-color: grey;
 disable: true;
 height: 36px;
 border-radius: 4px;
 font-weight: bold;
 font-size: small;
 cursor: none;
 word-break: keep-all;
`;

type ModelVersionFile = {
  name: string;
  id: number;
  sizeKB: number;
  type: string;
  metadata: {
    fp: string | null;
    size: string | null;
    format: string;
  };
  pickleScanResult: string;
  pickleScanMessage: string;
  virusScanResult: string;
  scannedAt: string;
  hashes: {
    AutoV2: string;
    SHA256: string;
    CRC32: string;
    BLAKE3: string;
  };
  primary: boolean;
  downloadUrl: string;
};

type ImageMetaData = {
  Size: string;
  seed: number;
  Model: string;
  steps: number;
  hashes: { model: string };
  prompt: string;
  sampler: string;
  cfgScale: number;
  'Clip skip': string;
  resources: { name: string; type: string; weight: number }[];
  'Model hash': string;
  'Hires steps': string;
  'Hires upscale': string;
  'Hires upscaler': string;
  negativePrompt: string;
  'Denoising strength': string;
};

type ModelVersionImage = {
  url: string;
  nsfw: string;
  width: number;
  height: number;
  hash: string;
  meta: ImageMetaData;
};

export type ModelVersionResponse = {
  id: number;
  modelId: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  trainedWords: string[];
  baseModel: string;
  earlyAccessTimeFrame: number;
  description: string | null;
  stats: {
    downloadCount: number;
    ratingCount: number;
    rating: number;
  };
  model: {
    name: string;
    type: string;
    nsfw: boolean;
    poi: boolean;
  };
  files: ModelVersionFile[];
  images: ModelVersionImage[];
  downloadUrl: string;
};

type ImageStats = {
  cryCount: number;
  laughCount: number;
  likeCount: number;
  dislikeCount: number;
  heartCount: number;
  commentCount: number;
};
export type ImagesResponse = {
  items: {
    id: number;
    url: string;
    hash: string;
    width: number;
    height: number;
    nsfwLevel: string;
    nsfw: boolean;
    createdAt: string;
    postId: number;
    stats: ImageStats;
    meta: ImageMetaData;
    username: string;
  }[];
  metadata: {
    totalItems: number;
    currentPage: number;
    pageSize: number;
    totalPages: number;
  };
};

export type NextData = {
  innerText: string;
};
