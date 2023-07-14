/**
 * domain related
 */
export const buildImgUrl = (url: string, width: number, name?: string) =>
  `https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/${url}/width=${width},optimized=true/${
    name ?? ''
  }`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const extractModelMetaFromSingleImageNextData = (nextData: any) =>
  nextData.props.pageProps.trpcState.json.queries[0] || {};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const extractModelMetaFromGalleryNextData = (nextData: any) =>
  nextData.props.pageProps?.trpcState?.json?.queries[0]?.state?.data?.meta ||
  {};
