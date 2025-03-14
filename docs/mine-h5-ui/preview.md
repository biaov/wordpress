# Preview 图片预览

---

## 按需引入

```ts
import { createApp } from 'vue'
import App from './App.vue'
import { MePreview } from 'mine-h5-ui'
import 'mine-h5-ui/styles/MePreview.css'

createApp(App).use(MePreview).mount('#app')
```

## 提示

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过 API 直接调用即可。
- 通过属性 `url` 来设置需要预览的图片。

```vue
<script lang="ts" setup>
import { MePreview } from 'mine-h5-ui'

MePreview('https://dummyimage.com/300x300')
</script>
```

### 自定义样式

- 通过 API 直接调用即可。
- 通过属性 `background` 来设置预览的遮罩层背景色，默认为 #000。

```vue
<script lang="ts" setup>
import { MePreview } from 'mine-h5-ui'

MePreview({
  url: 'https://dummyimage.com/300x300',
  background: '#fff'
})
</script>
```

## API

### 参数

| 参数 | 说明     | 类型            | 可选值 | 默认值 | 版本   |
| ---- | -------- | --------------- | ------ | ------ | ------ |
| url  | 图片地址 | string / Option | --     | --     | v2.0.0 |

#### Option

| 参数       | 说明         | 类型   | 可选值 | 默认值 | 版本   |
| ---------- | ------------ | ------ | ------ | ------ | ------ |
| url        | 图片地址     | string | --     | --     | v2.0.0 |
| z-index    | 层级位置     | number | --     | 99     | v2.0.0 |
| background | 遮罩层背景色 | string | --     | #000   | v2.0.0 |

### 方法

| 方法名 | 说明 | 回调参数 | 版本 |
| ------ | ---- | -------- | ---- |
| --     | --   | --       | --   |
