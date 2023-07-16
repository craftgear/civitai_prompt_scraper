import { describe, expect, it } from 'vitest';

import { buildImgUrl, optimizeUrl, unoptimizeUrl, extractModelMetaFromGalleryNextData, extractModelMetaFromSingleImageNextData} from './logic';

describe('buildImgUrl ', () => {
  it('builds a imgUrl with a name', () => {
    const result = buildImgUrl('url', 800, 'name');

    expect(result).eq(
      'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/url/width=800,optimized=true/name'
    );
  });

  it('builds a imgUrl without a name', () => {
    const result = buildImgUrl('url', 800);

    expect(result).eq(
      'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/url/width=800,optimized=true/'
    );
  });
});

describe('optimize and unoptimize a Url', () => {
  it('optimizes a url', () => {
    const result = optimizeUrl('http://hoge.com/width=980/aaaa');
    expect(result).toEqual('http://hoge.com/width=980,optimized=true/aaaa')
  })

  it('unoptimizes a url', () => {

    const result = unoptimizeUrl('http://hoge.com/width=980,optimized=true/aaaa');
    expect(result).toEqual('http://hoge.com/width=980/aaaa')
  })
})

describe('extractModelMetaFromGalleryNextData', () => {
  it('returns an empty object when nextData is empty', () => {
    const result = extractModelMetaFromGalleryNextData({})
    expect(result).toEqual({});
  } )
   
  it('returns gallery model meta data', () => {
    const result = extractModelMetaFromGalleryNextData({
      props:{
        pageProps: {
          trpcState: {
            json: {
              queries: [{state: {
                data: {
                  meta: 'dummy'
                },
              },},]
            },
          },
        },
      },
    });
    expect(result).toEqual('dummy');
  })
})

describe('extractModelMetaFromSingleImageNextData', () => {

  it('returns an empty object when nextData is empty', () => {
    const result = extractModelMetaFromSingleImageNextData({})
    expect(result).toEqual({});
  })

  it('returns single image meta data', () => {
    const result = extractModelMetaFromSingleImageNextData({props:{
      pageProps: {
        trpcState: {
          json: {
            queries:['dummy']
          }
        }
      }
    }})
    expect(result).toEqual('dummy');
  })

})

