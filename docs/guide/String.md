# String


## firstUpperCase (首字母大写)

首字母大写

```typescript
/**
 * @func firstUpperCase
 * @param { string } str 需要处理的字符
 * @return { string } 处理后的字符
 */
import { firstUpperCase } from '@tqu/tool';

firstUpperCase('abc'); // Abc
```

## firstLowerCase (首字母小写)

首字母小写

```typescript
/**
 * @func firstLowerCase
 * @param { string } str 需要处理的字符
 * @return { string } 处理后的字符
 */
import { firstLowerCase } from '@tqu/tool';

firstLowerCase('ABC'); // aBC
```

## telEncrypt (手机号中间加密)

手机号中间加密

```typescript
/**
 * @func telEncrypt
 * @param { number } tel 需要处理的手机号
 * @return { string } 处理后的手机号
 */
import { telEncrypt } from '@tqu/tool';

telEncrypt(12345678912); // 123****8912
```

## getKebabCase (转换成短横线命名)

转换成短横线命名

```typescript
/**
 * @func getKebabCase
 * @param { string } str 需要处理的字符
 * @return { string } 处理后的字符
 */
import { getKebabCase } from '@tqu/tool';

getKebabCase('aBc'); // a-bc
```

## getCamelCase (转换成驼峰命名)

转换成驼峰命名

```typescript
/**
 * @func getCamelCase
 * @param { string } str 需要处理的字符
 * @return { string } 处理后的字符
 */
import { getCamelCase } from '@tqu/tool';

getCamelCase('a-bc'); // aBc
```

## getEscapeString (字符串的转义)

字符串的转义,将`&`, `<`, `>`, `"`, `'`分别转义为`&amp;`, `&lt;`, `&gt;`, `&quot;`, `&#x27;`

```typescript
/**
 * @func getEscapeString
 * @param { string } str 需要处理的字符
 * @return { string } 处理后的字符
 */
import { getEscapeString } from '@tqu/tool';

getEscapeString('>'); // &gt;
```

## getUnEscapeString (字符串的反转义)

字符串的反转义,将`&amp;`, `&lt;`, `&gt;`, `&quot;`, `&#x27;`替换为转义前的符号

```typescript
/**
 * @func getUnEscapeString
 * @param { string } str 需要处理的字符
 * @return { string } 处理后的字符
 */
import { getUnEscapeString } from '@tqu/tool';

getUnEscapeString('&amp;'); // &
```
