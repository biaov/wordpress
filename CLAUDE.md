# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

一个基于 VitePress + TypeScript + Markdown 构建的个人技术博客/文档站（部署于 https://wordpress.biaov.cn/ ）。纯静态站点，无后端、无测试。当前使用 VitePress 2.0（alpha，`^2.0.0-alpha.20`）。Node 版本要求 `>= 20.19`（VitePress 2.0 依赖 Vite 8），项目为 ESM（`"type": "module"`）。

## 常用命令

```sh
npm run dev              # 启动开发服务器（vitepress dev docs）
npm start                # 同 npm run dev
npm run build            # 构建静态站点到 dist/（vitepress build docs）
npm run preview          # 本地预览构建产物
npm run prettier         # 格式化 *.js/*.less/*.md/*.json（注意：不含 .ts）
npm run sync-mineh5ui    # 从外部 mine-h5-ui 仓库同步组件文档（见下）
npm run tag              # 打 git tag v{version} 并推送到远程（触发 Release）
```

## 架构与关键机制

### 内容分三块，分别由不同方式维护

- `docs/index.md` — 首页（VitePress home layout），手写。
- `docs/docs/*.md` — 博客文章（`01.md` ~ `45.md` + `index.md`），与作者 CSDN 博客同步，手写。文件名序号即 URL 路径（`01.md` → `/docs/01`）。
- `docs/mine-h5-ui/*.md` — mine-h5-ui 组件库文档，**自动生成，不要手改**（见下）。

### 侧边栏是运行时从文件系统生成的（不是静态配置）

侧边栏配置入口在 `docs/.vitepress/sidebar/index.ts`，分两条路由：

- `/docs/` → `sidebar/docs.ts`：`readdirSync` 读取 `docs/docs/` 下的所有 `.md`，通过 `docs/utils.ts` 里的 `getTitle()` 读取每个文件的首个 `# ` 标题作为侧边栏条目（`# 标题` 中反引号包裹的文字会被剔除）。条目顺序由文件名序号决定。
- `/mine-h5-ui/` → `sidebar/mineh5ui.ts`：读取 `sidebar/mineh5ui.json`（由 sync 脚本生成），递归拼接 `docs/mine-h5-ui/{name}.md` 的路径与标题。

因此：新增博客文章只需在 `docs/docs/` 下新建 `NN.md` 并写一个 `# 标题`，无需手改任何侧边栏配置。

### mine-h5-ui 文档通过 sync 脚本从外部仓库同步

`scripts/sync-mineh5ui.js` 做两件事：

1. **`cpConfig`**：读取外部仓库的 `config/routes.json`，通过 `titleToPath()`（标题转文件名：首字母小写、`Xxx API` → `api`/`composable` 等）生成 `docs/.vitepress/sidebar/mineh5ui.json`。
2. **`cpDocs`**：把外部仓库的 `docs/` 整个复制到 `docs/mine-h5-ui/`，并调用 `replacePath()` 把 `(/v2/doc/` 路径替换成 `(/mine-h5-ui/`、剥离 `::: CopyCode` 容器，再用 Prettier 格式化。

外部仓库路径由环境变量 `VITE_MINEH5UI_DIR` 指定（`.env` 为模板，`.env.local` 存本机实际路径，已通过 `*.local` 被 gitignore）。**`docs/mine-h5-ui/` 和 `sidebar/mineh5ui.json` 是生成产物，改动会被下一次 sync 覆盖。**

### Prettier 配置来源特殊

`scripts/prettier.js` 的 `format()` 不从 `.prettierrc` 读取，而是硬编码读取 VS Code 用户设置 `C:/Users/Administrator/AppData/Roaming/Code/User/settings.json` 中 `prettier.*` 开头的项。`.prettierrc`（semi=false、singleQuote、printWidth=120 等）仅对 `npm run prettier` 生效。sync 脚本内部的格式化走的是 `prettier.js`。

### 搜索、主题与构建细节

- 搜索用 Algolia DocSearch（v4），配置在 `docs/.vitepress/search.ts`。
- 主题默认继承 VitePress 默认主题，仅 `theme/index.ts` 引入 `virtual:group-icons.css` 与 `custom.css` 微调样式（滚动条、首页 hero 渐变等）。
- Markdown 使用 `vitepress-plugin-group-icons`（`config.ts` 的 `groupIconMdPlugin` + `groupIconVitePlugin`）为 `:::` code-group 提供图标。
- 构建输出目录被覆盖为仓库根下的 `dist/`（`config.ts` 的 `outDir`）。

### 发布流程

`.github/workflows/release.yml` 在推送 `v*` 标签时触发，用 `log.md` 作为 Release 正文发布 GitHub Release。`npm run tag` 会基于 `package.json` 的 `version` 打并推送 `v{version}` 标签。更新发布前应先更新 `log.md`（变更日志）。
