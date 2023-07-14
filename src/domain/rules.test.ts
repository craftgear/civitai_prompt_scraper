import { describe, expect, test } from 'vitest';

import { buildImgUrl } from './rules';

describe(' buildImgUrl ', () => {
  test('with name', () => {
    const result = buildImgUrl('url', 800, 'name');

    expect(result).eq(
      'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/url/width=800,optimized=true/name'
    );
  });

  test('without name', () => {
    const result = buildImgUrl('url', 800);

    expect(result).eq(
      'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/url/width=800,optimized=true/'
    );
  });
});
