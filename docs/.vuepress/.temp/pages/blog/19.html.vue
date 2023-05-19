<template><div><h1 id="基于-vite-vue3-ts-开发组件库" tabindex="-1"><a class="header-anchor" href="#基于-vite-vue3-ts-开发组件库" aria-hidden="true">#</a> 基于 Vite + Vue3 + TS 开发组件库</h1>
<h2 id="技术栈" tabindex="-1"><a class="header-anchor" href="#技术栈" aria-hidden="true">#</a> 技术栈</h2>
<ul>
<li>附上 <a href="https://github.com/biaov/mine-h5-ui" target="_blank" rel="noopener noreferrer">Github 地址<ExternalLinkIcon/></a> 和 <a href="https://mineh5ui.biaov.cn/v2/" target="_blank" rel="noopener noreferrer">演示地址<ExternalLinkIcon/></a> 以供参考。</li>
</ul>
<blockquote>
<p>HTML5 + CSS3 + Less + ES6<sup>+</sup> + Vue3.x + Composition-API + Vite + Gulp + Rollup + Jest</p>
</blockquote>
<h2 id="初始化项目" tabindex="-1"><a class="header-anchor" href="#初始化项目" aria-hidden="true">#</a> 初始化项目</h2>
<ul>
<li>可以使用 <a href="https://cn.vitejs.dev/" target="_blank" rel="noopener noreferrer">vite<ExternalLinkIcon/></a> 的官方 template，也可以自己搭建。</li>
</ul>
<h3 id="官方命令" tabindex="-1"><a class="header-anchor" href="#官方命令" aria-hidden="true">#</a> 官方命令</h3>
<div class="language-Basic line-numbers-mode" data-ext="Basic"><pre v-pre class="language-Basic"><code>npm init vite@latest ui --template vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="从零搭建" tabindex="-1"><a class="header-anchor" href="#从零搭建" aria-hidden="true">#</a> 从零搭建</h3>
<h4 id="生成-package-json" tabindex="-1"><a class="header-anchor" href="#生成-package-json" aria-hidden="true">#</a> 生成 <code v-pre>package.json</code></h4>
<div class="language-Basic line-numbers-mode" data-ext="Basic"><pre v-pre class="language-Basic"><code>npm init -y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-JSON line-numbers-mode" data-ext="JSON"><pre v-pre class="language-JSON"><code>{
  &quot;name&quot;: &quot;ui&quot;,
  &quot;version&quot;: &quot;1.0.0&quot;,
  &quot;description&quot;: &quot;&quot;,
  &quot;main&quot;: &quot;index.js&quot;,
  &quot;scripts&quot;: {
    &quot;test&quot;: &quot;echo \&quot;Error: no test specified\&quot; &amp;&amp; exit 1&quot;
  },
  &quot;keywords&quot;: [],
  &quot;author&quot;: &quot;&quot;,
  &quot;license&quot;: &quot;ISC&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="安装依赖" tabindex="-1"><a class="header-anchor" href="#安装依赖" aria-hidden="true">#</a> 安装依赖</h4>
<ul>
<li>dependencies</li>
</ul>
<div class="language-Basic line-numbers-mode" data-ext="Basic"><pre v-pre class="language-Basic"><code># 简化版本
npm i -S clipboard mockjs vue vue-router
# or 指定版本
npm i -S clipboard@2.0.8 mockjs@1.1.0 vue@3.0.11 vue-router@4.0.6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><a href="https://www.npmjs.com/package/clipboard" target="_blank" rel="noopener noreferrer">clipboard<ExternalLinkIcon/></a>：<code v-pre>可选</code> 复制到剪切板</p>
</li>
<li>
<p><a href="https://www.npmjs.com/package/mockjs" target="_blank" rel="noopener noreferrer">mockjs<ExternalLinkIcon/></a>：<code v-pre>可选</code> 生成随机数据</p>
</li>
<li>
<p><a href="https://www.npmjs.com/package/vue" target="_blank" rel="noopener noreferrer">vue<ExternalLinkIcon/></a>：渐进式框架</p>
</li>
<li>
<p><a href="https://www.npmjs.com/package/vue-router" target="_blank" rel="noopener noreferrer">vue-router<ExternalLinkIcon/></a>：路由管理器</p>
</li>
<li>
<p>devDependencies</p>
</li>
</ul>
<div class="language-Basic line-numbers-mode" data-ext="Basic"><pre v-pre class="language-Basic"><code># 简化版本
npm i -D @rollup/plugin-node-resolve @types/jest @types/mockjs @types/node @typescript-eslint/eslint-plugin @typescript-eslint/parser @vitejs/plugin-vue @vue/compiler-sfc @vue/test-utils autoprefixer del eslint eslint-config-airbnb-base eslint-config-prettier eslint-plugin-import eslint-plugin-jest eslint-plugin-prettier eslint-plugin-vue gulp gulp-autoprefixer gulp-cssmin gulp-less gulp-postcss jest less markdown-it-container postcss-pxtorem prettier rollup rollup-plugin-terser rollup-plugin-typescript2 rollup-plugin-vue ts-jest typescript vite vite-plugin-vuedoc vue-jest vue-tsc
# or 指定版本
npm i -D @rollup/plugin-node-resolve@13.0.0 @types/jest@26.0.23 @types/mockjs@1.0.4 @types/node@15.0.2 @typescript-eslint/eslint-plugin@4.25.0 @typescript-eslint/parser@4.25.0 @vitejs/plugin-vue@1.2.2 @vue/compiler-sfc@3.0.5 @vue/test-utils@2.0.0-rc.6 autoprefixer@10.2.6 del@6.0.0 eslint@7.27.0 eslint-config-airbnb-base@14.2.1 eslint-config-prettier@8.3.0 eslint-plugin-import@2.23.4 eslint-plugin-jest@24.3.6 eslint-plugin-prettier@3.4.0 eslint-plugin-vue@7.10.0 gulp@4.0.2 gulp-autoprefixer@7.0.1 gulp-cssmin@0.2.0 gulp-less@4.0.1 gulp-postcss@9.0.0 jest@26.6.3 less@3.13.1 markdown-it-container@3.0.0 postcss-pxtorem@6.0.0 prettier@2.3.0 rollup@2.50.5 rollup-plugin-terser@7.0.2 rollup-plugin-typescript2@0.30.0 rollup-plugin-vue@6.0.0 ts-jest@26.5.6 typescript@4.1.3 vite@2.2.3 vite-plugin-vuedoc@3.1.3 vue-jest@5.0.0-alpha.10 vue-tsc@0.0.24
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><a href="https://www.npmjs.com/package/@rollup/plugin-node-resolve" target="_blank" rel="noopener noreferrer">@rollup/plugin-node-resolve<ExternalLinkIcon/></a>：rollup 路径解析插件，告诉 Rollup 如何查找外部模块</li>
<li><a href="https://www.npmjs.com/package/@types/jest" target="_blank" rel="noopener noreferrer">@types/jest<ExternalLinkIcon/></a>：jest 的 TS 模块</li>
<li><a href="https://www.npmjs.com/package/@types/mockjs" target="_blank" rel="noopener noreferrer">@types/mockjs<ExternalLinkIcon/></a>：mockjs 的 TS 模块</li>
<li><a href="https://www.npmjs.com/package/@types/node" target="_blank" rel="noopener noreferrer">@types/node<ExternalLinkIcon/></a>：关于 nodejs 的类型定义，用于 nodejs 中使用 TS</li>
<li><a href="https://www.npmjs.com/package/@typescript-eslint/eslint-plugin" target="_blank" rel="noopener noreferrer">@typescript-eslint/eslint-plugin<ExternalLinkIcon/></a>：eslint 插件，包含了各类定义好的检测 TS 代码的规范</li>
<li><a href="https://www.npmjs.com/package/@typescript-eslint/parser" target="_blank" rel="noopener noreferrer">@typescript-eslint/parser<ExternalLinkIcon/></a>：eslint 的解析器，用于解析 TS，从而检查和规范 TS</li>
<li><a href="https://www.npmjs.com/package/@vitejs/plugin-vue" target="_blank" rel="noopener noreferrer">@vitejs/plugin-vue<ExternalLinkIcon/></a>：vite 解析 Vue 的插件</li>
<li><a href="https://www.npmjs.com/package/@vue/compiler-sfc" target="_blank" rel="noopener noreferrer">@vue/compiler-sfc<ExternalLinkIcon/></a>：解析 SFC(Single File Components) 组件</li>
<li><a href="https://www.npmjs.com/package/@vue/test-utils" target="_blank" rel="noopener noreferrer">@vue/test-utils<ExternalLinkIcon/></a>：Vue 单元测试</li>
<li><a href="https://www.npmjs.com/package/autoprefixer" target="_blank" rel="noopener noreferrer">autoprefixer<ExternalLinkIcon/></a>：浏览器前缀工具</li>
<li><a href="https://www.npmjs.com/package/del" target="_blank" rel="noopener noreferrer">del<ExternalLinkIcon/></a>：用于删除文件夹和文件</li>
<li><a href="https://www.npmjs.com/package/eslint" target="_blank" rel="noopener noreferrer">eslint<ExternalLinkIcon/></a>：JS 代码检测工具</li>
<li><a href="https://www.npmjs.com/package/eslint-config-airbnb-base" target="_blank" rel="noopener noreferrer">eslint-config-airbnb-base<ExternalLinkIcon/></a>：eslint 的 airbnb 编码规则</li>
<li><a href="https://www.npmjs.com/package/eslint-config-prettier" target="_blank" rel="noopener noreferrer">eslint-config-prettier<ExternalLinkIcon/></a>：处理 eslint 中的样式规范和 prettier 中样式规范的冲突</li>
<li><a href="https://www.npmjs.com/package/eslint-plugin-import" target="_blank" rel="noopener noreferrer">eslint-plugin-import<ExternalLinkIcon/></a>：验证正确的导入的 eslint 插件</li>
<li><a href="https://www.npmjs.com/package/eslint-plugin-jest" target="_blank" rel="noopener noreferrer">eslint-plugin-jest<ExternalLinkIcon/></a>：解析 jest 的 eslint 插件</li>
<li><a href="https://www.npmjs.com/package/eslint-plugin-prettier" target="_blank" rel="noopener noreferrer">eslint-plugin-prettier<ExternalLinkIcon/></a>：将 prettier 作为 eslint 规范来使用</li>
<li><a href="https://www.npmjs.com/package/eslint-plugin-vue" target="_blank" rel="noopener noreferrer">eslint-plugin-vue<ExternalLinkIcon/></a>：解析 Vue 的 eslint 插件</li>
<li><a href="https://www.npmjs.com/package/gulp" target="_blank" rel="noopener noreferrer">gulp<ExternalLinkIcon/></a>：自动化构建工具</li>
<li><a href="https://www.npmjs.com/package/gulp-autoprefixer" target="_blank" rel="noopener noreferrer">gulp-autoprefixer<ExternalLinkIcon/></a>：自动获取浏览器厂商前缀，如 -webkit-</li>
<li><a href="https://www.npmjs.com/package/gulp-cssmin" target="_blank" rel="noopener noreferrer">gulp-cssmin<ExternalLinkIcon/></a>：css 压缩</li>
<li><a href="https://www.npmjs.com/package/gulp-less" target="_blank" rel="noopener noreferrer">gulp-less<ExternalLinkIcon/></a>：解析 CSS 预编译器 LESS</li>
<li><a href="https://www.npmjs.com/package/gulp-postcss" target="_blank" rel="noopener noreferrer">gulp-postcss<ExternalLinkIcon/></a>：转换前缀工具，和 gulp-autoprefixer 搭配使用</li>
<li><a href="https://www.npmjs.com/package/jest" target="_blank" rel="noopener noreferrer">jest<ExternalLinkIcon/></a>：单元测试</li>
<li><a href="https://www.npmjs.com/package/less" target="_blank" rel="noopener noreferrer">less<ExternalLinkIcon/></a>：CSS 预编译器</li>
<li><a href="https://www.npmjs.com/package/markdown-it-container" target="_blank" rel="noopener noreferrer">markdown-it-container<ExternalLinkIcon/></a>：Markdown 解析器</li>
<li><a href="https://www.npmjs.com/package/postcss-pxtorem" target="_blank" rel="noopener noreferrer">postcss-pxtorem<ExternalLinkIcon/></a>：<code v-pre>可选</code> 转换 rem 单位</li>
<li><a href="https://www.npmjs.com/package/prettier" target="_blank" rel="noopener noreferrer">prettier<ExternalLinkIcon/></a>：格式化规范</li>
<li><a href="https://www.npmjs.com/package/rollup" target="_blank" rel="noopener noreferrer">rollup<ExternalLinkIcon/></a>：自动化打包工具</li>
<li><a href="https://www.npmjs.com/package/rollup-plugin-terser" target="_blank" rel="noopener noreferrer">rollup-plugin-terser<ExternalLinkIcon/></a>：rollup 压缩</li>
<li><a href="https://www.npmjs.com/package/rollup-plugin-typescript2" target="_blank" rel="noopener noreferrer">rollup-plugin-typescript2<ExternalLinkIcon/></a>：rollup 解析 TS</li>
<li><a href="https://www.npmjs.com/package/rollup-plugin-vue" target="_blank" rel="noopener noreferrer">rollup-plugin-vue<ExternalLinkIcon/></a>：rollup 解析 Vue</li>
<li><a href="https://www.npmjs.com/package/ts-jest" target="_blank" rel="noopener noreferrer">ts-jest<ExternalLinkIcon/></a>：单元测试解析 TS</li>
<li><a href="https://www.npmjs.com/package/typescript" target="_blank" rel="noopener noreferrer">typescript<ExternalLinkIcon/></a>：JS 类型的超集，强类型</li>
<li><a href="https://www.npmjs.com/package/vite" target="_blank" rel="noopener noreferrer">vite<ExternalLinkIcon/></a>：自动化构建工具</li>
<li><a href="https://www.npmjs.com/package/vite-plugin-vuedoc" target="_blank" rel="noopener noreferrer">vite-plugin-vuedoc<ExternalLinkIcon/></a>：Vite 解析 Markdown</li>
<li><a href="https://www.npmjs.com/package/vue-jest" target="_blank" rel="noopener noreferrer">vue-jest<ExternalLinkIcon/></a>：单元测试解析 Vue</li>
<li><a href="https://www.npmjs.com/package/vue-tsc" target="_blank" rel="noopener noreferrer">vue-tsc<ExternalLinkIcon/></a>：Vue 文件生成 <code v-pre>.d.ts</code> 类型文件</li>
</ul>
<h3 id="创建项目目录" tabindex="-1"><a class="header-anchor" href="#创建项目目录" aria-hidden="true">#</a> 创建项目目录</h3>
<h4 id="创建演示项目目录" tabindex="-1"><a class="header-anchor" href="#创建演示项目目录" aria-hidden="true">#</a> 创建演示项目目录</h4>
<ul>
<li>生成 <code v-pre>tsconfig.json</code></li>
</ul>
<div class="language-Basic line-numbers-mode" data-ext="Basic"><pre v-pre class="language-Basic"><code># 全局安装
npm i -g typescript
# 初始化
tsc --init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>根目录创建 index.html</li>
</ul>
<div class="language-HTML line-numbers-mode" data-ext="HTML"><pre v-pre class="language-HTML"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;zh-cn&quot;&gt;
  &lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot; /&gt;
    &lt;link rel=&quot;icon&quot; href=&quot;/favicon.ico&quot; /&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot; /&gt;
    &lt;title&gt;UI组件库&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;div id=&quot;app&quot;&gt;&lt;/div&gt;
    &lt;script type=&quot;module&quot; src=&quot;/examples/main.ts&quot;&gt;&lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>创建 examples 目录，此目录为演示文档主目录，相当于 src
<ul>
<li>创建 <code v-pre>examples/assets</code>：资源目录</li>
<li>创建 <code v-pre>examples/components</code>：演示项目的公共组件</li>
<li>创建 <code v-pre>examples/router</code>：路由</li>
<li>创建 <code v-pre>examples/App.vue</code>：页面入口</li>
<li>创建 <code v-pre>examples/main.ts</code>：主入口</li>
</ul>
</li>
</ul>
<div class="language-TypeScript line-numbers-mode" data-ext="TypeScript"><pre v-pre class="language-TypeScript"><code>import { createApp } from &quot;vue&quot;;
import router from &quot;./router&quot;;
import App from &quot;./App.vue&quot;;

const app = createApp(App);
app.use(router);
app.mount(&quot;#app&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>配置 Vite
<ul>
<li>创建 <code v-pre>vite.config.ts</code></li>
</ul>
</li>
</ul>
<div class="language-TypeScript line-numbers-mode" data-ext="TypeScript"><pre v-pre class="language-TypeScript"><code>import { defineConfig } from &quot;vite&quot;;
import vue from &quot;@vitejs/plugin-vue&quot;;

export default defineConfig({
  plugins: [vue()]
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>配置 Eslint
<ul>
<li>创建 <code v-pre>.eslintrc.js</code></li>
</ul>
</li>
</ul>
<div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre v-pre class="language-JavaScript"><code>// 配置信息
const config = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [&quot;plugin:vue/essential&quot;, &quot;airbnb-base&quot;, &quot;plugin:prettier/recommended&quot;, &quot;plugin:jest/recommended&quot;],
  parserOptions: {
    ecmaVersion: 12,
    parser: &quot;@typescript-eslint/parser&quot;,
    sourceType: &quot;module&quot;
  },
  plugins: [&quot;vue&quot;, &quot;@typescript-eslint&quot;],
  settings: {},
  rules: {
  }
};
module.exports = config;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>TS 识别 Vue 文件
<ul>
<li>创建 <code v-pre>typings/shims-vue.d.ts</code></li>
</ul>
</li>
</ul>
<div class="language-TypeScript line-numbers-mode" data-ext="TypeScript"><pre v-pre class="language-TypeScript"><code>// vue
declare module &quot;*.vue&quot; {
  import { App, defineComponent } from &quot;vue&quot;;
  const component: ReturnType&lt;typeof defineComponent&gt; &amp; {
    install(app: App): void;
  };
  export default component;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="创建单元测试主目录" tabindex="-1"><a class="header-anchor" href="#创建单元测试主目录" aria-hidden="true">#</a> 创建单元测试主目录</h4>
<ul>
<li>配置 Jest
<ul>
<li>创建 <code v-pre>jest.config.js</code></li>
</ul>
</li>
</ul>
<div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre v-pre class="language-JavaScript"><code>// 配置
const config = {
  moduleFileExtensions: [&quot;vue&quot;, &quot;json&quot;, &quot;js&quot;, &quot;ts&quot;],
  preset: &quot;ts-jest&quot;,
  testEnvironment: &quot;jsdom&quot;,
  transform: {
    &quot;^.+\\.vue$&quot;: &quot;vue-jest&quot;, // vue 文件用 vue-jest 转换
    &quot;^.+\\.ts$&quot;: &quot;ts-jest&quot; // ts 文件用 ts-jest 转换
  },
  testMatch: [&quot;**/tests/unit/*.spec.ts&quot;], // 匹配 tests/unit 目录下的 .ts 文件
  verbose: true, // 显示冗余代码，true：显示测试用例，false：显示 console.log
  bail: true, // 经历几次失败后停止运行测试
};
module.exports = config;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>创建测试用例 <code v-pre>tests/unit/img.spec.ts</code></li>
</ul>
<div class="language-TypeScript line-numbers-mode" data-ext="TypeScript"><pre v-pre class="language-TypeScript"><code>import { mount } from &quot;@vue/test-utils&quot;;
import MeImg from &quot;~/MeImg/index.vue&quot;; // 引入主要测试的组件

describe(&quot;MeImg&quot;, () =&gt; {
  const src = &quot;http://dummyimage.com/100x100/0079cb/fff&quot;; // 图片地址
  // 测试传参 src
  test(&quot;props src&quot;, () =&gt; {
    // 向组件里传参，获取组件实例
    const wrapper = mount(MeImg, {
      props: { src }
    });
    const viewer = wrapper.find(&quot;.me-img&quot;); // 获取 DOM
    expect(viewer.exists()).toBeTruthy(); // 是否存在
    const imgEl = viewer.find(&quot;img&quot;);
    expect(viewer.exists()).toBeTruthy();
    expect(imgEl.attributes(&quot;src&quot;)).toBe(src); // 传入的 src 地址是否在组件里正确
  });
});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="创建组件库主目录" tabindex="-1"><a class="header-anchor" href="#创建组件库主目录" aria-hidden="true">#</a> 创建组件库主目录</h4>
<ul>
<li>创建 <code v-pre>packages/index.ts</code></li>
</ul>
<div class="language-TypeScript line-numbers-mode" data-ext="TypeScript"><pre v-pre class="language-TypeScript"><code>import type { App } from &quot;vue&quot;;

/* 基础组件 start */
import MeImg from &quot;./MeImg&quot;; // 图片
/* 基础组件 end */

// 所有组件
const components: any[] = [MeImg];

/**
 * 组件注册
 * @param {App} app Vue 对象
 * @returns {Void}
 */
const install = (app: App) =&gt; {
  // 注册组件
  components.forEach(component =&gt; app.component(component.name, component));
};
export { MeImg };
// 全部导出
export default {
  install,
  ...components
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="开发组件" tabindex="-1"><a class="header-anchor" href="#开发组件" aria-hidden="true">#</a> 开发组件</h3>
<ul>
<li>创建组件文件 <code v-pre>packages/MeImg/index.vue</code></li>
</ul>
<div class="language-Vue line-numbers-mode" data-ext="Vue"><pre v-pre class="language-Vue"><code>&lt;template&gt;
  &lt;!-- 图片 --&gt;
  &lt;div class=&quot;me-img&quot; @click=&quot;onClick&quot;&gt;
    &lt;img :src=&quot;src&quot; width=&quot;40px&quot; height=&quot;40px&quot; :alt=&quot;alt&quot; v-if=&quot;!fill&quot; :style=&quot;`width:${width};height:${height};border-radius:${radius};`&quot; @load=&quot;onLoad&quot; @error=&quot;onError&quot; /&gt;
    &lt;span :style=&quot;`width:${width};height:${height};border-radius:${radius};background:url(${src}) no-repeat center;background-size:${fill};`&quot; v-else&gt;&lt;/span&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script lang=&quot;ts&quot;&gt;
import { defineComponent } from &quot;vue&quot;;

export default defineComponent({
  name: &quot;MeImg&quot;,
  props: {
    // 图片地址
    src: {
      type: String,
      required: true
    },
    // 宽度
    width: {
      type: String,
      default: &quot;&quot;
    },
    // 高度
    height: {
      type: String,
      default: &quot;&quot;
    },
    // 填充方式
    fill: {
      type: String,
      default: &quot;&quot;
    },
    // 倒角
    radius: {
      type: String,
      default: &quot;0&quot;
    },
    // 错误显示alt
    alt: {
      type: String,
      default: &quot;&quot;
    }
  },
  setup(props, { emit }) {
    // 点击按钮
    const onClick = (e: MouseEvent) =&gt; {
      emit(&quot;on-click&quot;, e);
    };
    // 加载完成
    const onLoad = (e: Event) =&gt; {
      emit(&quot;on-load&quot;, e);
    };
    // 加载失败
    const onError = (e: Event) =&gt; {
      emit(&quot;on-error&quot;, e);
    };
    return { onClick, onLoad, onError };
  }
});
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>创建导出文件 <code v-pre>packages/MeImg/index.ts</code></li>
</ul>
<div class="language-TypeScript line-numbers-mode" data-ext="TypeScript"><pre v-pre class="language-TypeScript"><code>import type { App } from &quot;vue&quot;;
import MeImg from &quot;./index.vue&quot;;

type SFCWithInstall&lt;T&gt; = T &amp; { install(app: App): void }; // vue 安装

// 安装
MeImg.install = (app: App) =&gt; {
  app.component(MeImg.name, MeImg);
};
const InMeImg: SFCWithInstall&lt;typeof MeImg&gt; = MeImg; // 增加类型
export default InMeImg;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>样式开发 <code v-pre>theme-default/MeImg.less</code></li>
</ul>
<div class="language-Less line-numbers-mode" data-ext="Less"><pre v-pre class="language-Less"><code>/**
  * @file 图片
*/
.me-img {
  .inline-block;

  // 相同的样式
  .same-style {
    display: block;
    width: @img-size;
    overflow: hidden;
  }

  img {
    .same-style;
    height: auto;
  }

  span {
    .same-style;
    height: 40px;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">完成</p>
<p>开发完成</p>
</div>
<h3 id="打包演示项目" tabindex="-1"><a class="header-anchor" href="#打包演示项目" aria-hidden="true">#</a> 打包演示项目</h3>
<ul>
<li><code v-pre>package.json</code> 设置命令</li>
</ul>
<div class="language-JSON line-numbers-mode" data-ext="JSON"><pre v-pre class="language-JSON"><code>&quot;scripts&quot;: {
  &quot;start&quot;: &quot;npm run dev&quot;,
  &quot;dev&quot;: &quot;vite -m development&quot;,
  &quot;build&quot;: &quot;npm run build:theme &amp;&amp; npm run build:package &amp;&amp; npm run build:package:dts&quot;,
  &quot;build:docs&quot;: &quot;vite build&quot;,
  &quot;build:theme&quot;: &quot;gulp build -f build/gulpfile.prod.js&quot;,
  &quot;build:package&quot;: &quot;rollup -c build/rollup.config.js&quot;,
  &quot;build:package:dts&quot;: &quot;rollup -c build/rollup.config.dts.js&quot;,
  &quot;test:unit&quot;: &quot;jest -c=jest.config.js --detectOpenHandles&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="配置组件库打包" tabindex="-1"><a class="header-anchor" href="#配置组件库打包" aria-hidden="true">#</a> 配置组件库打包</h4>
<h5 id="组件-js-打包" tabindex="-1"><a class="header-anchor" href="#组件-js-打包" aria-hidden="true">#</a> 组件 JS 打包</h5>
<ul>
<li>创建 Rollup 配置文件 <code v-pre>build/rollup.config.js</code> 和 <code v-pre>build/rollup.config.dts.js</code></li>
<li>rollup.config.js</li>
</ul>
<div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre v-pre class="language-JavaScript"><code>import nodeResolve from &quot;@rollup/plugin-node-resolve&quot;; // 告诉 Rollup 如何查找外部模块
import typescript from &quot;rollup-plugin-typescript2&quot;;
import vue from &quot;rollup-plugin-vue&quot;; // 处理vue文件
import { readdirSync } from &quot;fs&quot;; // 写文件
import { resolve } from &quot;path&quot;;
const input = resolve(__dirname, &quot;../packages&quot;); // 入口文件
const output = resolve(__dirname, &quot;../lib&quot;); // 输出文件
const config = readdirSync(input)
  .filter(name =&gt; ![&quot;theme-default&quot;, &quot;index.ts&quot;, &quot;types.ts&quot;].includes(name))
  .map(name =&gt; ({
    input: `${input}/${name}/index.ts`,
    external: [&quot;vue&quot;],
    plugins: [
      nodeResolve(),
      vue(),
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            declaration: false
          },
          exclude: [&quot;node_modules&quot;, &quot;examples&quot;, &quot;tests&quot;]
        },
        abortOnError: false,
        clean: true
      })
    ],
    output: {
      name: &quot;index&quot;,
      file: `${output}/${name}/index.js`,
      format: &quot;es&quot;
    }
  }));
config.push({
  input: `${input}/index.ts`,
  external: [&quot;vue&quot;],
  plugins: [
    nodeResolve(),
    vue(),
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          declaration: false
        },
        exclude: [&quot;node_modules&quot;, &quot;examples&quot;, &quot;tests&quot;]
      },
      abortOnError: false,
      clean: true
    })
  ],
  output: {
    name: &quot;index&quot;,
    file: `${output}/index.js`,
    format: &quot;es&quot;
  }
});
export default config;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>rollup.config.dts.js</li>
</ul>
<div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre v-pre class="language-JavaScript"><code>import nodeResolve from &quot;@rollup/plugin-node-resolve&quot;; // 告诉 Rollup 如何查找外部模块
import { terser } from &quot;rollup-plugin-terser&quot;;
import typescript from &quot;rollup-plugin-typescript2&quot;;
import vue from &quot;rollup-plugin-vue&quot;; // 处理vue文件
import { resolve } from &quot;path&quot;;
const input = resolve(__dirname, &quot;../packages&quot;); // 入口文件
const output = resolve(__dirname, &quot;../lib&quot;); // 输出文件
const config = [
  {
    input: `${input}/index.ts`,
    output: {
      format: &quot;es&quot;,
      file: `${output}/index.esm.js`
    },
    plugins: [
      terser(),
      nodeResolve(),
      vue({
        target: &quot;browser&quot;,
        css: false,
        exposeFilename: false
      }),
      typescript({
        useTsconfigDeclarationDir: false,
        tsconfigOverride: {
          include: [&quot;packages/**/*&quot;],
          exclude: [&quot;node_modules&quot;, &quot;examples&quot;, &quot;tests&quot;]
        },
        abortOnError: false
      })
    ],
    external: [&quot;vue&quot;]
  }
];
export default config;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="组件样式打包" tabindex="-1"><a class="header-anchor" href="#组件样式打包" aria-hidden="true">#</a> 组件样式打包</h5>
<ul>
<li>创建 Gulp 配置文件 <code v-pre>build/gulpfile.base.js</code></li>
<li>rollup.config.dts.js</li>
</ul>
<div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre v-pre class="language-JavaScript"><code>const { src, dest, series, parallel } = require(&quot;gulp&quot;);
const less = require(&quot;gulp-less&quot;);
const autoprefixer = require(&quot;gulp-autoprefixer&quot;);
const cssmin = require(&quot;gulp-cssmin&quot;);
const del = require(&quot;del&quot;);
// 打包配置
const config = {
  input: &quot;../packages/theme-default/&quot;,
  output: &quot;../lib/theme-default&quot;
};
// 导出配置项
exports.config = config;
// 复制字体
exports.copyfont = () =&gt; src([`${config.input}fonts/*`, `!${config.input}fonts/*.css`]).pipe(dest(`${config.output}/fonts`));
// 压缩font 里的 CSS
exports.minifontCss = () =&gt;
  src(`${config.input}fonts/*.css`)
    .pipe(cssmin())
    .pipe(dest(`${config.output}/fonts`));
// 删除之前css打包文件
exports.clean = done =&gt; {
  del(
    [&quot;*.css&quot;, &quot;fonts&quot;].map(name =&gt; `${config.output}/${name}`),
    { force: true }
  );
  done();
};

// 编译 LESS
const compile = () =&gt;
  src([`${input}*.less`, ...[&quot;base&quot;, &quot;variable&quot;].map(name =&gt; `!${input}${name}.less`)])
    .pipe(less())
    .pipe(
      autoprefixer({
        overrideBrowserslist: [&quot;last 2 versions&quot;]
      })
    )
    .pipe(cssmin())
    .pipe(dest(output));
exports.build = series(clean, parallel(compile, copyfont, minifontCss));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="上传-npm-官网" tabindex="-1"><a class="header-anchor" href="#上传-npm-官网" aria-hidden="true">#</a> 上传 npm 官网</h3>
<ul>
<li>登录</li>
</ul>
<div class="language-Bacic line-numbers-mode" data-ext="Bacic"><pre v-pre class="language-Bacic"><code>npm login
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>发布</li>
</ul>
<div class="language-Bacic line-numbers-mode" data-ext="Bacic"><pre v-pre class="language-Bacic"><code>npm publish
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>最后再附上 <a href="https://github.com/biaov/mine-h5-ui" target="_blank" rel="noopener noreferrer">Github 地址<ExternalLinkIcon/></a> 和 <a href="https://mineh5ui.biaov.cn/v2/" target="_blank" rel="noopener noreferrer">演示地址<ExternalLinkIcon/></a> 以供参考。</li>
</ul>
</div></template>


