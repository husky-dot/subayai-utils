---
layout: doc
---

# 辅助工具方法

## 判断是否为数字

- 示例

```ts
import { isNumber } from '@tqu@tqu/tool';

console.log(isNumber('777')); // false

console.log(isNumber(7)); // true
```

## 判断是否为字符串

- 示例

```ts
import { isString } from '@tqu@tqu/tool';

console.log(isString('777')); // true

console.log(isString(7)); // false
```

## 判断是否为布尔值

- 示例

```ts
import { isBoolean } from '@tqu@tqu/tool';

console.log(isBoolean(!'')); // true

console.log(isBoolean(3 > 5)); // true
```

## 判断是否为数组

- 示例

```ts
import { isArray } from '@tqu@tqu/tool';

console.log(isArray([])); // true

console.log(isArray({})); // false
```

## 判断是否为对象

- 示例

```ts
import { isObject } from '@tqu@tqu/tool';

console.log(isObject([])); // false

console.log(isObject({})); // true
```

## 判断是否为空数组

- 示例

```ts
import { isEmptyArray } from '@tqu@tqu/tool';

console.log(isEmptyArray([])); // true

console.log(isEmptyArray([1])); // false
```

## 判断是否为空对象

- 示例

```ts
import { isEmptyObject } from '@tqu@tqu/tool';

console.log('isEmptyObject', isEmptyObject({})); // true

console.log('isEmptyObject', isEmptyObject({ a: 1 })); // false
```

## 判断是否为 Null

- 示例

```ts
import { isNull } from '@tqu@tqu/tool';

isNull(null); // true
```

## 判断是否为 undefined

- 示例

```ts
import { isUndefined } from '@tqu@tqu/tool';

isUndefined(undefined); // true
```

## 判断是否为 Date

- 示例

```ts
import { isDate } from '@tqu@tqu/tool';

isDate('1998-01-02'); // false
isDate(new Date()); // true
isDate(new Date('1998-01-02')); // true
```

## 判断是否为 FormData

- 示例

```ts
import { isFormData } from '@tqu@tqu/tool';

isFormData(new FormData()); // true
```

## 判断是否为 File

- 示例

```ts
import { isFile } from '@tqu@tqu/tool';

isFile(new File([new Blob()], 'xxx.png')); // true
```

## 判断是否为 Blob

- 示例

```ts
import { isBlob } from '@tqu@tqu/tool';

isBlob(new Blob([])); // true
```

## 判断是否为 Promise

- 描述

判断是否是`Promise`

- 示例

```ts
import { isPromise } from '@tqu@tqu/tool';

const a = () => {
  console.log('test...');
};

function b() {
  return Promise.resolve({});
}

const c = new Promise(resolve => {});

isPromise(a); // false

isPromise(b()); // true

isPromise(c); // true

// ...
```

## 判断是否为 Async 函数

- 描述

判断是否为`async`函数`async function`

- 示例

```ts
import { isAsyncFunction } from '@tqu@tqu/tool';

console.log(isAsyncFunction(() => {})); // false

console.log(
  isAsyncFunction(() => {
    return new Promise(resolve => resolve({}));
  })
); // false

console.log(
  isAsyncFunction(async () => {
    return Promise.resolve({});
  })
); // true
// ...
```

## 判断是否为普通函数

- 描述

判断是否为普通函数

- 示例

```ts
import { isPlainFunction } from '@tqu@tqu/tool';

console.log(isPlainFunction(() => {})); // true

console.log(
  isPlainFunction(() => {
    return new Promise(resolve => resolve({}));
  })
); // true

console.log(
  isPlainFunction(async () => {
    return Promise.resolve({});
  })
); // false
// ...
```

## 获取任意数据类型

- 描述

获取任意数据类型

- Type

```ts
export type ValueTypeEnum =
  | 'string'
  | 'number'
  | 'boolean'
  | 'object'
  | 'array'
  | 'asyncFunction'
  | 'function'
  | 'date'
  | 'null'
  | 'promise'
  | 'unknown';

type getValueType = (data: any) => ValueTypeEnum | string;
```

- 示例

```ts
import { getValueType } from '@tqu@tqu/tool';

console.log(getValueType({})); // 'object'

console.log(getValueType(false)); // 'boolean'

console.log(getValueType(null)); // 'null'
// ...
```
