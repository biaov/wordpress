<template><div><h1 id="搭建-vite-vue3-typescript-electron-项目" tabindex="-1"><a class="header-anchor" href="#搭建-vite-vue3-typescript-electron-项目" aria-hidden="true">#</a> 搭建 Vite + Vue3 + TypeScript + Electron 项目</h1>
<ul>
<li>源码参考：<a href="https://github.com/biaov/mine-desktop" target="_blank" rel="noopener noreferrer">mine-desktop<ExternalLinkIcon/></a>，如果以下有些许细节没有表达出来，可以参考此源码。</li>
</ul>
<h2 id="方法一、创建一个-vite-项目" tabindex="-1"><a class="header-anchor" href="#方法一、创建一个-vite-项目" aria-hidden="true">#</a> 方法一、创建一个 Vite 项目</h2>
<div class="language-Basic line-numbers-mode" data-ext="Basic"><pre v-pre class="language-Basic"><code>npm init vite@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="方法二、从零开始" tabindex="-1"><a class="header-anchor" href="#方法二、从零开始" aria-hidden="true">#</a> 方法二、从零开始</h2>
<h3 id="初始化-package-json" tabindex="-1"><a class="header-anchor" href="#初始化-package-json" aria-hidden="true">#</a> 初始化 package.json</h3>
<div class="language-JSON line-numbers-mode" data-ext="JSON"><pre v-pre class="language-JSON"><code>npm init -y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="安装依赖" tabindex="-1"><a class="header-anchor" href="#安装依赖" aria-hidden="true">#</a> 安装依赖</h3>
<h4 id="安装-vue-依赖" tabindex="-1"><a class="header-anchor" href="#安装-vue-依赖" aria-hidden="true">#</a> 安装 vue 依赖</h4>
<div class="language-Basic line-numbers-mode" data-ext="Basic"><pre v-pre class="language-Basic"><code>npm i vue vue-router
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>安装构建工具</li>
<li>这里使用 Less 作为 css 预编译器</li>
</ul>
<div class="language-Basic line-numbers-mode" data-ext="Basic"><pre v-pre class="language-Basic"><code>npm i -D @vitejs/plugin-vue vite less
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="安装-ts-依赖" tabindex="-1"><a class="header-anchor" href="#安装-ts-依赖" aria-hidden="true">#</a> 安装 TS 依赖</h4>
<div class="language-Basic line-numbers-mode" data-ext="Basic"><pre v-pre class="language-Basic"><code>npm i -D typescript vue-tsc @types/node
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="安装-electron-依赖" tabindex="-1"><a class="header-anchor" href="#安装-electron-依赖" aria-hidden="true">#</a> 安装 Electron 依赖</h4>
<ul>
<li>这里使用 <code v-pre>electron-builder</code> 作为打包工具</li>
</ul>
<div class="language-Basic line-numbers-mode" data-ext="Basic"><pre v-pre class="language-Basic"><code>npm i -D electron electron-builder
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="安装-eslint-可选" tabindex="-1"><a class="header-anchor" href="#安装-eslint-可选" aria-hidden="true">#</a> 安装 Eslint (可选)</h4>
<div class="language-Basic line-numbers-mode" data-ext="Basic"><pre v-pre class="language-Basic"><code>npm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser @vitejs/plugin-vue eslint eslint-config-airbnb-base eslint-config-prettier eslint-plugin-import eslint-plugin-prettier eslint-plugin-vue prettier
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="初始化文件" tabindex="-1"><a class="header-anchor" href="#初始化文件" aria-hidden="true">#</a> 初始化文件</h3>
<details>
<summary>👀 vite.config.ts</summary>
<div class="language-TypeScript line-numbers-mode" data-ext="TypeScript"><pre v-pre class="language-TypeScript"><code>import { defineConfig, UserConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

export const config: UserConfig = {
  base: './',
  plugins: [vue()],
  resolve: {
    // 路径别名
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  css: {
    // 配置预编译器
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: `@import '@/styles/variables.less';`
      }
    }
  },
  build: {
    outDir: './dist/resources/vue',
    sourcemap: false
  }
}

export default defineConfig(config)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<details>
<summary>👀 tsconfig.json</summary>
<div class="language-JSON line-numbers-mode" data-ext="JSON"><pre v-pre class="language-JSON"><code>{
  &quot;compilerOptions&quot;: {
    &quot;incremental&quot;: false,
    &quot;composite&quot;: false,
    &quot;target&quot;: &quot;esnext&quot;,
    &quot;useDefineForClassFields&quot;: true,
    &quot;module&quot;: &quot;esnext&quot;,
    &quot;moduleResolution&quot;: &quot;node&quot;,
    &quot;strict&quot;: true,
    &quot;jsx&quot;: &quot;preserve&quot;,
    &quot;sourceMap&quot;: true,
    &quot;resolveJsonModule&quot;: true,
    &quot;isolatedModules&quot;: true,
    &quot;esModuleInterop&quot;: true,
    &quot;lib&quot;: [&quot;esnext&quot;, &quot;dom&quot;],
    &quot;types&quot;: [&quot;vite/client&quot;, &quot;node&quot;],
    &quot;skipLibCheck&quot;: true,
    &quot;baseUrl&quot;: &quot;./&quot;,
    &quot;paths&quot;: {
      &quot;@/*&quot;: [&quot;./src/*&quot;]
    }
  },
  &quot;include&quot;: [&quot;src/**/*.ts&quot;, &quot;src/**/*.d.ts&quot;, &quot;src/**/*.tsx&quot;, &quot;src/**/*.vue&quot;, &quot;vite.config.ts&quot;, &quot;app/**/*.ts&quot;]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<details>
<summary>👀 根目录</summary>
<div class="language-Markdown line-numbers-mode" data-ext="Markdown"><pre v-pre class="language-Markdown"><code>|-- electron-demo --------------------- 项目名称
    |-- index.html -------------------- HTML 页面
    |-- tsconfig.json ----------------- TS 配置
    |-- vite.config.ts ---------------- Vite 配置
    |-- app --------------------------- Electron 主目录
    |   |-- vite.config.ts ------------ 关于 Electron 的 Vite 基础配置
    |   |-- assets -------------------- 资源目录
    |   |   |-- 256x256.ico ----------- 应用图标
    |   |   |-- 256x256.png ----------- 应用图标
    |   |-- main ---------------------- 主程序根目录
    |   |   |-- vite.config.ts -------- 主程序的 Vite 配置
    |   |   |-- src ------------------- 主程序目录
    |   |       |-- main.ts ----------- 主程序入口
    |   |-- preload ------------------- Electron 预加载目录
    |       |-- vite.config.ts -------- 预加载的 Vite 配置
    |       |-- src ------------------- 预加载程序目录
    |           |-- bridge.ts --------- bridge 模块
    |           |-- index.ts ---------- 预加载程序入口
    |-- public ------------------------ 静态资源
    |   |-- favicon.ico --------------- favicon
    |-- src --------------------------- vue 项目
        |-- App.vue ------------------- 页面入口
        |-- env.d.ts ------------------ TS 模板声明
        |-- main.ts ------------------- 入口
        |-- assets -------------------- 资源目录
        |-- components ---------------- 公共组件
        |-- router -------------------- 路由
        |-- styles -------------------- 样式
        |-- views --------------------- 页面
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<details>
<summary>👀 main.ts</summary>
<div class="language-TypeScript line-numbers-mode" data-ext="TypeScript"><pre v-pre class="language-TypeScript"><code>import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import router from './router'
import App from './App.vue'

const app = createApp(App)

app.use(router)
app.mount('#app')
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2>
<h3 id="vue-项目" tabindex="-1"><a class="header-anchor" href="#vue-项目" aria-hidden="true">#</a> Vue 项目</h3>
<ul>
<li>保持原有目录不变，在此基础上加入 <code v-pre>Electron</code> 配置。</li>
<li>此软件的界面都使用 Vue 页面，和 Electron 没有任何关系，Electron 只做代码交互。</li>
</ul>
<h3 id="electron-项目" tabindex="-1"><a class="header-anchor" href="#electron-项目" aria-hidden="true">#</a> Electron 项目</h3>
<ul>
<li>支持 TS：主要通过 vite 来打包 Electron 程序为 lib，从而达到实现开发为 TS 的目的。</li>
</ul>
<h3 id="vue-和-electron-通信" tabindex="-1"><a class="header-anchor" href="#vue-和-electron-通信" aria-hidden="true">#</a> Vue 和 Electron 通信</h3>
<h4 id="electron-定义" tabindex="-1"><a class="header-anchor" href="#electron-定义" aria-hidden="true">#</a> Electron 定义</h4>
<details>
<summary>👀 app/main/src/main.ts</summary>
<div class="language-TypeScript line-numbers-mode" data-ext="TypeScript"><pre v-pre class="language-TypeScript"><code>import { app, BrowserWindow, BrowserWindowConstructorOptions, ipcMain } from 'electron'
import { resolve } from 'path'

// 初始化程序

/**
 * 创建窗口
 */
const createWindow = () =&gt; {
  const browserWindowOption: BrowserWindowConstructorOptions = {
    titleBarStyle: 'hidden',
    width: 1000,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      enableWebSQL: false,
      preload: resolve(__dirname, '../preload/index.cjs') // 预加载程序，此为 `preload/src/index.ts` 使用 Vite 打包之后的 lib 文件
    }
  }
  const window = new BrowserWindow(browserWindowOption)

  window.setMenuBarVisibility(false)

  let pageUrl: string // 页面路径
  // 开发
  if (import.meta.env.MODE === 'development') {
    pageUrl = 'http://localhost:3400'
    window.webContents.openDevTools()
  } else {
    pageUrl = new URL('../../resources/vue/index.html', `file://${__dirname}`).toString() // 打包
  }
  window.loadURL(pageUrl)
  // 定义通信事件, quit 为自定义名称
  ipcMain.handle('quit', () =&gt; {
    app.quit()
  })
}

app.whenReady().then(() =&gt; {
  createWindow()
  app.on('activate', function () {
    !BrowserWindow.getAllWindows().length &amp;&amp; createWindow()
  })
})

app.on('window-all-closed', () =&gt; {
  process.platform !== 'darwin' &amp;&amp; app.quit()
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<ul>
<li>定义通信事件</li>
</ul>
<div class="language-TypeScript line-numbers-mode" data-ext="TypeScript"><pre v-pre class="language-TypeScript"><code>// 定义通信事件, quit 为自定义名称，注意在 Vue 里使用的时候保持一致
ipcMain.handle('quit', () =&gt; {
  app.quit()
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details>
<summary>👀 app/preload/src/bridge.ts</summary>
<div class="language-TypeScript line-numbers-mode" data-ext="TypeScript"><pre v-pre class="language-TypeScript"><code>import { contextBridge, ipcRenderer } from 'electron'
// electron 是为 Vue 注入全局变量 electron, ipcRenderer 为注入的模块
contextBridge.exposeInMainWorld('electron', {
  ipcRenderer
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h4 id="vue-使用" tabindex="-1"><a class="header-anchor" href="#vue-使用" aria-hidden="true">#</a> Vue 使用</h4>
<div class="language-Vue line-numbers-mode" data-ext="Vue"><pre v-pre class="language-Vue"><code>&lt;template&gt;
  &lt;div @click=&quot;onQuit&quot;&gt;关闭软件&lt;/div&gt;
&lt;/template&gt;
&lt;script lang=&quot;ts&quot; setup&gt;
const onQuit = () =&gt; {
  // electron 属性为 Electron 注入的全局变量
  // quit 为 Electron 定义的名称
  globalThis.electron.ipcRenderer.invoke('quit')
}
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="electron-打包配置" tabindex="-1"><a class="header-anchor" href="#electron-打包配置" aria-hidden="true">#</a> Electron 打包配置</h3>
<details>
<summary>👀 electron-builder.json 或 package.json 的 build</summary>
<div class="language-JSON line-numbers-mode" data-ext="JSON"><pre v-pre class="language-JSON"><code>{
  &quot;appId&quot;: &quot;mine.desktop.app&quot;,
  &quot;electronVersion&quot;: &quot;19.0.4&quot;,
  &quot;copyright&quot;: &quot;Copyright (c) 2022-present biaov&quot;,
  &quot;asar&quot;: true,
  &quot;directories&quot;: {
    &quot;output&quot;: &quot;./dist/package&quot;
  },
  &quot;win&quot;: {
    &quot;icon&quot;: &quot;./app/assets/256x256.ico&quot;,
    &quot;requestedExecutionLevel&quot;: &quot;highestAvailable&quot;,
    &quot;target&quot;: [
      {
        &quot;target&quot;: &quot;nsis&quot;,
        &quot;arch&quot;: [&quot;x64&quot;]
      }
    ]
  },
  &quot;nsis&quot;: {
    &quot;allowElevation&quot;: true,
    &quot;allowToChangeInstallationDirectory&quot;: true,
    &quot;artifactName&quot;: &quot;mine-desktop.${ext}&quot;,
    &quot;createDesktopShortcut&quot;: true,
    &quot;createStartMenuShortcut&quot;: true,
    &quot;installerIcon&quot;: &quot;./app/assets/256x256.ico&quot;,
    &quot;uninstallerIcon&quot;: &quot;./app/assets/256x256.ico&quot;,
    &quot;installerHeaderIcon&quot;: &quot;./app/assets/256x256.ico&quot;,
    &quot;uninstallDisplayName&quot;: &quot;uninstall&quot;,
    &quot;oneClick&quot;: false,
    &quot;shortcutName&quot;: &quot;mine-desktop&quot;,
    &quot;useZip&quot;: true,
    &quot;deleteAppDataOnUninstall&quot;: false,
    &quot;displayLanguageSelector&quot;: false,
    &quot;perMachine&quot;: true
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-JSON line-numbers-mode" data-ext="JSON"><pre v-pre class="language-JSON"><code>{
  &quot;name&quot;: &quot;electron-demo&quot;,
  &quot;version&quot;: &quot;1.0.0&quot;,
  &quot;scripts&quot;: {},
  &quot;build&quot;: {
    &quot;appId&quot;: &quot;mine.desktop.app&quot;,
    ...同上
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<ul>
<li>总体上来说，如果你不用 Electron 自带的界面，那么除了交互，其它的和 Vue 项目没有区别。</li>
<li>源码参考：<a href="https://github.com/biaov/mine-desktop" target="_blank" rel="noopener noreferrer">mine-desktop<ExternalLinkIcon/></a>，如果以上有些许细节没有表达出来，可以参考此源码。</li>
</ul>
</div></template>


