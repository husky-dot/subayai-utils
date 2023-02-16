/**
 *@desc 数组切割 [ 1, 2, 3, 4, 5, 6 ]  => [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]
 * @param { Array } arr split array
 * @param { number } step  split step
 * @return { Array<Array> }
 */

export function sliceArray<T = any>(arr: T[], step: number): Array<T[]> {
  const result: Array<T[]> = [];

  const len = arr.length;

  for (let i = 0; i < len; i += step) {
    result.push(arr.slice(i, i + step));
  }

  return result;
}
