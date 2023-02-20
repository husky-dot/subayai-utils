# 快速上手

## 安装

### 通过 npm 安装

```ts
# npm
npm install subayai-utils

# yarn
yarn add subayai-utils

# pnpm 🔥
pnpm add subayai-utils
```

### 通过 CDN 安装

使用 subayai-utils 最简单的方法是直接在 HTML 文件中引入 CDN 链接，之后你可以通过全局变量 `syTool` 访问到所有方法。

```ts
<script type="module" src="https://cdn.jsdelivr.net/gh/husky-dot/subayai-utils/dist/index.umd.js"></script>

<script>
  const { getCamelCase } = syTool;
  console.log(getCamelCase("a-bc"));
</script>
```

## 引入方式

### ES MODULE 方式

下面是使用 ES MODULE 方式引入 `randomString` 方法，用来生成随机字符串

```ts
import { randomString } from 'subayai-utils';

randomString(20); // ax2fwsKwt3xhXXxHzkpE
```

### CommonJs 方式

下面是使用 ommonJs 方式引入 `randomString` 方法，用来生成随机字符串

```ts
const { randomString } = require('subayai-utils')

randomString(20); // ax2fwsKwt3xhXXxHzkpE
```

或者 

```ts
const tquTool = require('subayai-utils')

tquTool.randomString(20); // ax2fwsKwt3xhXXxHzkpE
```