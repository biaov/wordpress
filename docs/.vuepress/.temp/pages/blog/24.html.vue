<template><div><h1 id="vite-typescript-node-开发一个初始化项目的脚手架" tabindex="-1"><a class="header-anchor" href="#vite-typescript-node-开发一个初始化项目的脚手架" aria-hidden="true">#</a> Vite + TypeScript + Node 开发一个初始化项目的脚手架</h1>
<h2 id="技术栈" tabindex="-1"><a class="header-anchor" href="#技术栈" aria-hidden="true">#</a> 技术栈</h2>
<ul>
<li><code v-pre>Vite</code> + <code v-pre>TypeScript</code> + <code v-pre>Node</code></li>
<li>一点点 <code v-pre>Vite</code> 知识，一点点 <code v-pre>JavaScript</code> 知识（不会 <code v-pre>TypeScript</code> 也没事），少许 <code v-pre>Node</code> 知识，这样你就可以开始开发一个 <code v-pre>Cli</code> 了</li>
</ul>
<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2>
<ul>
<li>利用 <code v-pre>Vite</code> 将 <code v-pre>TypeScript</code> 打包成 <code v-pre>JavaScript</code> 文件 从而使 <code v-pre>Node</code> 识别</li>
</ul>
<h2 id="开发" tabindex="-1"><a class="header-anchor" href="#开发" aria-hidden="true">#</a> 开发</h2>
<h3 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化" aria-hidden="true">#</a> 初始化</h3>
<ul>
<li>创建一个项目文件夹，并初始化 <code v-pre>package.json</code></li>
</ul>
<div class="language-Basic line-numbers-mode" data-ext="Basic"><pre v-pre class="language-Basic"><code># 创建文件夹
mkdir project-cli

# 进入文件夹根目录
cd project-cli

# 初始化 package.json
npm init -y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>安装依赖</li>
</ul>
<div class="language-Basic line-numbers-mode" data-ext="Basic"><pre v-pre class="language-Basic"><code># dependencies
npm i commander download-git-repo

# devDependencies
npm i @types/node typescript vite -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>依赖特性</p>
<ul>
<li><code v-pre>commander</code>: 命令</li>
<li><code v-pre>download-git-repo</code>: 下载模板工具</li>
<li><code v-pre>vite</code>: 项目构建工具</li>
<li><code v-pre>typescript</code>: 编程语言</li>
</ul>
</li>
<li>
<p>命令配置文件</p>
</li>
</ul>
<div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre v-pre class="language-JavaScript"><code>// package.json
{
  &quot;bin&quot;: {
    &quot;create-mine&quot;: &quot;bin/create-mine.js&quot;,
    &quot;me&quot;: &quot;bin/create-mine.js&quot;
  },
  &quot;scripts&quot;: {
    &quot;build&quot;: &quot;node scripts/build&quot;,
  }
}

// bin/create-mine.js
#!/usr/bin/env node
require('../index.js')

// scripts/build.js
const { resolve } = require('path')
const { build } = require('vite')

!(async () =&gt; {
  try {
    await build({
      configFile: resolve(__dirname, '../vite.config.ts')
    })
  } catch (e) {
    process.exit(1)
  }
})()

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>项目配置文件</li>
</ul>
<div class="language-TypeScript line-numbers-mode" data-ext="TypeScript"><pre v-pre class="language-TypeScript"><code>import { UserConfig } from 'vite'
import { resolve } from 'path'

const config: UserConfig = {
  root: __dirname,
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  build: {
    target: 'esnext',
    outDir: resolve(__dirname, './dist'),
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      formats: ['cjs']
    },
    rollupOptions: {
      external: ['path', 'child_process', 'fs', 'commander', 'download-git-repo'],
      output: {
        entryFileNames: '[name].js'
      }
    },
    ssr: false,
    ssrManifest: false,
    emptyOutDir: true
  }
}

export default config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="开发主程序" tabindex="-1"><a class="header-anchor" href="#开发主程序" aria-hidden="true">#</a> 开发主程序</h3>
<div class="language-TypeScript line-numbers-mode" data-ext="TypeScript"><pre v-pre class="language-TypeScript"><code>// index.ts
import { program } from 'commander'
import { version } from '@/../package.json'

program.version(version, '-v, --version', '输出版本号') // 重置指令
program.parse(process.argv) // 解析命令
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>下载模板</li>
</ul>
<div class="language-TypeScript line-numbers-mode" data-ext="TypeScript"><pre v-pre class="language-TypeScript"><code>// down.ts
import download from 'download-git-repo'

// `direct:模板地址#分支`
download(`direct:https://gitee.com/biaovorg/project-template.git#vue`, process.cwd(), { clone: true })
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="本地测试" tabindex="-1"><a class="header-anchor" href="#本地测试" aria-hidden="true">#</a> 本地测试</h2>
<div class="language-Basic line-numbers-mode" data-ext="Basic"><pre v-pre class="language-Basic"><code># 关联
npm link
# 测试
me -v
#或者
create-mine -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="发布" tabindex="-1"><a class="header-anchor" href="#发布" aria-hidden="true">#</a> 发布</h2>
<ul>
<li>如果你之前没有登录 <code v-pre>npm</code> 官网（确保你的源是 <code v-pre>npm</code> ,而不是 <code v-pre>taobao</code>），则需要登录</li>
<li>如果已登录，则直接发布即可</li>
</ul>
<div class="language-Basic line-numbers-mode" data-ext="Basic"><pre v-pre class="language-Basic"><code># 登录
npm login
# 发布
npm publish
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>去看下 <a href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer"><code v-pre>npm</code> 官网<ExternalLinkIcon/></a>上看发布是否成功：<a href="https://www.npmjs.com/package/create-mine" target="_blank" rel="noopener noreferrer">create-mine<ExternalLinkIcon/></a></li>
<li>网址查看：<code v-pre>https://www.npmjs.com/package/包名</code>，例如：<code v-pre>https://www.npmjs.com/package/create-mine</code></li>
</ul>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<ul>
<li>思路是不是很简单，如果有细节部分不明确可以参考源码</li>
<li><a href="https://github.com/biaov/create-mine" target="_blank" rel="noopener noreferrer">Github 源码<ExternalLinkIcon/></a></li>
<li>作用：当你后续想要开发自己的作品集的时候，可以节省重新搭建项目的时间</li>
</ul>
</div></template>


