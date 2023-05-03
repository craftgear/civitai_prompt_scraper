export const buttonStyle = `
 display: flex;
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
    stats: {
      cryCount: number;
      laughCount: number;
      likeCount: number;
      dislikeCount: number;
      heartCount: number;
      commentCount: number;
    };
    meta: {
      Size: string;
      seed: number;
      Model: string;
      steps: number;
      hashes: { model: string };
      prompt: string;
      sampler: string;
      cfgScale: number;
      "Clip skip": string;
      resources: { name: string; type: string; weight: number }[];
      "Model hash": string;
      "Hires steps": string;
      "Hires upscale": string;
      "Hires upscaler": string;
      negativePrompt: string;
      "Denoising strength": string;
    };
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
