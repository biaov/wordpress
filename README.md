# Wordpress

一个基于 `vitepress` 搭建的个人博客 👍

<h2 align="center">
    <a href="http://wordpress.biaov.cn/"><img src="https://shields.io/github/v/release/biaov/wordpress.svg?logo=github&label=version" alt="version" /></a>
    <a href="https://github.com/biaov/wordpress/blob/main/LICENSE"><img src="https://img.shields.io/github/license/biaov/wordpress.svg" alt="LICENSE" /></a>
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

- `Markdown` + `VitePress` + `TypeScript`

## 目录结构

```MD
├── wordpress --------------------------------- 项目名称
│    ├── .git --------------------------------- git 配置文件
│    ├── dist --------------------------------- 打包目录
│    ├── docs --------------------------------- 项目主目录
│    │    ├── .vitepress ---------------------- vitepress 配置目录
│    │    │      ├── config.ts ---------------- 配置文件
│    │    │      ├── public ------------------- 资源目录
│    │    │      └── theme -------------------- 主题配置
│    │    ├── docs ---------------------------- 博客文章目录
│    │    ├── index.md ------------------------ 首页
│    │    ├── types.ts ------------------------ TS 类型定义文件
│    │    └── utils.ts ------------------------ 工具类文件
│    ├── node_modules ------------------------- 依赖文件目录
│    ├── .gitignore --------------------------- git 忽略文件
│    ├── .prettierignore ---------------------- prettier 忽略文件
│    ├── .prettierrc -------------------------- prettier 配置文件
│    ├── LICENSE ------------------------------ 协议文件
│    ├── package-lock.json -------------------- 依赖地址信息
│    ├── package.json ------------------------- npm 包信息
│    ├── README.md ---------------------------- 项目文档
└    └── tsconfig.json ------------------------ TS 配置文件
```

## 依赖解析

### devDependencies

- `@types/node`: node 类型
- `vitepress`: Vue 驱动的静态网站生成器

## 贡献者们

[![贡献者们](https://contrib.rocks/image?repo=biaov/wordpress)](https://github.com/biaov/wordpress/graphs/contributors)
