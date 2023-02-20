# LocalStorage

## setLocalStorage

设置 localStorage

```typescript
/**
 * @func localStorage
 * @param {string} key
 * @param {any} value
 * @returns {void}
 */
// 事例
import { setLocalStorage } from 'subayai-utils'

setLocalStorage('key', { a: 1, b: 2 });
```

## getLocalStorage

获取 localStorage

```typescript
/**
 * @func getLocalStorage
 * @param {string} key
 * @returns {any}
 */
// 事例
import { getLocalStorage } from 'subayai-utils'

getLocalStorage('key');
```

## delLocalStorage

删除 localStorage

```typescript
/**
 * @func localStorage
 * @param {string} key
 * @returns {void}
 */
// 事例
import { delLocalStorage } from 'subayai-utils'

delLocalStorage('key');
```

<br/>

# SessionStorage

## setSessionStorage

🧿 设置 sessionStorage

```typescript
/**
 * @func sessionStorage
 * @param {string} key
 * @param {any} value
 * @returns {any}
 */
// 事例
import { sessionStorage } from 'subayai-utils'

setSessionStorage('key', { a: 1, b: 2 });
```

## getSessionStorage

🧿 获取 sessionStorage

```typescript
/**
 * @func getSessionStorage
 * @param {string} key
 * @returns {any}
 */
// 事例
import { getSessionStorage } from 'subayai-utils'

getSessionStorage('key');
```

## delSessionStorage

🧿 删除 sessionStorage

```typescript
/**
 * @func delSessionStorage
 * @param {string} key
 * @returns {any}
 */
// 事例
import { delSessionStorage } from 'subayai-utils'

delSessionStorage('key');
```
