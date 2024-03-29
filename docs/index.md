---
layout: home

hero:
  name: 个人博客
  text: 一个基于 vitepress 搭建的个人博客
  tagline: 让你在使用 vitepress 能够快速的搭建个人网站
  actions:
    - theme: brand
      text: 查看博客 →
      link: /docs/
    - theme: alt
      text: mine-h5-ui
      link: /mine-h5-ui/
    - theme: alt
      text: 源码地址 →
      link: https://github.com/biaov/wordpress

features:
  - icon: 📝
    title: 简介
    details: 一个很简单的 DMEO，相信以你的实力可以快速的看懂
  - icon: 📔
    title: 特性
    details: 提供一个具体的案例，让你在使用 vitepress 能够快速的搭建个人网站
---

## 本地查看项目

### 克隆项目

```sh
git clone https://github.com/biaov/wordpress.git --depth=1
```

### 安装依赖

::: code-group

```sh [npm]
# 安装依赖
npm i

# 启动项目
npm start

# 打包项目
npm run build
```

```sh [yarn]
# 安装依赖
yarn

# 启动项目
yarn start

# 打包项目
yarn build
```

```sh [pnpm]
# 安装依赖
pnpm i

# 启动项目
pnpm start

# 打包项目
pnpm build
```

:::

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}
.sidebar-item {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

::-webkit-scrollbar {
  width: 6px !important;
  height: 6px !important;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px !important;
  background: #3eaf7c !important;
}

:root {
  scroll-behavior: smooth;
}

</style>
