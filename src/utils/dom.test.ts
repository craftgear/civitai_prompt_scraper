import { afterAll, beforeAll, describe, expect, it, Mock, vi } from 'vitest';
import {
  parseModelMetaFromGalleryNextData,
  parseModelMetaFromSingleImageNextData,
  replaceWithDisabledButton,
  updateButtonText,
  waitForElement,
} from './dom';

import { selector } from '../infra/dom';
vi.mock('../infra/dom', () => ({
  selector: vi.fn(),
  createDiv: () => ({
    setAttribute: vi.fn(),
  }),
}));

describe('waitForElement', () => {
  beforeAll(() => {
    vi.useFakeTimers();
  });

  afterAll(() => {
    vi.useRealTimers();
    vi.resetAllMocks();
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

describe('parseNextData', () => {
  afterAll(() => {
    vi.resetAllMocks();
  });

  it('parseModelMetaFromGalleryNextData', () => {
    (selector as Mock).mockReturnValueOnce({
      innerText: `{"props":{
          "pageProps":{
            "trpcState":{
              "json": {
                "queries":[
                  {"state": {"data": {"meta":{"modelName": "hoge"}}}}
                ]
              }
            }
          }}}`,
    });

    const result = parseModelMetaFromGalleryNextData();
    expect(result).toEqual({ modelName: 'hoge' });
  });

  // props?.pageProps?.trpcState?.json?.queries[0]
  it('parseModelMetaFromSingleImageNextData', () => {
    (selector as Mock).mockReturnValueOnce({
      innerText: `{"props":{
          "pageProps":{
            "trpcState":{
              "json": {
                "queries":[
                  {"modelName": "hoge"}
                ]
              }
            }
          }}}`,
    });

    const result = parseModelMetaFromSingleImageNextData();
    expect(result).toEqual({ modelName: 'hoge' });
  });
});

describe('updateButtonText', () => {
  it('changes button text', () => {
    const button = { innerText: 'hoge' };
    updateButtonText(button as HTMLElement)('fuga');
    expect(button.innerText).toBe('fuga');
  });
});

describe('replaceWithDisabledButton', () => {
  it('replace a button with a disabled one', () => {
    const buttonId = 'button-id';
    const disabledText = 'hoge';
    const button = {
      id: buttonId,
      parentNode: {
        replaceChild: vi.fn(),
      },
    };

    replaceWithDisabledButton(button as unknown as HTMLElement, disabledText);

    expect(button.parentNode.replaceChild.mock.lastCall[0].id).toEqual(
      buttonId
    );
    expect(button.parentNode.replaceChild.mock.lastCall[0].innerText).toEqual(
      disabledText
    );
    expect(button.parentNode.replaceChild.mock.lastCall[1].id).toEqual(
      buttonId
    );
  });
});
