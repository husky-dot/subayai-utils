import { describe, expect, it } from 'vitest';
import {
  setLocalStorage,
  getLocalStorage,
  delLocalStorage,
  setSessionStorage,
  getSessionStorage,
  delSessionStorage,
} from '../index';

describe('storage', () => {
  describe('localStorage 相关的方法', () => {
    it('设置，读取，删除', () => {
      setLocalStorage('key', { a: 1, b: 2 });
      const value = getLocalStorage('key');
      expect(value).toEqual({ a: 1, b: 2 });
      delLocalStorage('key');
      const delValue = getLocalStorage('key');
      expect(delValue).toEqual(undefined);
    });

    it('测试  setLocalStorage 异常情况', () => {
      let obj: Record<string, any> = {
        name: '小李',
      };
      obj.content = obj;
      const errorValue = setLocalStorage('error', obj);
      expect(errorValue).toBe(undefined);
    });
    it('测试  setLocalStorage 异常情况', () => {
      window.localStorage.setItem('noJsonValue', 'a');
      const errorValue = getLocalStorage('noJsonValue');
      expect(errorValue).toBe(undefined);
    });
  });

  describe('SessionStorage 相关的方法', () => {
    it('设置，读取，删除', () => {
      setSessionStorage('key', { a: 1, b: 2 });

      const value = getSessionStorage('key');
      expect(value).toEqual({ a: 1, b: 2 });
      delSessionStorage('key');
      const delValue = getSessionStorage('key');
      expect(delValue).toBe(undefined);
    });

    it('测试 key 不存在', () => {
      const value = getSessionStorage('notSetKey');
      expect(value).toBe(undefined);
    });

    it('测试  SessionStorage 异常情况', () => {
      window.sessionStorage.setItem('noJsonValue', 'a');
      const errorValue = getSessionStorage('noJsonValue');
      expect(errorValue).toBe(undefined);
    });

    it('测试  setSessionStorage 异常情况', () => {
      let obj: Record<string, any> = {
        name: '小李',
      };
      obj.content = obj;
      const errorValue = setSessionStorage('error', obj);
      expect(errorValue).toBe(null);
    });

  });
});
