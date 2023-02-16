# File

## blobToBase64

blob 对象 转 base64

- Type

```ts
export interface BlobToBase64Result {
  msg: string;
  base64Url: string | ArrayBuffer | null | undefined;
}

type blobToBase64 = (blob: Blob) => Promise<BlobToBase64Result>;
```

- 示例

```ts
import { blobToBase64 } from '@tqu/tool';

const blobToBase64test = async () => {
  const result = await blobToBase64(new File([new Blob()], 'xxx.png'));

  console.log(result);
};
```

## Base64 转 Blob

Base64 对象 转 Blob

- Type

```ts
export interface Base64ToBlobConfig {
  base64Str: string; // 需要转换的base64
  contentType: string; // 内容类型 jpg / png / pdf ...
  fileName: string; // 文件名称
  sliceSize?: number; // 切割数据大小， 默认 512
}

export interface Base64ToBlobResult {
  preview: string;
  name: string;
}

type base64ToBlob = (config: Base64ToBlobConfig) => Promise<Base64ToBlobResult>;
```

- 示例

```ts
import { base64ToBlob } from '@tqu/tool'

const result = await base64ToBlob({ base64Str: base64, fileName: '1', contentType: 'jpg' });

console.log(result);
```
