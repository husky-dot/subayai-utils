---
layout: doc
---

# 日期时间操作

## 获取一段时间

获取一段时间，默认过去 7 天

- Type

```ts
type defaultTimeRange = (start: number, end: number) => DayJs[];
```

- 参数说明

1. `start` 开始时间 默认 6
2. `end` 结束时间 默认 0

- 示例

```ts
import { defaultTimeRange } from 'subayai-utils';

defaultTimeRange(); //  [M, M]
```

## 时间数组转时间戳

时间数组转时间戳

- Type

```ts
export type TimeRangeToStampResult = {
  startTime: number | undefined;
  endTime: number | undefined;
};

type timeRangeToStamp = (dates: DayJs[]) => TimeRangeToStampResult;
```

- 参数说明

1. `dates` 数组，一般长度为 2，分别表示开始时间和结束时间

- 示例

```ts
import { timeRangeToStamp } from 'subayai-utils';

timeRangeToStamp([dayjs(), dayjs().add(1, 'D')]); 
//  { startTime: 1676423594000, endTime: 1676423594000}
```

## 时间戳格式化

格式化时间戳

- Type

```ts
type dateFormat = (timestamp: string | number, formatStr?: string) => null | string;
```

- 参数说明

1. `timestamp` 时间戳 unix
2. `formatStr` 自定义格式化格式， 默认`yyyy-MM-dd hh:mm:ss`

- 示例

```ts
import { dateFormat } from 'subayai-utils';

console.log('date format:', dateFormat('1676302014000')); // 2023-02-13 23:26:54
```

## 获取现在距未来的时间差

获取现在距离未来某个时间点的时间差

- Type

```ts
export interface FormatTimeValue {
  d: number;
  h: number;
  m: number;
  s: number;
}

export interface FormatRemainTimeResult extends FormatTimeValue {
  formatStr: string;
}

type getRemainTime = (endTime: string | Date) => FormatRemainTimeResult;
```

- 参数说明

1. `endTime` 未来时间点

- 示例

```ts
import { getRemainTime } from 'subayai-utils';

console.log(getRemainTime(new Date().getTime() + 10000));
//{d: 0, h: 0, m: 0, s: 10, formatStr: '0天 0小时 0分钟 10秒'}
```

## 获取开始时间和结束时间的时间差

获取开始时间与结束时间的时间差

- Type

```ts
export interface FormatTimeValue {
  d: number;
  h: number;
  m: number;
  s: number;
}

type getTimeLeft = (startTime, endTime) => FormatTimeValue | null;
```

- 参数说明

1. `startTime` 开始时间
2. `endTime` 结束时间

- 示例

```ts
import { getTimeLeft } from 'subayai-utils';

console.log(getTimeLeft(new Date().getTime(), new Date().getTime() + 20000)); // {d: 0, h: 0, m: 0, s: 20}
```

## 获取时间信息

- 描述

根据时间戳（秒）获取时间信息

- Type

```ts
export interface FormatTimeValue {
  d: number;
  h: number;
  m: number;
  s: number;
}

type getTimeValue = (timeValue: number) => FormatTimeValue;
```

- 参数说明

1. `timeValue` 时间戳

- 示例

```ts
import { getTimeValue } from 'subayai-utils';

console.log(getTimeValue(new Date().getTime() + 20000));
// {d: 0, h: 0, m: 0, s: 20}
```
