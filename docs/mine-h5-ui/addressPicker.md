# AddressPicker 地址选择器

---

## 按需引入

```ts
import { createApp } from 'vue'
import App from './App.vue'
import { MeAddressPicker } from 'mine-h5-ui'
import 'mine-h5-ui/styles/MeAddressPicker.css'

createApp(App).use(MeAddressPicker).mount('#app')
```

## 提示

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过 `v-model` 绑定点击确定按钮之后选中的地址，通过 `visible` 属性设置地址选择器的显示和隐藏。

```html
<me-address-picker v-model="value" :visible="true" />
```

### 自定义分隔符

- 通过 `separator` 属性设置 value 的分隔符，默认值为 `-`。

```html
<me-address-picker v-model="value" :visible="true" />
```

## API

### 参数

| 参数                | 说明             | 类型    | 可选值       | 默认值 | 版本   |
| ------------------- | ---------------- | ------- | ------------ | ------ | ------ |
| modelValue(v-model) | 双向绑定选择的值 | string  | --           | --     | v2.0.0 |
| visible             | 显示状态         | boolean | true / false | false  | v2.0.0 |
| separator           | 分割符           | string  | --           | `-`    | v2.0.0 |

### 方法

| 方法名 | 说明                     | 回调参数      | 版本   |
| ------ | ------------------------ | ------------- | ------ |
| sure   | 点击确定按钮时触发的事件 | arr: string[] | v2.3.5 |
| cancel | 点击取消按钮时触发的事件 | --            | v2.3.5 |
