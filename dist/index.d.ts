import dayjs from 'dayjs';

/**
 * @func setLocalStorage
 * @param {string} key
 * @param {any} value
 * @returns {void}
 * @desc  设置localStorage
 * @example setLocalStorage('key', value);
 */
declare const setLocalStorage: (key: string, value: any) => any;
/**
 * @func getLocalStorage
 * @param {string} key
 * @returns {any}
 * @desc  获取localStorage
 * @example getLocalStorage('key');
 */
declare const getLocalStorage: (key: string) => any;
/**
 * @func delLocalStorage
 * @param {string} key
 * @returns {void}
 * @desc  获取localStorage
 * @example delLocalStorage('key');
 */
declare const delLocalStorage: (key: string) => any;

/**
 * @func setSessionStorage
 * @param {string} key
 * @param {any} value
 * @returns {void}
 * @desc  设置sessionStorage
 * @example setSessionStorage('key', 'value');
 */
declare const setSessionStorage: (key: string, value: any) => any;
/**
 * @func getSessionStorage
 * @param {string} key
 * @returns {any}
 * @desc  获取sessionStorage
 * @example getSessionStorage('key');
 */
declare const getSessionStorage: (key: string) => any;
/**
 * @func delSessionStorage
 * @param {string} key
 * @returns {void}
 * @desc  删除sessionStorage
 * @example delSessionStorage('key');
 */
declare const delSessionStorage: (key: string) => void;

/**
 * @func firstUpperCase
 * @param {string} str
 * @returns {string}
 * @desc  首字母大写
 */
declare const firstUpperCase: (str: string) => string;
/**
 * @func firstLowerCase
 * @param {string} str
 * @returns {string}
 * @desc  首字母小写
 */
declare const firstLowerCase: (str: string) => string;
/**
 * @func telEncrypt
 * @param {number} tel
 * @returns {string}
 * @desc  手机号中间加密
 */
declare const telEncrypt: (tel: number) => string;
/**
 * @func getKebabCase
 * @param {string} str
 * @returns {string}
 * @desc  转换成短横线命名
 */
declare const getKebabCase: (str: string) => string;
/**
 * @func getCamelCase
 * @param {string} str
 * @returns {string}
 * @desc  转换成驼峰命名
 */
declare const getCamelCase: (str: string) => string;
/**
 * @func getEscapeString
 * @param {string} str
 * @returns {string}
 * @desc 字符串的转义,将`&`, `<`, `>`, `"`, `'`分别转义为`&amp;`, `&lt;`,  `&gt;`, `&quot;`, `&#x27;`
 */
declare const getEscapeString: (str: string) => string;
/**
 * @func getUnEscapeString
 * @param {string} str
 * @returns {string}
 * @desc 字符串的反转义,将`&amp;`, `&lt;`,  `&gt;`, `&quot;`, `&#x27;`替换为转义前的符号
 */
declare const getUnEscapeString: (str: string) => string;

/**
 *  常规邮箱格式校验
 * @description  `gaozihang-001@gmail.com` 只允许英文字母、数字、下划线、英文句号、以及中划线组成
 * @param { string } email 邮箱
 * @param { boolean }  isHaveChinese 是否允许中文 ( 名称允许汉字, 域名只允许英文域名 )
 * @return boolean
 * **/
declare function isEmail(email: string, isHaveChinese?: boolean): boolean;
/**
 * @func isTelNumber
 * @param {string} str
 * @returns {boolean}
 * @description 是否是手机号
 */
declare const isTelNumber: (str: string) => boolean;
/**
 * @func isUrl
 * @param {string} str
 * @returns {boolean}
 * @desc 校验是否是URL
 */
declare const isUrl: (str: string) => boolean;
/**
 *
 * @desc 十六进制颜色正则校验
 * @param  { string }  str 需要校验的字符串
 * @return boolean
 */
declare function isHexColor(str: string): boolean;
/**
 * @func isCard
 * @param {string} str 身份证号
 * @param {number} type 1:15位，2:18位，默认0 同时匹配15位和18位
 * @returns {boolean}
 * @desc 是否为身份证号: 支持（1/2）代，15位或18位
 */
declare const isIdCard: (str: string, type?: number) => boolean;
/**
 * @func isPostCode
 * @param {string} value
 * @returns {boolean}
 * @desc 校验是否是大陆邮政编码
 */
declare const isPostCode: (value: string) => boolean;
/**
 *  域名正则校验(一级或二级域名)
 * @func isDomainUrl
 * @description  url validate www.baidu.com test.baidu.com
 * @param  { string } str 需要校验的字符串
 * @return boolean
 */
declare function isDomainUrl(str: string): boolean;
/**
 * 弱密码校验
 * @func isDomainUrl
 @description 密码规则:密码长度为m ~ n个字符，只能包含数字、大写字母、小写字母和下划线组成(有其一即可)
 @param { string } str
 @param { [ number, number ] } len [ min, max ] 密码长度范围, 默认 6-15
 @return boolean
 * **/
declare function isLoosePwd(str: string, len?: [number, number]): boolean;
/**
 * 简单密码校验
 @description 密码规则:密码长度为m ~ n个字符，必须包含数字和字母（大小写均可），允许除空格外的特殊符号
 @param { string } str
 @param { [ number, number ] } len [ min, max ] 密码长度范围, 默认 6-15
 @return boolean
 * **/
declare function isSimplePwd(str: string, len?: [number, number]): boolean;
/**
 * 强密码正则校验
 * @description 密码规则:密码长度为8 ~ 20个字符，由数字、大写字母、小写字母和特殊字符组成, 默认8-20位字符
 * @param { string } str
 * @param { [ number, number ] } len [ min, max ] 密码长度范围
 * @return boolean
 * **/
declare function isStrictPwd(str: string, len?: [number, number]): boolean;

/**
 * 大数输入值验证，整数大于0，小数点最高可达8位19.8n精度(特定场景使用)
 *@param { string } str 需要检查的字符串
 * @return { boolean } 是否符合精度要求
 * **/
declare function isLargeNumber(str: string): boolean;
/**
 * 整数数字正则校验
 * @description
 * @param { string } str 需要检查的字符串
 * @param { boolean } minus 是否支持负数
 * @return { boolean } 是否匹配
 * **/
declare function isInteger(str: string, minus?: boolean): boolean;
/**
 * 弱小数正则校验, 支持负数
 * @description 只要是 xxx.xxx、-xxx.xxx 格式均可通过
 * @param { string } str 需要检查的字符串
 * @param { number } decimalsMax 最大小数位. 默认为8
 * @return { boolean } 是否匹配
 * **/
declare function isLooseDecimal(str: string, decimalsMax?: number): boolean;
/**
 * 严格小数正则校验, 支持负数
 * @description 01.xxx 00.xxx 不可通过
 * @param { string } str 需要检查的字符串
 * @param { Object } options 配置项
 * @param { number } options.decimalsMax 支持的小数位数，默认八位小数
 * @param { boolean } options.minus 是否支持负数，默认false
 * **/
declare function isStrictDecimal(str: string, options?: {
    decimalsMax?: number;
    minus?: boolean;
}): boolean;

/**
 * 中文字符校验
 * @description 中文字符, 只要是汉字即可(只能有中文)，默认最少1个， 常用于真实姓名校验
 * @param { string } str 中文字符
 * @param { number } maxLen 中文字符最大位数
 * @return boolean
 * **/
declare function isChinese(str: string, maxLen?: number): boolean;
/**
 * 数字校验正则
 * @description 只能输入数字
 * @param { string } str 数字字符
 * @param { number } maxLen 字母字符最大位数, 默认10
 * @return boolean
 * **/
declare function isNumber(str: string, maxLen?: number): boolean;
/**
 * 字母字符校验
 * @description 字母字符, 只要是字母即可(只能有大小写字母)，默认最少5个，可能用到英文名字校验
 * @param { string } str 英文字符
 * @param { number } maxLen 字母字符最大位数
 * @return boolean
 * **/
declare function isLetter(str: string, maxLen?: number): boolean;
/**
 * 大写英文字符校验
 * @description 大写英文字符，只要是大写字母即可(只能有大写字母)
 * @param { string } str 需要验证的字符串
 * @param { number } maxLen 大写字母字符最大位数
 * **/
declare function isUpperLetter(str: string, maxLen?: number): boolean;
/**
 * 小写英文字符校验
 * @description 小写英文字符，只要是小写字母即可(只能有小写字母)
 * @param { string } str 需要验证的字符串
 * @param { number } maxLen 小写字母字符最大位数
 * **/
declare function isLowerLetter(str: string, maxLen?: number): boolean;
/**
 * 字母+数字字符校验
 * @description 字母+数字字符, 只要是字母和数字即可(只能有大小写字母和数字)
 * @param { string } str 英文数字字符
 * @param { number } maxLen 字符最大位数
 * **/
declare function isLetterNumber(str: string, maxLen?: number): boolean;
/**
 * 汉字、字母、数字字符
 * @description 中文、英文、数字字符, 只要是中文、英文、数字即可
 * @param { string } str 字符串
 @param { number } maxLen 字符最大位数
 * **/
declare function isLetterZhNumber(str: string, maxLen?: number): boolean;
/**
 * 特殊字符校验
 * @description 特殊字符，包含空白字符 默认最少1个，暂时不知道用于什么场景
 * @param { string } str 需要校验的字符串
 * @param { string } scope 可指定特殊字符，默认 !@#$%^&*()_+-=[]{}|;':",./<>?
 *
 * **/
declare function isSpecialStr(str: string, scope?: string): boolean;
/**
 * base64字符串校验
 * @param { string } str 需要校验的字符串
 * **/
declare function isBase64(str: string): boolean;

/**
 * @func randomString
 * @param {number} len
 * @returns {string}
 * @desc  生成随机字符串
 */
declare const randomString: (len: number) => string;
/**
 * @func randomColor
 * @desc 随机生成颜色
 * @return {String}
 * @example randomColor() // '#000000'
 */
declare function randomColor(): string;
/**
 * @func randomInt
 * @desc 生成指定范围[min, max]的随机数
 * @param  {Number} min
 * @param  {Number} max
 * @return {Number}
 */
declare function randomInt(min: number, max: number): number;
/**
 * @desc 生成uuid
 * @returns { string }
 */
declare function randomUUID(): string;

interface BlobToBase64Result {
    msg: string;
    base64Url: string | ArrayBuffer | null | undefined;
}
interface Base64ToBlobConfig {
    base64Str: string;
    contentType: string;
    fileName: string;
    sliceSize?: number;
}
interface Base64ToBlobResult {
    preview: string;
    name: string;
}
/**
 * @func blobToBase64
 * @desc Blob 转 Base64
 * @param  {Bold}  blob file
 * @return {String}
 * @example Promise<blobToBase64Result>
 */
declare function blobToBase64(blob: Blob): Promise<BlobToBase64Result>;
/**
 * base64 转 blob
 * @param { Base64ToBlobConfig } config
 * **/
declare function base64ToBlob(config: Base64ToBlobConfig): Promise<Base64ToBlobResult>;
/**
 * @desc获取文件后缀名
 * @param { string } filename
 * @return { string | undefined }
 * **/
declare function getFileExtension(filename: string): string | undefined;

/**
 * @desc 千分位格式化
 * @param { number | string } num  需要格式化的数字
 * @param { string } unit unit， xus usd...
 * @param { Object } options other options
 * @param { number } options.integerLength 整数最大位数
 * @param { number } options.decimalsLength 小数最大位数
 * @return { string }
 * **/
declare function numberToThousands(num: number | string, unit?: string, options?: {
    integerLength: number;
    decimalsLength: number;
}): string | null;
/**
 * @func thousandsToString
 * @desc 千分位还原  999,999,999 => 999999999
 * @param { string } str str 需要还原的字符串
 * @param { string } groupSeparator  千分位的分隔符
 * **/
declare function thousandsToString(str: string, groupSeparator?: string): string;

/**
 *@desc 数组切割 [ 1, 2, 3, 4, 5, 6 ]  => [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]
 * @param { Array } arr split array
 * @param { number } step  split step
 * @return { Array<Array> }
 */
declare function sliceArray<T = any>(arr: T[], step: number): Array<T[]>;

/**
 * 获取url指定指定参数信息
 */
declare function getQueryParam(param: string): string | null;
/**
 * 浏览器全屏与退出全屏切换
 */
declare function toggleFullScreen(): null | undefined;

interface FormatTimeValue {
    d: number;
    h: number;
    m: number;
    s: number;
}
type TimeRangeToStampResult = {
    startTime: number | undefined;
    endTime: number | undefined;
};
type DateParams = string | number | Date;
type DayJs = dayjs.Dayjs;
interface FormatRemainTimeResult extends FormatTimeValue {
    formatStr: string;
}
type unit = dayjs.ManipulateType | undefined;
/**
 * @desc According to the timestamp to get the specific day, hour, minute, second, etc
 * @param { number } timeValue
 * **/
declare function getTimeValue(timeValue: number): FormatTimeValue;
/**
 *
 * @desc  format the time to the specific format
 * @param  {Date} endTime
 * @return {FormatRemainTimeResult}
 */
declare function getRemainTime(endTime: DateParams): FormatRemainTimeResult;
/**
 * @desc ${starttime-endTime} Remaining time, if startTime > endTime, return 0
 * @param { Date | String | unix } startTime
 * @param { Date | String } endTime
 * @returns { FormatTimeValue | null } { d, h, m, s } day h m s
 */
declare function getTimeLeft(startTime?: DateParams, endTime?: DateParams): FormatTimeValue | null;
/**
 * @desc 格式化时间戳
 * @param { string|number } timestamp unix
 * @param { string } formatStr format: YYYY-MM-DD HH:mm:ss
 * @returns { null | string }
 * **/
declare function dateFormat(timestamp: string | number, formatStr?: string): null | string;
/**
 * @desc 获取一段时间，默认过去7天
 * @param { number } start 开始时间
 * @param { number } end  结束时间
 * @param { number } formatStr format: YYYY-MM-DD HH:mm:ss
 * @returns { null | string }
 * **/
declare function defaultTimeRange(start?: number, end?: number): DayJs[];
/**
 * @desc 时间数组转时间戳
 * @param { number } start unix
 * @param { number } formatStr format: YYYY-MM-DD HH:mm:ss
 * @returns { null | string }
 * **/
declare function timeRangeToStamp(dateArray?: dayjs.Dayjs[]): TimeRangeToStampResult;

type ValueTypeEnum = 'string' | 'number' | 'boolean' | 'object' | 'array' | 'asyncFunction' | 'function' | 'date' | 'null' | 'promise' | 'unknown';
declare const isString: (data: any) => boolean;
declare const isBoolean: (data: any) => boolean;
declare const isArray: (data: any) => boolean;
declare const isObject: (data: any) => boolean;
declare const isEmptyArray: (data: any) => boolean;
declare const isEmptyObject: (data: any) => boolean;
declare const isPromise: (fn: any) => boolean;
declare const isNull: (data: any) => boolean;
declare const isUndefined: (data: any) => boolean;
declare const isDate: (data: any) => boolean;
declare const isAsyncFunction: (fn: any) => boolean;
declare const isPlainFunction: (fn: any) => boolean;
declare const isFormData: (data: any) => boolean;
declare const isFile: (data: any) => boolean;
declare const isBlob: (data: any) => boolean;
declare function getValueType(data: any): ValueTypeEnum | string;

export { Base64ToBlobConfig, Base64ToBlobResult, BlobToBase64Result, DateParams, FormatRemainTimeResult, FormatTimeValue, TimeRangeToStampResult, ValueTypeEnum, base64ToBlob, blobToBase64, dateFormat, defaultTimeRange, delLocalStorage, delSessionStorage, firstLowerCase, firstUpperCase, getCamelCase, getEscapeString, getFileExtension, getKebabCase, getLocalStorage, getQueryParam, getRemainTime, getSessionStorage, getTimeLeft, getTimeValue, getUnEscapeString, getValueType, isArray, isAsyncFunction, isBase64, isBlob, isBoolean, isChinese, isDate, isDomainUrl, isEmail, isEmptyArray, isEmptyObject, isFile, isFormData, isHexColor, isIdCard, isInteger, isLargeNumber, isLetter, isLetterNumber, isLetterZhNumber, isLooseDecimal, isLoosePwd, isLowerLetter, isNull, isNumber, isObject, isPlainFunction, isPostCode, isPromise, isSimplePwd, isSpecialStr, isStrictDecimal, isStrictPwd, isString, isTelNumber, isUndefined, isUpperLetter, isUrl, numberToThousands, randomColor, randomInt, randomString, randomUUID, setLocalStorage, setSessionStorage, sliceArray, telEncrypt, thousandsToString, timeRangeToStamp, toggleFullScreen, unit };
