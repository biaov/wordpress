# Dialog 对话框

---

## 按需引入

```ts
import { createApp } from 'vue'
import App from './App.vue'
import { MeDialog } from 'mine-h5-ui'
import 'mine-h5-ui/styles/MeDialog.css'

createApp(App).use(MeDialog).mount('#app')
```

## 提示

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过 `v-model:visible` 来设置对话框的显示和隐藏。
- 通过属性 `tips` 来设置顶部的提示文本。

```vue
<script lang="ts" setup>
import { ref } from 'vue'
import { MeToast } from 'mine-h5-ui'

/**
 * 对话框显示状态
 */
const visible = ref(false)

/**
 * 点击文本
 */
const handleClick = () => {
  visible.value = true
}

/**
 * 点击取消按钮
 */
const onCancel = () => {
  visible.value = false
  MeToast('你点击了取消按钮')
}

/**
 * 点击确定按钮
 */
const onConfirm = () => {
  visible.value = false
  MeToast('你点击了确定按钮')
}
</script>

<template>
  <div @click="handleClick">点击弹出自义定弹出框</div>
  <me-dialog v-model:visible="visible" tips="提示">
    <div class="text">
      走在斑马线上的好处：
      <br />
      我就是一个行人，
      <br />
      赔的多一点！
    </div>
    <div class="btn">
      <button type="button" class="btn-cancel" @click="onCancel">取消</button>
      <button type="button" class="btn-confirm" @click="onConfirm">确定</button>
    </div>
  </me-dialog>
</template>

<style scoped lang="less">
.me-dialog {
  .text {
    padding: 0 10px 16px;
    text-align: center;
    color: #494949;
    font-size: 14px;
  }
}
</style>
```

## API

### 参数

| 参数                     | 说明                 | 类型    | 可选值 | 默认值 | 版本   |
| ------------------------ | -------------------- | ------- | ------ | ------ | ------ |
| visible(v-model:visible) | 双向绑定组件显示状态 | boolean | --     | --     | v2.0.0 |
| tips                     | 提示文本             | string  | --     | 提示   | v2.0.0 |

### Slots

| 具名插槽 | 说明     | scopedSlots | 版本   |
| -------- | -------- | ----------- | ------ |
| default  | 默认名称 | --          | v2.0.0 |
