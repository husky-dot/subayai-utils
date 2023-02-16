# Regex

## isEmail (邮箱校验)

是否是邮箱

- type

```ts
type isEmail = (email: string, isHaveChinese?: boolean) => boolean;
```

- 参数说明

1. `email` 需要校验邮箱地址
2. `isHaveChinese` 是否含有有中文名称, 默认`false`

- 示例

```js
import { isEmail } from '@tqu/tool';

isEmail('zhangsan-123@yang.com'); // true

isEmail('zhangsan_123@yang.com'); // true

isEmail('zhangsang_455hgfjgj@163.com'); // true

isEmail('zhangsang_455hgfjgj@qq.com'); // true

isEmail('zhangsan小智@qq.com', true); // true
```

## isTelNumber (手机号校验)

是否是手机号

```typescript
/**
 * @func isTelNumber
 * @param { string } str 需要判断的数据
 * @return { boolean } 是否是手机号
 */
import { isTelNumber } from '@tqu/tool';

if (isTelNumber(str)) {
  // doSomething;
}
```

## isUrl （URL 检验）

校验是否是 URL

```typescript
/**
 * @func isUrl
 * @param { string } value 需要判断的数据
 * @return { boolean } 校验是否是URL
 */
import { isUrl } from '@tqu/tool';

isUrl('https://www.baidu.com/'); // true
isUrl('http://www.baidu.com/'); // false
isUrl('aaa'); // true
```

## isDomainUrl (域名校验)

一级或二级域名校验，`www.baidu.com`、 `test.baidu.com`, 不能以 http[s]开头

```typescript
/**
 * @func isDomainUrl
 * @param { string } str 需要校验的域名地址
 * @return { boolean }
 */
import { isDomainUrl } from '@tqu/tool';

domainUrlReg('www.baidu.com'); // true
domainUrlReg('a.com.cn'); // true
```

## isLoosePwd (弱密码校验)

密码规则:密码长度为 m ~ n 个字符，只能包含数字、大写字母、小写字母和下划线组成(有其一即可)

- Type

```ts
type isLoosePwd = (str: string, len?: [number, number]) => boolean;
```

- 参数说明

1. `str`需要校验的密码
2. `len` `[ min, max ]` 密码长度范围, 默认 `6-15`

- 示例

```typescript
/**
 * @func isLoosePwd
 * @param { string } str 需要校验的域名地址
 * @return { boolean }
 */
import { isLoosePwd } from '@tqu/tool';

isLoosePwd('123456'); // true

isLoosePwd('7ggHJJH_FHF_'); // true

isLoosePwd('12aaAB', [6, 6]); // true
```

## isSimplePwd (简单密码校验)

密码规则:密码规则:密码长度为 m ~ n 个字符，必须包含数字和字母（大小写均可），允许除空格外的特殊符号(可选)

- Type

```ts
type isSimplePwd = (str: string, len?: [number, number]) => boolean;
```

- 参数说明

1. `str`需要校验的密码
2. `len` `[ min, max ]` 密码长度范围, 默认 `6-15`

- 示例

```js
import { isSimplePwd } from '@tqu/tool';

isSimplePwd('123456'); // false

isSimplePwd('12345!@'); // false

isSimplePwd('123xzfhgf'); // true

isSimplePwd('7ggHJJH_FHF_'); // true

isSimplePwd('7ggHJJH_FHF@~####'); // true
```

## isStrictPwd (强密码校验)

密码规则:密码规则:密码长度为 8 ~ 20 个字符，由数字、大写字母、小写字母和特殊字符组成, 默认`8-20`位字符

> 特殊符号： !@#$&\*( 、) \_、-+=、[、]:;?,.

- Type

```ts
type isStrictPwd = (str: string, len?: [number, number]) => boolean;
```

- 参数说明

1. `str`需要校验的密码
2. `len` `[ min, max ]` 密码长度范围, 默认 `8-20`

- 示例

```js
import { isStrictPwd } from '@tqu/tool';

isStrictPwd('190808098456'); // false

isStrictPwd('123jhjhx'); // false

isStrictPwd('123vhvhx!@'); // true

isStrictPwd('123x!Z@12'); // true
```

## isHexColor (十六进制颜色校验)

十六进制颜色正则校验, `#000`, `#666`, `#fff`, `#FFF`

- Type

```ts
type isHexColor = (str: string) => boolean;
```

- 参数说明

1. `str`需要校验的颜色值

- 事例

```typescript
import { hexColorReg } from '@tqu/tool';

hexColorReg('#fff'); // true

hexColorReg('#fffff'); // true

hexColorReg('#123fff'); // true

hexColorReg('#FFFbb1'); // true
```


## isCard (身份证号校验)

是否为身份证号: 支持（1/2）代，15 位或 18 位

```typescript
/**
 * @func isCard
 * @desc 是否为身份证号: 支持（1/2）代，15位或18位
 * @param { string } str 需要判断的数据
 * @param { number } type 1: 15位；2: 18位；默认0：同事匹配15位和18位
 * @return { boolean } 是否为身份证号
 */
import { isCard } from '@tqu/tool';

if (isCard(str, 1)) {
  // 一代身份证
} else if (isCard(str, 2)) {
  // 二代身份证
} else {
  // 一代或二代身份证
}
```

## isPostCode （大陆邮政编码校验）

校验是否是大陆邮政编码

```typescript
/**
 * @func isPostCode
 * @param { string } value 需要判断的数据(字符串数字)
 * @return { boolean } 是否是大陆邮政编码
 */
import { isPostCode } from '@tqu/tool'

if (if (isPostCode(str)) {
  // doSomething
})
```
