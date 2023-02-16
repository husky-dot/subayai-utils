import { describe, expect, it } from 'vitest';
import {
  firstUpperCase,
  firstLowerCase,
  telEncrypt,
  getKebabCase,
  getCamelCase,
  getEscapeString,
  getUnEscapeString,
} from '../index';

describe('string', () => {
  describe('测试 firstUpperCase 函数', () => {
    it('首字母大写', () => {
      expect(firstUpperCase('abc')).toBe('Abc');
    });
  });
  describe('测试 firstLowerCase 函数', () => {
    it('首字母小写', () => {
      expect(firstLowerCase('ABC')).toBe('aBC');
    });
  });
  describe('测试 telEncrypt 函数', () => {
    it('手机号中间加密', () => {
      expect(telEncrypt(15345068956)).toBe('153****8956');
    });
  });
  describe('测试 getKebabCase 函数', () => {
    it('转换成短横线命名', () => {
      expect(getKebabCase('aBc')).toBe('a-bc');
    });
  });
  describe('测试 getCamelCase 函数', () => {
    it('转换成驼峰命名', () => {
      expect(getCamelCase('a-bc')).toBe('aBc');
    });
  });
  describe('测试 getEscapeString 函数', () => {
    it(`'字符串的转义,将&, <, >, ", '分别转义为&amp;, &lt;, &gt;, &quot;, &#x27;`, () => {
      expect(getEscapeString('&')).toBe('&amp;');
      expect(getEscapeString('<')).toBe('&lt;');
      expect(getEscapeString('>')).toBe('&gt;');
      expect(getEscapeString('"')).toBe('&quot;');
      expect(getEscapeString("'")).toBe('&#x27;');
    });
  });
  describe('测试 getUnEscapeString 函数', () => {
    it(`字符串的反转义,将&amp;, &lt;, &gt;, &quot;, &#x27;替换为转义前的符号`, () => {
      expect(getUnEscapeString('&amp;')).toBe('&');
      expect(getUnEscapeString('&lt;')).toBe('<');
      expect(getUnEscapeString('&gt;')).toBe('>');
      expect(getUnEscapeString('&quot;')).toBe('"');
      expect(getUnEscapeString('&#x27;')).toBe("'");
    });
  });
});
