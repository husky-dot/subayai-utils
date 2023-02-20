# Number

## 千分位格式化

数字千分位格式化，支持大数及小数

- Type

```ts
type numberToThousands = (
  num: number | string,
  unit?: string,
  options?: { integerLength: number; decimalsLength: number }
) => string | null;
```

- 参数说明

1. `num` 需要格式化的数字
2. `unit` 数字单位
3. `options` 其他配置，`options.integerLength` 整数最大位数，`options.decimalsLength` 小数最大位数

```ts
import { numberToThousands } from 'subayai-utils';

const num = 123456789;

const num2 = 123456789.1234;

const result = numberToThousands(num);

const result2 = numberToThousands(num2);

console.log(result); // 123,456,789

console.log(result2); // 123,456,789.1234
```

## 千分位还原


`999,999,999 => 999999999`

- Type

```ts
type thousandsToString = (str: string, groupSeparator?: string) => string;
```

- 参数说明

1. `str` 需要还原的字符串
2. `groupSeparator` 千分位的分隔符

- 示例

```ts
import { thousandsToString } from 'subayai-utils';

const num = '123,456,789';

const num2 = '123,456,789.1234';

const result = thousandsToString(num);

const result2 = thousandsToString(num2);

console.log(result); // '123456789'

console.log(result2); // '123456789.1234'
```
