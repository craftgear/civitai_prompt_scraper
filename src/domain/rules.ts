/**
 * domain related
 */
export const buildImgUrl = (url: string, width: number, name?: string) =>
  `https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/${url}/width=${width},optimized=true/${
    name ?? ''
  }`;

export const extractModelMetaDataFromNextData = (nextData: {
  // eslint-disable-next-line
  props: any;
}) =>
  nextData.props.pageProps?.trpcState?.json?.queries[0]?.state?.data?.meta ??
  {};
