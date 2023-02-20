---
layout: doc
---

# 数字正则

## isLargeNumber (大数校验)

针对大数输入时的正则校验，整数大于`0`，小数点最高可达`8`位, `19.8n`精度

- Type

```ts
type isLargeNumber = (str: string) => boolean;
```

- 参数说明

1. `str`需要校验的字符串

- 示例

```js
import { isLargeNumber } from 'subayai-utils';

isLargeNumber('11.11'); // true

isLargeNumber('111.88888888'); // true

isLargeNumber('1999999999999999999.88888888'); // true
```

## isInteger (整数校验)

校验是否为整数，支持负数

- Type

```ts
type isInteger = (str: string, minus?: boolean) => boolean;
```

- 参数说明

1. `str`需要校验的字符串
2. `minus` 兼容校验负数， 默认 `false`

- 示例

```js
import { isInteger } from 'subayai-utils';

isInteger('01'); // false

isInteger('1'); // true

isInteger('10.00'); // false

isInteger('101'); // true

isInteger('-102', true); // true

isInteger('102', true); // true
```

## isLooseDecimal (小数校验->宽松)

校验小数格式，支持负数，只要是 xxx.xxx、-xxx.xxx 格式均可通过

- Type

```ts
type isLooseDecimal = (str: string, decimalsMax?: number) => boolean;
```

- 参数说明

1. `str`需要校验的字符串
2. `decimalsMax` 最大小数位，默认 `2`

- 示例

```js
import { isLooseDecimal } from 'subayai-utils';

isLooseDecimal('1.00'); // true

isLooseDecimal('01.00'); // false

isLooseDecimal('101.211', 3); // true
```

## isStrictDecimal (小数校验->严格)

校验小数格式，支持负数，`01.xxx` `00.xxx` 不可通过

- Type

```ts
type isStrictDecimal = (str: string, options?: { decimalsMax?: number; minus?: boolean }) => boolean;
```

- 参数说明

1. `str`需要校验的字符串
2. `options.decimalsMax` 最大小数位，默认 `2`
3. `options.minus` 是否兼容负数校验, 默认`false`

- 示例

```js
import { isStrictDecimal } from 'subayai-utils';

isStrictDecimal('01.00'); // false

isStrictDecimal('00.00'); // false

isStrictDecimal('100.00'); // true

isStrictDecimal('0.001', { decimalsMax: 3 }); // true

isStrictDecimal('-0.001', { decimalsMax: 3, minus: true }); // true

isStrictDecimal('10.001', { decimalsMax: 3, minus: true }); // true
```
