# Wordpress

一个基于 `vuepress@2.x` 搭建的个人博客 👍

<h2 align="center">
    <a href="http://wordpress.biaov.cn/"><img src="https://img.shields.io/badge/npm-2.3.0-blue" /></a>
    <a href="https://github.com/biaov/wordpress/blob/main/LICENSE"><img src="https://img.shields.io/github/license/biaov/wordpress.svg" /></a>
</h2>

## 使用

### 安装

```sh
npm i
```

### 运行

```sh
npm start
```

### 打包

```sh
npm build
```

## 技术栈

- `Markdown` + `VuePress@2.x` + `TypeScript`

## 目录结构

```md
|-- wordpress -------------------- 项目名称
    |-- .gitignore --------------- git忽略文件
    |-- package-lock.json -------- 依赖地址信息
    |-- package.json ------------- npm 包信息
    |-- README.md ---------------- 项目文档
    |-- dist --------------------- 打包目录
    |-- docs --------------------- 项目主目录
        |-- README.md ------------ 首页
        |-- .vuepress ------------ vuepress 配置目录
        |   |-- config.ts -------- 配置文件
        |-- |-- public ----------- 资源目录
        |   |-- styles ----------- 样式文件
        |-- docs ----------------- 博客文章目录
        |-- |-- README.md -------- docs 的根目录
```

## 依赖解析

- `vuepress`: Vue 驱动的静态网站生成器
- `@vuepress/plugin-shiki`: 代码块的语法高亮显示
- `@vuepress/plugin-docsearch`: doc 搜索器

## 贡献者们

[![贡献者们](https://contrib.rocks/image?repo=biaov/wordpress)](https://github.com/biaov/wordpress/graphs/contributors)
