/**
 *  常规邮箱格式校验
 * @description  `gaozihang-001@gmail.com` 只允许英文字母、数字、下划线、英文句号、以及中划线组成
 * @param { string } email 邮箱
 * @param { boolean }  isHaveChinese 是否允许中文 ( 名称允许汉字, 域名只允许英文域名 )
 * @return boolean
 * **/

export function isEmail(email: string, isHaveChinese?: boolean): boolean {
  const reg = `[${isHaveChinese ? '\\u4e00-\\u9fa5' : ''}a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\\.[a-zA-Z0-9_-]+)+$`;

  return RegExp(reg, 'g').test(email);
}

/**
 * @func isTelNumber
 * @param {string} str
 * @returns {boolean}
 * @description 是否是手机号
 */
export const isTelNumber = (str: string): boolean => {
  const reg =
    /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/;
  return reg.test(str);
};

/**
 * @func isUrl
 * @param {string} str
 * @returns {boolean}
 * @desc 校验是否是URL
 */
export const isUrl = (str: string): boolean => {
  const reg = /^(((ht|f)tps?):\/\/)?([^!@#$%^&*?.\s-]([^!@#$%^&*?.\s]{0,63}[^!@#$%^&*?.\s])?\.)+[a-z]{2,6}\/?/;
  return reg.test(str);
};

/**
 *
 * @desc 十六进制颜色正则校验
 * @param  { string }  str 需要校验的字符串
 * @return boolean
 */

export function isHexColor(str: string): boolean {
  const reg = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{3,6})$/;

  return reg.test(str);
}

/**
 * @func isCard
 * @param {string} str 身份证号
 * @param {number} type 1:15位，2:18位，默认0 同时匹配15位和18位
 * @returns {boolean}
 * @desc 是否为身份证号: 支持（1/2）代，15位或18位
 */
export const isIdCard = (str: string, type: number = 0): boolean => {
  // 1代身份证
  const reg1 = /^[1-9]\d{7}(?:0\d|10|11|12)(?:0[1-9]|[1-2][\d]|30|31)\d{3}$/;

  // 2代身份证
  const reg2 = /^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/;
  const reg =
    /^\d{6}((((((19|20)\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|(((19|20)\d{2})(0[13578]|1[02])31)|((19|20)\d{2})02(0[1-9]|1\d|2[0-8])|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))0229))\d{3})|((((\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|((\d{2})(0[13578]|1[02])31)|((\d{2})02(0[1-9]|1\d|2[0-8]))|(([13579][26]|[2468][048]|0[048])0229))\d{2}))(\d|X|x)$/;

  switch (type) {
    case 1:
      return reg1.test(str);
    case 2:
      return reg2.test(str);
    default:
      return reg.test(str);
  }
};

/**
 * @func isPostCode
 * @param {string} value
 * @returns {boolean}
 * @desc 校验是否是大陆邮政编码
 */
export const isPostCode = (value: string): boolean => {
  return /^[1-9][0-9]{5}$/.test(value.toString());
};

/**
 *  域名正则校验(一级或二级域名)
 * @func isDomainUrl
 * @description  url validate www.baidu.com test.baidu.com
 * @param  { string } str 需要校验的字符串
 * @return boolean
 */

export function isDomainUrl(str: string): boolean {
  return /^(?=^.{3,255}$)[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+$/gi.test(str);
}

/**
 * 弱密码校验
 * @func isDomainUrl
 @description 密码规则:密码长度为m ~ n个字符，只能包含数字、大写字母、小写字母和下划线组成(有其一即可)
 @param { string } str
 @param { [ number, number ] } len [ min, max ] 密码长度范围, 默认 6-15
 @return boolean
 * **/

export function isLoosePwd(str: string, len?: [number, number]): boolean {
  const reg = `^[0-9a-zA-Z_]{${len ? len.join(',') : '6,15'}}$`;

  return RegExp(reg, 'g').test(str);
}

/**
 * 简单密码校验
 @description 密码规则:密码长度为m ~ n个字符，必须包含数字和字母（大小写均可），允许除空格外的特殊符号
 @param { string } str
 @param { [ number, number ] } len [ min, max ] 密码长度范围, 默认 6-15
 @return boolean
 * **/

export function isSimplePwd(str: string, len?: [number, number]): boolean {
  const reg = `^(?=.*[0-9].*)(?=.*[A-Za-z].*)[^\\s]{${len ? len.join(',') : '6,15'}}$`;

  return RegExp(reg, 'g').test(str);
}

/**
 * 强密码正则校验
 * @description 密码规则:密码长度为8 ~ 20个字符，由数字、大写字母、小写字母和特殊字符组成, 默认8-20位字符
 * @param { string } str
 * @param { [ number, number ] } len [ min, max ] 密码长度范围
 * @return boolean
 * **/

export function isStrictPwd(str: string, len?: [number, number]): boolean {
  const reg = `^(?=.*[a-z])(?=.*[A-Z])(?=.*\\\d)(?=.*[!@#$&*\\\(\\\)_\\\-+=\\\[\\\]:;\\\?,.])[A-Za-z\\\d!@#$&*\\\(\\)_\\\-+=\\\[\\\]:;\\\?,.]{${
    len ? len.join(',') : '8,20'
  }}$`;

  return RegExp(reg, 'g').test(str);
}
