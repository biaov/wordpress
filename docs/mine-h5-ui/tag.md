# Tag 标签

---

## 按需引入

```ts
import { createApp } from 'vue'
import App from './App.vue'
import { MeTag } from 'mine-h5-ui'
import 'mine-h5-ui/styles/MeTag.css'

createApp(App).use(MeTag).mount('#app')
```

## 提示

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过属性 `type` 来设置组件的主题类型，默认为 primary。

```html
<me-tag type="primary" />
```

### 空心设置

- 通过属性 `plain` 来设置组件的空心状态，默认为 false。

```html
<me-tag type="success" plain />
```

### 自定义样式

- 通过属性 `width` 来设置组件宽度，默认为 auto。
- 通过属性 `height` 来设置组件高度，默认为 24。
- 通过属性 `color` 来设置组件主题样式。
- 通过属性 `radius` 来设置组件倒角，默认为 4。

```html
<me-tag :width="100" :height="40" :radius="20" color="#6DA1F0" />
```

### 自定义内容

- 通过属性 `text` 来设置组件内容，默认为 `标签`。
- 通过属性 `text-color` 来设置组件内容的字体颜色。

```html
<me-tag text="注意" text-color="rgba(255,255,255,0.6)" />
```

### 关闭状态

- 通过属性 `closeable` 来设置组件的关闭状态，默认为 false。

```html
<me-tag type="danger" closeable />
```

## API

### 参数

| 参数       | 说明     | 类型    | 可选值                                      | 默认值  | 版本   |
| ---------- | -------- | ------- | ------------------------------------------- | ------- | ------ |
| type       | 类型     | string  | primary / success / info / warning / danger | primary | v2.0.0 |
| plain      | 空心     | boolean | true / false                                | false   | v2.0.0 |
| radius     | 倒角     | number  | --                                          | 4       | v2.0.0 |
| width      | 宽度     | number  | --                                          | --      | v2.0.0 |
| height     | 高度     | number  | --                                          | 24      | v2.0.0 |
| color      | 标签颜色 | string  | --                                          | --      | v2.0.0 |
| text       | 标签内容 | string  | --                                          | 标签    | v2.0.0 |
| text-color | 文本颜色 | string  | --                                          | --      | v2.0.0 |
| closeable  | 关闭状态 | boolean | true / false                                | false   | v2.0.0 |

### 方法

| 方法名 | 说明                     | 回调参数          | 版本   |
| ------ | ------------------------ | ----------------- | ------ |
| close  | 点击关闭状态时触发的事件 | event: MouseEvent | v2.3.5 |
