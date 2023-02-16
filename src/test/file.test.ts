import { describe, expect, it, vi } from 'vitest';
import { getFileExtension } from '../index';

describe('file', () => {
  it('获取文件后缀名', async () => {
    const fileName = 'file.JPG';
    expect(getFileExtension(fileName)).toBe('jpg');
    const fullFileName = 'https://forum01.jiaoliuqu.com/016749782000008712.png';
    expect(getFileExtension(fullFileName)).toBe('png');
    const noFileName = 'fileName'
    expect(getFileExtension(noFileName)).toBe(undefined);
  });
});
