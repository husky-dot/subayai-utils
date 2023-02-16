---
layout: doc
---

# 字符串正则

## isChinese (中文校验)

中文字符校验, 只能有中文，默认最少 1 个中文字符

- Type

```ts
type isChinese = (str: string, maxLen?: number) => boolean;
```

- 参数说明

1. `str`需要校验的字符串
2. `maxLen` 允许字符的最大位数，默认 `10`

- 示例

```js
import { isChinese } from '@tqu/tool';

isChinese('中文'); // true

isChinese('中文三', 3); // true
```

## isNumber (数字校验)

只能输入数字字符

- Type

```ts
type numberReg = (str: string, maxLen?: number) => boolean;
```

- 参数说明

1. `str`需要校验的字符串
2. `maxLen` 允许字符的最大位数，默认 `10`

- 示例

```js
import { isNumber } from '@tqu/tool';

isNumber('123'); // true

isNumber('12345', 5); // true
```

## isLetter (字母校验)

字母字符, 只要是字母即可，默认最少`1`个，可能用到英文名字校验

- Type

```ts
type isLetter = (str: string, maxLen?: number) => boolean;
```

- 参数说明

1. `str`需要校验的字符串
2. `maxLen` 允许字符的最大位数，默认 `10`

- 示例

```js
import { isLetter } from '@tqu/tool';

isLetter('zhangsan'); // true

isLetter('ADSDS'); // true

isLetter('ADSDSabs'); // true
```

## isUpperLetter (大写字母校验)


大写字母字符，只要是大写字母即可(只能有大写字母)，最少有`1`

- Type

```ts
type isUpperLetter = (str: string, maxLen?: number) => boolean;
```

- 参数说明

1. `str`需要校验的字符串
2. `maxLen` 允许字符的最大位数，默认 `10`

- 示例

```js
import { isUpperLetter } from '@tqu/tool';

isUpperLetter('zhangsan'); // false

isUpperLetter('ADSDSabs'); // false

isUpperLetter('ADSDS'); // true
```

## isLowerLetter (小写字母校验)


小写字母字符，只要是小写字母即可(只能有小写字母)

- Type

```ts
type isLowerLetter = (str: string, maxLen?: number) => boolean;
```

- 参数说明

1. `str`需要校验的字符串
2. `maxLen` 允许字符的最大位数，默认 `10`

- 示例

```js
import { isLowerLetter } from '@tqu/tool';

isLowerLetter('zhangsan'); // true

isLowerLetter('ADSDSabs'); // false

isLowerLetter('ADSDS'); // false
```

## isLetterNumber (字母+数字校验)


字母+数字字符, 只要是字母和数字即可(只能有大小写字母和数字)

- Type

```ts
type isLetterNumber = (str: string, maxLen?: number) => boolean;
```

- 参数说明

1. `str`需要校验的字符串
2. `maxLen` 允许字符的最大位数，默认 `10`

- 示例

```js
import { isLetterNumber } from '@tqu/tool';

isLetterNumber('zhangsan'); // true

isLetterNumber('123'); // true

isLetterNumber('ADSDSabs'); // ture

isLetterNumber('ADSDSabs123'); // true
```

## isLetterZhNumber (中文、字母、数字字符校验)


中文、英文、数字字符, 只要是中文、英文、数字即可

- Type

```ts
type isLetterZhNumber = (str: string, maxLen?: number) => boolean;
```

- 参数说明

1. `str`需要校验的字符串
2. `maxLen` 允许字符的最大位数，默认 `10`

- 示例

```js
import { letterZhNumberReg } from '@tqu/tool';

isLetterZhNumber('中文'); // true

isLetterZhNumber('ABC'); // true

isLetterZhNumber('ADSDSabs'); // ture

isLetterZhNumber('abc'); // ture

isLetterZhNumber('中文ABCaz123'); // true
```


## isSpecialStr (特殊字符校验)


特殊字符，包含空白字符 默认最少 1 个

- Type

```ts
type isSpecialStr = (str: string, scope?: string) => boolean;
```

- 参数说明

1. `str`需要校验的字符串
2. `scope` 可指定特殊字符，默认 `!@#$%^&*()_+-=[]{}|;':",./<>?`, 如果是正则表达式符合，就需要添加转义符号，如`\(\)`

- 示例

```js
import { isSpecialStr } from '@tqu/tool';

isSpecialStr('!@#$%^&*()_+-=[]{}|;:",./<>?'); // true

isSpecialStr('!@>', '!@>'); // true
```

## isBase64 (Base64 字符串校验)


校验是否是`base64`字符串

- Type

```ts
type isBase64 = (str: string) => boolean;
```

- 参数说明

1. `str`需要校验的字符串

- 示例

```js
import { isBase64 } from '@tqu/tool';

isBase64('dG9vbHR0LmNvbeWcqOe6v+W3peWFtw=='); // true
```

