# 浏览器操作

## 获取 url 指定参数

获取指定浏览器参数

- Type

```ts
type getQueryParam = (param: string) => string | null;
```

- 示例

```ts
import { getQueryParam } from 'subayai-utils';

// ?foo=bar&baz=qux

getQueryParam('foo'); // bar
toggleFullScreen('baz'); // qux
```

## 全屏切换

浏览器全屏与退出

- Type

```ts
type toggleFullScreen = = () => void;
```

- 示例

```ts
import { toggleFullScreen } from 'subayai-utils';

toggleFullScreen(); // 全屏
toggleFullScreen(); // 退出全屏
```
