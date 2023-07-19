import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest';
import { chunkArray, log, sleep } from './utils';

describe('sleep', () => {
  beforeAll(() => {
    vi.useFakeTimers();
  });

  afterAll(() => {
    vi.useRealTimers();
  });

  it('sleeps for 1 sec ', async () => {
    expect(sleep()).resolves.toEqual(true);
    await vi.advanceTimersByTimeAsync(1001);
  });

  it('sleeps for 100 msec ', async () => {
    expect(sleep(100)).resolves.toEqual(true);
    await vi.advanceTimersByTimeAsync(101);
  });
});

describe('log', () => {
  it('log ', () => {
    vi.spyOn(console, 'log');
    log('hoge');
    expect(console.log).toHaveBeenCalledWith('civitai_prompt_scraper:', 'hoge');
  });
});

describe('chunkArray', () => {
  const arg = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  it('splits an array into sub arrays with 5 items each', () => {
    const result = chunkArray(arg, 5);
    expect(result).toEqual([
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 0],
    ]);
  });

  it('splits an array into sub arrays with 3 items each', () => {
    const result = chunkArray(arg, 3);
    expect(result).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9], [0]]);
  });
});
