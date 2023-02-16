/**
 * @func setSessionStorage
 * @param {string} key
 * @param {any} value
 * @returns {void}
 * @desc  设置sessionStorage
 * @example setSessionStorage('key', 'value');
 */
export const setSessionStorage = (key: string, value: any): any => {
  try {
    window.sessionStorage.setItem(key, JSON.stringify(value));
  } catch {
    return null;
  }
};

/**
 * @func getSessionStorage
 * @param {string} key
 * @returns {any}
 * @desc  获取sessionStorage
 * @example getSessionStorage('key');
 */
export const getSessionStorage = (key: string): any => {
  const localStr = sessionStorage.getItem(key);
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
 * @func delSessionStorage
 * @param {string} key
 * @returns {void}
 * @desc  删除sessionStorage
 * @example delSessionStorage('key');
 */
export const delSessionStorage = (key: string) => {
  window.sessionStorage.removeItem(key);
};
