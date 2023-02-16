import { describe, expect, it } from 'vitest';
import { randomColor, randomInt, randomString, randomUUID } from '../index';

describe('random', () => {
  it('random create word length test ', () => {
    const word = randomString(10);

    expect(word.length).toBe(10);
  });
  describe('测试 randomColor 函数', () => {
    it('机生成颜色', () => {
      const colorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
      expect(randomColor()).toMatch(colorRegex);
    });
  });
  describe('测试 randomInt 函数', () => {
    it('返回1', () => {
      expect(randomInt(1, 1)).toBe(1);
    });
    it('返回-100-100之间的正数', () => {
      const value = randomInt(-100, 100);
      expect(value).toBeGreaterThanOrEqual(-100);
      expect(value).toBeLessThanOrEqual(100);
    });
    it('返回1-100之间的正数', () => {
      const value = randomInt(1, 100);
      expect(value).toBeGreaterThanOrEqual(1);
      expect(value).toBeLessThanOrEqual(100);
    });
  });
  describe('测试 randomColor 函数', () => {
    it('机生成颜色', () => {
      const colorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
      expect(randomColor()).toMatch(colorRegex);
    });
  });

  describe('测试 randomUUID 函数', () => {
    it('生成UUID', () => {
      const len = randomUUID().length

      expect(len).toBe(36)
    });
  });
});
