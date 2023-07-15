import { afterAll, beforeAll, describe, expect, it, Mock, vi } from 'vitest';
import { /* parseModelMetaFromSingleImageNextData, parseModelMetaFromGalleryNextData, */ waitForElement } from './dom';

import { selector } from '../infra/dom';
vi.mock('../infra/dom', () => ({
  selector: vi.fn(),
}));

describe('waitForElement', () => {
  beforeAll(() => {
    vi.useFakeTimers();
  });

  afterAll(() => {
    vi.useRealTimers();
  });

  it('waits for an element rendered', async () => {
    (selector as Mock).mockReturnValueOnce(undefined).mockReturnValueOnce(true);
    expect(waitForElement('hoge')).resolves.toEqual(true);
    await vi.advanceTimersByTimeAsync(2001);
  });

  it('returned null when retry count is 0', async () => {
    (selector as Mock)
      .mockReturnValueOnce(undefined)
      .mockReturnValueOnce(undefined);
    expect(waitForElement('hoge', 2)).resolves.toEqual(null);
    await vi.advanceTimersByTimeAsync(2001);
  });
});

describe.todo('parseNextData', () => {
  it('parseModelMetaFromGalleryNextData')
  it('parseModelMetaFromSingleImageNextData');
});
