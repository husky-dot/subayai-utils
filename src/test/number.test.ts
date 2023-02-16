import { describe, expect, it } from 'vitest';
import { numberToThousands, thousandsToString } from '../index';

describe('number to thousands', () => {
  it('format base test', () => {
    const result = numberToThousands('100000');
    expect(result).toEqual('100,000');
  });
  it('test decimal', () => {
    const result = numberToThousands('100000.02');

    expect(result).toEqual('100,000.02');
  });
  it('test dotEnd', () => {
    const result = numberToThousands('1000000.');

    expect(result).toEqual('1,000,000.');
  });

  it('test not a number', () => {
    const result = numberToThousands('abc');
    expect(result).toEqual(null);
  });

  it('format unit test', () => {
    const result = numberToThousands('100000', 'usd');

    expect(result).toEqual('100,000 usd');
  });

  it('test big number', () => {
    const result = numberToThousands('10000000000000000000000000');

    expect(result).toEqual('100,000,000,000,000,000,000,000');
  });

  it('format options test', () => {
    const result = numberToThousands('10000.999', '', {
      integerLength: 4,
      decimalsLength: 2,
    });

    expect(result).toEqual('1,000.99');
  });
});

describe('thousands to string', () => {
  it('base format', function () {
    const result = thousandsToString('100,000');

    expect(result).toEqual('100000');
  });
});
