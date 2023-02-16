import dayjs from 'dayjs';
import { test, expect, describe } from 'vitest';
import { dateFormat, defaultTimeRange, getRemainTime, getTimeLeft, timeRangeToStamp } from '../index';

describe('date', () => {
  test('date format', () => {
    const val = dateFormat(1676250594000);
    expect(val).toEqual('2023-02-13 09:09:54');
    const valStr = dateFormat('1676250594000', 'YYYY-MM-DD');
    expect(valStr).toEqual('2023-02-13');
  });

  test('get remain time', () => {
    const val = getRemainTime(new Date().getTime() + 20000);

    expect(val).toEqual({
      formatStr: '0天 0小时 0分钟 20秒',
      d: 0,
      h: 0,
      m: 0,
      s: 20,
    });
  });
  test('get remain time with 0', () => {
    const val = getRemainTime(0);

    expect(val).toEqual({
      formatStr: '0天 0小时 0分钟 0秒',
      d: 0,
      h: 0,
      m: 0,
      s: 0,
    });
  });

  test('get time left', () => {
    const val = getTimeLeft(new Date().getTime(), new Date().getTime() + 10000);
    expect(val).toEqual({ d: 0, h: 0, m: 0, s: 10 });
  });
  test('get time left with null', () => {
    const val = getTimeLeft();
    expect(val).toBe(null);
  });
  test('test defaultTimeRange with default value', () => {
    const start = 6;
    const end = 0;
    const val = defaultTimeRange();
    const startTime = dayjs().subtract(start, 'day').startOf('day');
    const endTime = dayjs().subtract(end, 'day').endOf('day');
    expect(val).toEqual([startTime, endTime]);
  });
  test('test defaultTimeRange', () => {
    const start = 6;
    const end = 0;
    const val = defaultTimeRange(start, end);
    const startTime = dayjs().subtract(start, 'day').startOf('day');
    const endTime = dayjs().subtract(end, 'day').endOf('day');
    expect(val).toEqual([startTime, endTime]);
  });

  test('text timeRangeToStamp', () => {
    const { startTime, endTime } = timeRangeToStamp([dayjs(), dayjs().add(1, 'D')]);
    expect(startTime).toBe(dayjs().unix() * 1000);
    expect(endTime).toBe(dayjs().add(1, 'D').unix() * 1000);
  });

  test('text timeRangeToStamp with null', () => {
    const { startTime, endTime } = timeRangeToStamp();
    expect(startTime).toBe(undefined);
    expect(endTime).toBe(undefined);
  });
});
