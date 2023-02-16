import { sliceArray } from 'src/array';
import {test, expect } from 'vitest';

test('slice array', () => {
  const list = [1, 2, 3, 4, 5, 6];

  const result: any[] = sliceArray(list, 2);

  expect(result).toEqual([
    [1, 2],
    [3, 4],
    [5, 6],
  ]);
});
