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
  prompt: string;
  sampler: string;
  cfgScale: number;
  negativePrompt: string;
  'Denoising strength'?: string;
  'Model hash': string;
  'Hires steps'?: string;
  'Hires upscale'?: string;
  'Hires upscaler'?: string;
  'Clip skip'?: string;
  resources?: { name: string; type: string; weight: number }[];
  hashes?: { model: string };
};

type ModelImage = {
  url: string;
  nsfw: string;
  width: number;
  height: number;
  hash: string;
  meta: ImageMetaData;
};

export type ModelResponse = {
  id: number;
  name: string;
  description: string | null;
  type: string;
  poi: boolean;
  nsfw: boolean;
  allowNoCredit: boolean;
  allowCommercialUse: string;
  allowDerivatives: boolean;
  allowDifferentLicense: boolean;
  stats: {
    downloadCount: number;
    favoriteCount: number;
    commentCount: number;
    ratingCount: number;
    rating: number;
  };
  creator: {
    username: string;
    image: string;
  };
  tags: { name: string }[];
  modelVersions: {
    id: number;
    modelId: number;
    name: string;
    createdAt: string;
    updatedAt: string;
    trainedWords: string[];
    baseModel: string;
    earlyAccessTimeFrame: number;
    description: string;
    stats: { downloadCount: number; ratingCount: number; rating: number };
    files: ModelVersionFile[];
    images: ModelImage[];
    downloadUrl: string;
  }[];
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
  images: ModelImage[];
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
export type GalleryImagesResponse = {
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

export type InputField = {
  type: string;
  name: string;
  label: string;
  value: boolean | string | number;
  desc: string;
  style: string;
};

export type Config = {
  [key in 'openShowMore' | 'continueWithFetchError']: boolean;
} & {
  [key in 'modelPreviewFilenameFormat' | 'galleryFilenameFormat']: string;
};
export type ConfigKey = keyof Config;

export enum ButtonState {
  ready = 'ready',
  inProgress = 'in-progress',
  done = 'done',
}
