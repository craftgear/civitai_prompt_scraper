/**
 * domain related
 */
export const buildImgUrl = (url: string, width: number, name?: string) =>
  `https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/${url}/width=${width},optimized=true/${
    name ?? ''
  }`;

export const optimizeUrl = (url: string) =>
  url.replace(/width=(\d*)/, `width=$1,optimized=true`);
export const unoptimizeUrl = (url: string) =>
  url.replace(/\/width=(\d*),optimized=true/, 'width=$1');

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const extractModelMetaFromSingleImageNextData = (nextData: any) =>
  nextData.props?.pageProps?.trpcState?.json?.queries[0] || {};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const extractModelMetaFromGalleryNextData = (nextData: any) =>
  nextData.props?.pageProps?.trpcState?.json?.queries[0]?.state?.data?.meta ||
  {};
