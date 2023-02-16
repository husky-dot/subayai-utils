import { describe, expect, it } from 'vitest';
import {
  isBase64,
  isChinese,
  isLetter,
  isLetterNumber,
  isLetterZhNumber,
  isLowerLetter,
  isNumber,
  isSpecialStr,
  isUpperLetter,
} from '../../../index';

describe('中文字符正则测试', () => {
  it('中文字符测试', () => {
    expect(isChinese('zhangsan')).toBeFalsy();

    expect(isChinese('123')).toBeFalsy();

    expect(isChinese('  ')).toBeFalsy();

    expect(isChinese('中文')).toBeTruthy();
  });

  it('中文字符长度范围测试', () => {
    expect(isChinese('1234', 2)).toBeFalsy();

    expect(isChinese('中文三', 2)).toBeFalsy();

    expect(isChinese('张三李', 3)).toBeTruthy();
  });
});

describe('数字字符测试', () => {
  it('合法性测试', () => {
    expect(isNumber('123add')).toBeFalsy();

    expect(isNumber('aaa')).toBeFalsy();

    expect(isNumber('中文')).toBeFalsy();

    expect(isNumber('12345', 4)).toBeFalsy();

    expect(isNumber('123')).toBeTruthy();

    expect(isNumber('12345', 5)).toBeTruthy();
  });
});

describe('字母字符正则测试', () => {
  it('字母字符测试', () => {
    expect(isLetter('...@!!!')).toBeFalsy();

    expect(isLetter('，')).toBeFalsy();

    expect(isLetter('  ')).toBeFalsy();

    expect(isLetter('中文')).toBeFalsy();

    expect(isLetter('123')).toBeFalsy();

    expect(isLetter('zhangsan')).toBeTruthy();

    expect(isLetter('ADSDS')).toBeTruthy();

    expect(isLetter('zhangsanADSDS', 20)).toBeTruthy();
  });

  it('大写英文字符测试', () => {
    expect(isUpperLetter('AGJHGJGhhmk')).toBeFalsy();

    expect(isUpperLetter('jjj')).toBeFalsy();

    expect(isUpperLetter('GJHGJGH', 3)).toBeFalsy();

    expect(isUpperLetter('GJHGJGH')).toBeTruthy();

    expect(isUpperLetter('HH', 2)).toBeTruthy();
  });

  it('小写英文字符测试', () => {
    expect(isLowerLetter('GJHGJGH')).toBeFalsy();

    expect(isLowerLetter('ggHH')).toBeFalsy();

    expect(isLowerLetter('gggg', 1)).toBeFalsy();

    expect(isLowerLetter('gggg', 4)).toBeTruthy();

    expect(isLowerLetter('gggg', 4)).toBeTruthy();
  });

  it('英文字符长度范围测试', () => {
    expect(isLetter('', 2)).toBeFalsy();

    expect(isLetter('aaa', 2)).toBeFalsy();

    expect(isLetter('hh', 2)).toBeTruthy();
  });
});

describe('英文数字字符正则测试', () => {
  it('英文数字字符测试', () => {
    expect(isLetterNumber('...@!!!')).toBeFalsy();

    expect(isLetterNumber('，')).toBeFalsy();

    expect(isLetterNumber('  ')).toBeFalsy();

    expect(isLetterNumber('中文')).toBeFalsy();

    expect(isLetterNumber('123')).toBeTruthy();

    expect(isLetterNumber('zhangsan')).toBeTruthy();

    expect(isLetterNumber('ADSDS123')).toBeTruthy();

    expect(isLetterNumber('sanAS123')).toBeTruthy();
  });

  it('英文数字字符长度范围测试', () => {
    expect(isLetterNumber('')).toBeFalsy();

    expect(isLetterNumber('aaa', 3)).toBeTruthy();

    expect(isLetterNumber('123', 3)).toBeTruthy();

    expect(isLetterNumber('aaa123', 6)).toBeTruthy();
  });
});

describe('中文、英文、数字正则测试', () => {
  it('字符有效性测试', () => {
    expect(isLetterZhNumber('中文')).toBeTruthy();

    expect(isLetterZhNumber('abc')).toBeTruthy();

    expect(isLetterZhNumber('ABC')).toBeTruthy();

    expect(isLetterZhNumber('ABC123')).toBeTruthy();

    expect(isLetterZhNumber('ABCaz123')).toBeTruthy();

    expect(isLetterZhNumber('123')).toBeTruthy();

    expect(isLetterZhNumber('中文ABCaz123')).toBeTruthy();
  });
});

describe('特殊字符校验正则测试', () => {
  it('特殊字符有效性测试', () => {
    expect(isSpecialStr('!@#$%^&*()_+-=[]{}|;:",./<>?')).toBeTruthy();

    expect(isSpecialStr('!a', '!@')).toBeFalsy();

    expect(isSpecialStr('!@>', '!@>')).toBeTruthy();
  });
});

describe('base64字符串校验：', () => {
  it('格式校验：', () => {
    expect(isBase64('')).toBeFalsy();
    expect(isBase64('12346')).toBeFalsy();
    expect(isBase64('dG9vbHR0LmNvbeWcqOe6v+W3peWFtw')).toBeFalsy();
    expect(isBase64('dG9vbHR0LmNvbeWcqOe6v+W3peWFtw=')).toBeFalsy();
    expect(isBase64('dG9vbHR0LmNvbeWcqOe6v+W3peWFtw==')).toBeTruthy();
  });
});
