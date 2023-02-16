/**
 * @func randomString
 * @param {number} len
 * @returns {string}
 * @desc  生成随机字符串
 */
export const randomString = (len: number) => {
  let chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz123456789';
  let strLen = chars.length;
  let randomStr = '';
  for (let i = 0; i < len; i++) {
    randomStr += chars.charAt(Math.floor(Math.random() * strLen));
  }
  return randomStr;
};

/**
 * @func randomColor
 * @desc 随机生成颜色
 * @return {String}
 * @example randomColor() // '#000000'
 */
export function randomColor(): string {
  return '#' + ('00000' + ((Math.random() * 0x1000000) << 0).toString(16)).slice(-6);
}

/**
 * @func randomInt
 * @desc 生成指定范围[min, max]的随机数
 * @param  {Number} min
 * @param  {Number} max
 * @return {Number}
 */
export function randomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * @desc 生成uuid
 * @returns { string }
 */

export function randomUUID(): string {
  let d = new Date().getTime();

  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (d + Math.random() * 16) % 16 | 0;

    d = Math.floor(d / 16);

    return (c === 'x' ? r : (r & 0x7) | 0x8).toString(16);
  });

  return uuid;
}
