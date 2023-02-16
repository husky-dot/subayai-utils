/**
 * 中文字符校验
 * @description 中文字符, 只要是汉字即可(只能有中文)，默认最少1个， 常用于真实姓名校验
 * @param { string } str 中文字符
 * @param { number } maxLen 中文字符最大位数
 * @return boolean
 * **/

export function isChinese(str: string, maxLen?: number): boolean {
  const reg = `^[\\u4e00-\\u9fa5]{1,${maxLen || ''}}$`;

  return RegExp(reg, 'g').test(str);
}

/**
 * 数字校验正则
 * @description 只能输入数字
 * @param { string } str 数字字符
 * @param { number } maxLen 字母字符最大位数, 默认10
 * @return boolean
 * **/

export function isNumber(str: string, maxLen?: number): boolean {
  const reg = `^[0-9]{1,${maxLen || ''}}$`;

  return RegExp(reg, 'g').test(str);
}

/**
 * 字母字符校验
 * @description 字母字符, 只要是字母即可(只能有大小写字母)，默认最少5个，可能用到英文名字校验
 * @param { string } str 英文字符
 * @param { number } maxLen 字母字符最大位数
 * @return boolean
 * **/

export function isLetter(str: string, maxLen?: number): boolean {
  const reg = `^[a-zA-Z]{1,${maxLen || ''}}$`;

  return RegExp(reg, 'g').test(str);
}

/**
 * 大写英文字符校验
 * @description 大写英文字符，只要是大写字母即可(只能有大写字母)
 * @param { string } str 需要验证的字符串
 * @param { number } maxLen 大写字母字符最大位数
 * **/

export function isUpperLetter(str: string, maxLen?: number): boolean {
  const reg = `^[A-Z]{1,${maxLen || ''}}$`;

  return RegExp(reg, 'g').test(str);
}

/**
 * 小写英文字符校验
 * @description 小写英文字符，只要是小写字母即可(只能有小写字母)
 * @param { string } str 需要验证的字符串
 * @param { number } maxLen 小写字母字符最大位数
 * **/

export function isLowerLetter(str: string, maxLen?: number): boolean {
  const reg = `^[a-z]{1,${maxLen || ''}}$`;

  return RegExp(reg, 'g').test(str);
}

/**
 * 字母+数字字符校验
 * @description 字母+数字字符, 只要是字母和数字即可(只能有大小写字母和数字)
 * @param { string } str 英文数字字符
 * @param { number } maxLen 字符最大位数
 * **/

export function isLetterNumber(str: string, maxLen?: number): boolean {
  const reg = `^[A-Za-z0-9]{1,${maxLen || ''}}$`;

  return RegExp(reg, 'g').test(str);
}

/**
 * 汉字、字母、数字字符
 * @description 中文、英文、数字字符, 只要是中文、英文、数字即可
 * @param { string } str 字符串
 @param { number } maxLen 字符最大位数
 * **/

export function isLetterZhNumber(str: string, maxLen?: number): boolean {
  const reg = `^[\\u4E00-\\u9FA5A-Za-z0-9]{1,${maxLen || ''}}$`;

  return RegExp(reg, 'g').test(str);
}

/**
 * 特殊字符校验
 * @description 特殊字符，包含空白字符 默认最少1个，暂时不知道用于什么场景
 * @param { string } str 需要校验的字符串
 * @param { string } scope 可指定特殊字符，默认 !@#$%^&*()_+-=[]{}|;':",./<>?
 *
 * **/

export function isSpecialStr(str: string, scope?: string): boolean {
  const defaultSpecial = '!@#$%^&*()_+-=[\\]{}|;\':",\\./<>?';

  const reg = `^[${scope || defaultSpecial}]+$`;

  return RegExp(reg, 'g').test(str);
}

/**
 * base64字符串校验
 * @param { string } str 需要校验的字符串
 * **/

export function isBase64(str: string): boolean {
  const reg = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$/gi;

  return reg.test(str);
}
