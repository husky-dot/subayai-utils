---
layout: doc
---
# 数组操作方法


## sliceArray (数组切割)


`sliceArray` 数组元素切割, `[ 1, 2, 3, 4, 5, 6 ]  => [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]`

- Type

```ts
 type sliceArray<T=any> = ( arr: T[], step: number ) => Array<T[]>
```

- 参数说明

1. `arr` 进行切割的数组
2. `step` 切割的步长

- 示例
```ts

import { sliceArray } from "subayai-utils";

const arr = [1,2,3,4,5,6,7 ];

const result = sliceArray<number> ( arr, 3 );

console.log ( result ); // [ [1, 2, 3], [ 4, 5, 6 ], [ 7 ] ]

```