# Switch 开关

---

## 按需引入

```ts
import { createApp } from 'vue'
import App from './App.vue'
import { MeSwitch } from 'mine-h5-ui'
import 'mine-h5-ui/styles/MeSwitch.css'

createApp(App).use(MeSwitch).mount('#app')
```

## 提示

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过 `v-model` 绑定开关的选中状态，true 表示开，false 表示关。

```html
<me-switch v-model="switch" />
```

### 自定义大小

- 通过属性 `size` 来设置开关的大小，默认为 30px。

```html
<me-switch v-model="switch" size="24px" />
```

### 自定义颜色

- 通过属性 `inactive-color` 和 `active-color` 来设置开关的关闭颜色和打开颜色，默认关闭颜色为 #fff，打开颜色 #409eff。

```html
<me-switch v-model="switch" inactive-color="#f60" active-color="#e4393c" />
```

### 异步状态

- 通过属性 `async` 来设置开关的异步状态，默认为 false。

```html
<me-switch v-model="switch" :async="true" />
```

### 禁用状态

- 通过属性 `disabled` 来设置开关的禁用状态，默认为 false。

```html
<me-switch v-model="switch" :disabled="true" />
```

## API

### 参数

| 参数                | 说明             | 类型    | 可选值       | 默认值  | 版本   |
| ------------------- | ---------------- | ------- | ------------ | ------- | ------ |
| modelValue(v-model) | 双向绑定开关状态 | boolean | true / false | --      | v2.0.0 |
| size                | 开关大小         | string  | --           | 30px    | v2.0.0 |
| inactiveColor       | 开关关闭颜色     | string  | --           | #fff    | v2.0.0 |
| activeColor         | 开关打开颜色     | string  | --           | #409eff | v2.0.0 |
| async               | 异步状态         | boolean | true / false | false   | v2.0.0 |
| disabled            | 禁用状态         | boolean | true / false | false   | v2.0.0 |

### 方法

| 方法名 | 说明                 | 回调参数          | 版本   |
| ------ | -------------------- | ----------------- | ------ |
| click  | 点击开关时触发的事件 | event: MouseEvent | v2.3.5 |
