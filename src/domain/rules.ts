/**
 * domain related
 */
export const buildImgUrl = (url: string, width: number, name?: string) =>
  `https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/${url}/width=${width},optimized=true/${
    name ?? ''
  }`;
