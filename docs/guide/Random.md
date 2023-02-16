# Random

## randomString (随机字符串)

随机生成字符串

- Type

```ts
type randomString = (len: number) => string;
```

- 参数说明

1. `len` 生成的字符串长度

- 示例

```ts
import { randomString } from '@tqu/tool';

randomString(20); // ax2fwsKwt3xhXXxHzkpE
```

## randomColor (随机生成颜色)

随机生成颜色

- Type

```ts
type  randomColor = () => string
```
- 示例

```typescript
import { randomColor } from '@tqu/tool';

randomColor(); // #d182b4
```

## randomInt (随机数)

生成指定范围[min, max]的随机数

- Type

```ts
type randomInt = (min, max) => number
```

- 参数

1. `min` 生成的最小值
2. `max` 生成的最大值

```typescript
import { randomInt } from '@tqu/tool';

randomInt(0, 10); // 6
```

## randomUUID (随机 UUID)


随机生成 16 位的`uuid`

- Type

```ts
type randomUUID = () => string;
```

- 示例

```ts
import { randomUUID } from 'quick-utils-js';

console.log('uuid', generateUUID()); // 'd1d023b0-5559-4f95-9ead-2446afca559f'
```
