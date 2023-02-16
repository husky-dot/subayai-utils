export interface BlobToBase64Result {
  msg: string;
  base64Url: string | ArrayBuffer | null | undefined;
}

export interface Base64ToBlobConfig {
  base64Str: string;
  contentType: string;
  fileName: string;
  sliceSize?: number;
}

export interface Base64ToBlobResult {
  preview: string;
  name: string;
}

/**
 * @func blobToBase64
 * @desc Blob 转 Base64
 * @param  {Bold}  blob file
 * @return {String}
 * @example Promise<blobToBase64Result>
 */
export function blobToBase64(blob: Blob): Promise<BlobToBase64Result> {
  return new Promise(resolve => {
    const fileReader = new FileReader();

    fileReader.onload = e => {
      resolve({ msg: 'success', base64Url: e.target?.result });
    };

    fileReader.readAsDataURL(blob);

    fileReader.onerror = () => {
      console.error('file error');
      resolve({ msg: 'file error', base64Url: null });
    };
  });
}

/**
 * base64 转 blob
 * @param { Base64ToBlobConfig } config
 * **/
export function base64ToBlob(config: Base64ToBlobConfig): Promise<Base64ToBlobResult> {
  const { base64Str, contentType, sliceSize = 512, fileName } = config;

  return new Promise(resolve => {
    const base64data = base64Str.split(',');

    if (base64data.length <= 1) {
      resolve({ preview: '', name: '' });
    }

    // 使用 atob() 方法将数据解码

    const byteCharacters = atob(base64data[1]);

    const byteArrays: any[] = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers: number[] = [];

      for (let i = 0; i < slice.length; i++) {
        byteNumbers.push(slice.charCodeAt(i));
      }

      // 8 位无符号整数值的类型化数组。内容将初始化为 0。
      // 如果无法分配请求数目的字节，则将引发异常。

      byteArrays.push(new Uint8Array(byteNumbers));
    }

    const resultBlob = new Blob(byteArrays, {
      type: contentType,
    });

    const result = Object.assign(resultBlob, {
      // 这里一定要处理一下 URL.createObjectURL

      preview: URL.createObjectURL(resultBlob),
      name: fileName,
    });

    resolve(result);
  });
}
/**
 * @desc获取文件后缀名
 * @param { string } filename
 * @return { string | undefined }
 * **/

export function getFileExtension(filename: string): string | undefined {
  const reg1 = /[.]/.exec(filename);

  const reg2 = /[^.]+$/.exec(filename);

  if (reg1 && reg2 && reg2.length) {
    return reg2[0].toLocaleLowerCase();
  }

  return undefined;
}
