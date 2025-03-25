export const log = <T>(...xs: T[]) => {
  console.log(`civitai_prompt_scraper:`, ...xs);
};

export const sleep = (ms = 1000) =>
  new Promise((resolve) => setTimeout(() => resolve(true), ms));

export const chunkArray = <T>(xs: T[], chunkSize = 50): T[][] =>
  xs.reduce<T[][]>((acc: T[][], curr: T) => {
    const tail: T[] = acc.pop() ?? [];
    if (tail.length < chunkSize) {
      tail.push(curr);
      return [...acc, tail];
    }
    return [...acc, tail, [curr]];
  }, []);
