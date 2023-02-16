import { describe, expect, it } from 'vitest';

import { isLargeNumber, isInteger, isLooseDecimal, isStrictDecimal } from '../../../index';

describe('金额正则测试', () => {
  it('19.8n整数金额测试', () => {
    expect(isLargeNumber('0.')).toBeFalsy();

    expect(isLargeNumber('12.')).toBeFalsy();

    expect(isLargeNumber('0.8')).toBeFalsy();

    expect(isLargeNumber('0..8')).toBeFalsy();

    expect(isLargeNumber('111.888888888')).toBeFalsy();

    expect(isLargeNumber('1111111111111111111111111111111111111111.88888888')).toBeFalsy();

    expect(isLargeNumber('111.88888888')).toBeTruthy();

    expect(isLargeNumber('1999999999999999999.88888888')).toBeTruthy();
  });
});

describe('整数正则测试', () => {
  it('合法整数测试', () => {
    expect(isInteger('0.')).toBeFalsy();

    expect(isInteger('12.88')).toBeFalsy();

    expect(isInteger('-12.88')).toBeFalsy();

    expect(isInteger('012')).toBeFalsy();

    expect(isInteger('0012')).toBeFalsy();

    expect(isInteger('-12')).toBeFalsy();

    expect(isInteger('12')).toBeTruthy();

    expect(isInteger('102')).toBeTruthy();

    expect(isInteger('-102', true)).toBeTruthy();

    expect(isInteger('102', true)).toBeTruthy();
  });
});

describe('小数正则测试', () => {
  it('弱校验小数测试', () => {
    expect(isLooseDecimal('0.')).toBeFalsy();

    expect(isLooseDecimal('12.')).toBeFalsy();

    expect(isLooseDecimal('12.21')).toBeTruthy();

    expect(isLooseDecimal('00.0123', 4)).toBeTruthy();

    expect(isLooseDecimal('01.0123', 4)).toBeTruthy();

    expect(isLooseDecimal('11.22')).toBeTruthy();

    expect(isLooseDecimal('-11.22')).toBeTruthy();

    expect(isLooseDecimal('-0.22')).toBeTruthy();
  });

  it('严格小数测试', () => {
    expect(isStrictDecimal('0.')).toBeFalsy();

    expect(isStrictDecimal('12.')).toBeFalsy();

    expect(isStrictDecimal('00.0123')).toBeFalsy();

    expect(isStrictDecimal('013.88')).toBeFalsy();

    expect(isStrictDecimal('-0.0123')).toBeFalsy();

    expect(isStrictDecimal('0.0123', { decimalsMax: 4 })).toBeTruthy();

    expect(isStrictDecimal('-0.01', { minus: true })).toBeTruthy();

    expect(isStrictDecimal('0.01', { minus: true })).toBeTruthy();

    expect(isStrictDecimal('12.21')).toBeTruthy();
  });
});
