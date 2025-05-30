# Coupon 优惠券

---

## 按需引入

```js
import Vue from 'vue'
import { MeCoupon } from 'mine-h5-ui'

Vue.use(MeCoupon)
```

## 复制

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过属性 `width` 来设置组件的宽度，默认为 100%。
- 通过属性 `height` 来设置组件的高度，默认为 auto。

```html
<me-coupon width="80%" height="100px" />
```

### 带边框

- 通过属性 `border` 来设置组件的边框，值同 css 的 border 属性。

```html
<me-coupon width="80%" height="100px" border="1px dashed rgba(0,0,0,0.2)" />
```

### 镂空圆的大小

- 通过属性 `circle-size` 来设置镂空圆的大小，默认为 20px。

```html
<me-coupon width="80%" height="100px" circle-size="26px" />
```

### 镂空圆的横向位置

- 通过属性 `circle-x` 来设置组件的宽度，默认为 30%。

```html
<me-coupon width="80%" height="100px" circle-x="50%" />
```

### 渐变背景

- 通过属性 `background` 来设置渐变背景，默认为 #f5f5f5。

```html
<me-coupon width="80%" height="100px" background="linear-gradient(90deg, #FF8536, #FF435E)" />
```

### 外层渐变背景

- 通过属性 `circle-bg` 来设置镂空圆的渐变背景，达到和外部一样的颜色，默认为 #fff。
- 当设置此属性时，注意属性 `out-width` 的值要和外部宽度一致且只能水平渐变。

```html
<me-coupon width="80%" height="100px" out-width="345px" circleBg="linear-gradient(-45deg, #FF8536, #f56c6c)" />
```

## API

### 参数

| 参数        | 说明               | 类型   | 可选值 | 默认值  | 版本   |
| ----------- | ------------------ | ------ | ------ | ------- | ------ |
| width       | 宽度               | string | --     | 100%    | v2.3.6 |
| height      | 高度               | string | --     | auto    | v2.3.6 |
| border      | 边框               | string | --     | --      | v2.3.6 |
| radius      | 倒角               | string | --     | 4px     | v2.3.6 |
| background  | 背景色             | string | --     | #f5f5f5 | v2.3.6 |
| circle-size | 镂空圆的大小       | string | --     | 20px    | v2.3.6 |
| circle-x    | 镂空圆的横向位置   | string | --     | 30%     | v2.3.6 |
| circle-bg   | 镂空圆的颜色       | string | --     | #fff    | v2.3.6 |
| out-width   | 外层渐变背景的宽度 | string | --     | 100%    | v2.3.6 |

### 方法

| 方法名 | 说明 | 回调参数 | 版本 |
| ------ | ---- | -------- | ---- |
| --     | --   | --       | --   |
