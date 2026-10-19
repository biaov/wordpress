# Wordpress

一个基于 `VitePress` 搭建的技术博客文档 👍

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
npm run build
```

### 预览

```sh
npm run preview
```

## 技术栈

- `Markdown` + `VitePress` + `TypeScript`

## 目录结构

```MD
├── .github -------------------------------- GitHub 工作流（release.yml）
├── scripts ------------------------------- 工具脚本
├── docs ---------------------------------- 项目主目录（VitePress 源目录）
│    ├── .vitepress ----------------------- vitepress 配置目录
│    │    ├── config.ts ------------------- 站点配置
│    │    ├── search.ts ------------------- Algolia 搜索配置
│    │    ├── sidebar --------------------- 侧边栏配置（运行时从文件系统生成）
│    │    ├── theme ----------------------- 主题配置
│    │    └── public ---------------------- 静态资源目录
│    ├── docs ----------------------------- 博客文章目录（01.md ~ NN.md）
│    ├── index.md ------------------------- 首页
│    ├── types.ts ------------------------- TS 类型定义
│    └── utils.ts ------------------------- 工具函数（读取文章标题）
├── dist ---------------------------------- 打包目录
├── node_modules -------------------------- 依赖目录
├── .env / .env.local --------------------- 环境变量
├── log.md -------------------------------- 发布变更日志（Release 正文）
├── package.json -------------------------- npm 包信息
├── tsconfig.json ------------------------- TS 配置文件
└── README.md ----------------------------- 项目文档
```

## 依赖解析

### devDependencies

- `@types/node`: Node 类型声明
- `prettier`: 代码格式化
- `strip-json-comments`: 解析带注释的 JSON
- `vitepress`: Vue 驱动的静态网站生成器
- `vitepress-plugin-group-icons`: 为 `:::` code-group 代码块标题添加图标

## 贡献者们

[![贡献者们](https://contrib.rocks/image?repo=biaov/wordpress)](https://github.com/biaov/wordpress/graphs/contributors)
