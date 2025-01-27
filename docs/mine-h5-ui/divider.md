# Divider 分割线

---

## 按需引入

```ts
import { createApp } from 'vue'
import App from './App.vue'
import { MeDivider } from 'mine-h5-ui'
import 'mine-h5-ui/styles/MeDivider.css'

createApp(App).use(MeDivider).mount('#app')
```

## 提示

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过属性 `list` 来设置组件的内容，如果不设置则为无文本分割线，默认为空数组。

```html
<me-divider :list="['缥缈']" />
```

### 设置文本位置

- 通过属性 `left` 或者 `right` 来设置组件的位置，默认居中。

```html
<me-divider :list="['青衣']" :left="20" />
```

### 自定义样式

- 通过属性 `line` 或者 `text` 分别来设置组件的线条样式、文本样式，默认值点击 [Line](#line) 和 [Text](#text) 查看。

```vue
<script lang="ts" setup>
/**
 * 分割线
 */
const divider = Object.freeze({
  list: ['流影'],
  line: {
    width: 4,
    color: '#F06B51',
    radius: 4
  },
  text: {
    color: '#FFA18F',
    size: 16
  }
})
</script>

<template>
  <me-divider v-bind="divider" />
</template>
```

### 多边形

- 通过属性 `width` 和 `height` 来设置组件的大小。
- 通过属性 `origin` 来设置组件的旋转元素 Y 轴的基点位置。

```vue
<script lang="ts" setup>
/**
 * 分割线
 */
const divider = Object.freeze({
  list: ['羽裳', '轩辕', '紫萱'],
  width: 100,
  height: 100,
  origin: 41,
  line: {
    width: 6,
    color: '#f60'
  },
  text: {
    color: '#f66'
  }
})
</script>
<template>
  <me-divider v-bind="divider" />
</template>
```

## API

### 参数

| 参数   | 说明                    | 类型            | 可选值 | 默认值        | 版本   |
| ------ | ----------------------- | --------------- | ------ | ------------- | ------ |
| list   | 线条数和文本            | `Array<string>` | --     | [ ]           | v2.0.0 |
| left   | 距离左边的距离          | number          | --     | --            | v2.0.0 |
| right  | 距离右边的距离          | number          | --     | --            | v2.0.0 |
| width  | 宽度                    | number          | --     | 100%          | v2.0.0 |
| height | 高度                    | number          | --     | 24            | v2.0.0 |
| origin | 旋转元素 Y 轴的基点位置 | number          | --     | center        | v2.0.0 |
| line   | 线条样式，[详情](#line) | Object          | --     | [详情](#line) | v2.0.0 |
| text   | 文本样式，[详情](#text) | Object          | --     | [详情](#text) | v2.0.0 |

#### Line

| 参数   | 说明     | 类型   | 可选值 | 默认值                  | 版本   |
| ------ | -------- | ------ | ------ | ----------------------- | ------ |
| radius | 线条倒角 | number | --     | list.length < 3 ? 0 : 6 | v2.0.0 |
| color  | 线条颜色 | string | --     | #dcdfe6                 | v2.0.0 |
| size   | 线条大小 | number | --     | list.length < 3 ? 1 : 6 | v2.0.0 |

#### Text

| 参数  | 说明     | 类型   | 可选值 | 默认值  | 版本   |
| ----- | -------- | ------ | ------ | ------- | ------ |
| color | 文本颜色 | string | --     | #494949 | v2.0.0 |
| size  | 文本大小 | number | --     | 14      | v2.0.0 |

### 方法

| 方法名 | 说明 | 回调参数 | 版本 |
| ------ | ---- | -------- | ---- |
| --     | --   | --       | --   |
