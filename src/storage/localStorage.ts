/**
 * @func setLocalStorage
 * @param {string} key
 * @param {any} value
 * @returns {void}
 * @desc  设置localStorage
 * @example setLocalStorage('key', value);
 */
export const setLocalStorage = (key: string, value: any): any => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    return undefined;
  }
};

/**
 * @func getLocalStorage
 * @param {string} key
 * @returns {any}
 * @desc  获取localStorage
 * @example getLocalStorage('key');
 */
export const getLocalStorage = (key: string): any => {
  const localStr = localStorage.getItem(key);
  if (localStr) {
    try {
      return JSON.parse(localStr);
    } catch {
      return undefined;
    }
  }
  return undefined;
};

/**
 * @func delLocalStorage
 * @param {string} key
 * @returns {void}
 * @desc  获取localStorage
 * @example delLocalStorage('key');
 */
export const delLocalStorage = (key: string): any => {
  window.localStorage.removeItem(key);
};
