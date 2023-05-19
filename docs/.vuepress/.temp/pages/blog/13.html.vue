<template><div><h1 id="使用-gulp-开发-html-静态页面和-less-实时更新" tabindex="-1"><a class="header-anchor" href="#使用-gulp-开发-html-静态页面和-less-实时更新" aria-hidden="true">#</a> 使用 Gulp 开发 HTML 静态页面和 Less 实时更新</h1>
<h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h2>
<nav class="table-of-contents"><ul><li><router-link to="#目录">目录</router-link><ul><li><router-link to="#搭建项目目录">搭建项目目录</router-link></li><li><router-link to="#如何实时更新">如何实时更新</router-link></li><li><router-link to="#如果你觉得配置麻烦-那么可以直接下载我写的这个-gulp-demo-即可">如果你觉得配置麻烦，那么可以直接下载我写的这个 gulp-demo 即可</router-link></li></ul></li></ul></nav>
<ul>
<li>之前一直在用 Vue 或者 React 在写 SPA 项目的时候，因为使用了 Less 感觉很不错，现在转回来写纯 css 的时候，感觉很难受（特别是写很长的选择器时）。</li>
<li>然后就分享一下在 HTML 静态页面中如何使用 Less（当然你也可以使用 Sass 或者 Stylus），以及实时更新。</li>
<li>如果你没有用过 Gulp，请点击这里 <a href="https://www.gulpjs.com.cn/" target="_blank" rel="noopener noreferrer">Gulp 官网<ExternalLinkIcon/></a></li>
</ul>
<h3 id="搭建项目目录" tabindex="-1"><a class="header-anchor" href="#搭建项目目录" aria-hidden="true">#</a> 搭建项目目录</h3>
<ul>
<li>这个是我的 gulp-demo 的项目目录。
<img src="https://img-blog.csdnimg.cn/20200803165117429.png" alt="在这里插入图片描述"></li>
</ul>
<h4 id="创建-package-json" tabindex="-1"><a class="header-anchor" href="#创建-package-json" aria-hidden="true">#</a> 创建 package.json</h4>
<ul>
<li>使用 npm init 按照步骤往下走</li>
<li>或者使用 npm init -y 一键初始化 package.json 文件</li>
</ul>
<div class="language-Basic line-numbers-mode" data-ext="Basic"><pre v-pre class="language-Basic"><code>npm init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="安装-gulp-以及一些插件" tabindex="-1"><a class="header-anchor" href="#安装-gulp-以及一些插件" aria-hidden="true">#</a> 安装 Gulp 以及一些插件</h4>
<ul>
<li>gulp：一个自动化构建工具，这里使用的是 Gulp@4.x，如果你之前用的是低于 Gulp@4.x 的版本，那会存在一定的区别。</li>
<li>gulp-autoprefixer：一个给你的 css 自动添加浏览器前缀插件。</li>
<li>gulp-cssmin：一个压缩 CSS 代码的插件</li>
<li>gulp-file-include：一个可以导入多个 HTML 代码的插件，这个你的 HTML 的公共部分可以拆分出来。例如：footer.html、header.html 等等。</li>
<li>gulp-htmlmin：一个压缩 HTML 代码的插件，当你是处于前后端不分离的情况时，可以选择不用。</li>
<li>gulp-less：一个识别 less 代码的插件，类似于 webpack 里的 loader。</li>
<li>gulp-uglify：一个压缩 JS 代码的插件。</li>
<li>gulp-babel：一个转译 es6 代码的插件</li>
<li>@babel/core：增加对 es6 的 polyfill</li>
<li>@babel/preset-env：插件集合。</li>
<li>del：一个可以删除文件的插件，主要用来让你重新编译时删除之前的代码，避免存在冲突。</li>
</ul>
<div class="language-Basic line-numbers-mode" data-ext="Basic"><pre v-pre class="language-Basic"><code>npm i -D gulp gulp-autoprefixer gulp-cssmin gulp-file-include gulp-htmlmin gulp-less gulp-uglify gulp-babel @babel/core @babel/preset-env del
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="编写配置文件及相关环境" tabindex="-1"><a class="header-anchor" href="#编写配置文件及相关环境" aria-hidden="true">#</a> 编写配置文件及相关环境</h4>
<ul>
<li>在 config 目录下创建三个文件
<ul>
<li>gulpfile.base.js：你的开发环境和生产环境都需要的公共方法或者是公共 task。</li>
<li>gulpfile.dev.js：开发环境需要的配置</li>
<li>gulpfile.prod.js：生产环境需要的配置</li>
</ul>
</li>
<li>在 package.json 里添加 scripts 命令
<ul>
<li>start 命令，至于为啥不直接执行 dev 命令，因为它可以直接运行 npm start，少写一个 run。</li>
<li>dev 命令，开发环境命令，并且实时监听 html 文件和 less 文件的改变。</li>
<li>build 命令，打包项目命令。</li>
</ul>
</li>
</ul>
<div class="language-JSON line-numbers-mode" data-ext="JSON"><pre v-pre class="language-JSON"><code>{
  &quot;scripts&quot;:{
    &quot;start&quot;: &quot;npm run dev&quot;,
    &quot;dev&quot;: &quot;gulp dev -f config/gulpfile.dev.js&quot;,
    &quot;build&quot;: &quot;gulp build -f config/gulpfile.prod.js&quot;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="如何实时更新" tabindex="-1"><a class="header-anchor" href="#如何实时更新" aria-hidden="true">#</a> 如何实时更新</h3>
<h4 id="实时更新-css-文件" tabindex="-1"><a class="header-anchor" href="#实时更新-css-文件" aria-hidden="true">#</a> 实时更新 CSS 文件</h4>
<ul>
<li>使用 gulp 的 watch api 编写你需要实时监听的文件就可以了，当你的 less 文件改变时，它就会自动编译成 css。</li>
</ul>
<h4 id="实时更新-html-文件" tabindex="-1"><a class="header-anchor" href="#实时更新-html-文件" aria-hidden="true">#</a> 实时更新 HTML 文件</h4>
<ul>
<li>如果你用的是 vscode 编辑器的话，那就按照 EaseServer 插件即可，运行快捷键：Ctrl + Shift + Enter</li>
<li>开发环境运行你编译的 dev/index.html 即可。</li>
</ul>
<h3 id="如果你觉得配置麻烦-那么可以直接下载我写的这个-gulp-demo-即可" tabindex="-1"><a class="header-anchor" href="#如果你觉得配置麻烦-那么可以直接下载我写的这个-gulp-demo-即可" aria-hidden="true">#</a> 如果你觉得配置麻烦，那么可以直接下载我写的这个 gulp-demo 即可</h3>
<ul>
<li>下载地址：<a href="https://gitee.com/MINECASE/gulp-demo.git" target="_blank" rel="noopener noreferrer">gulp-demo<ExternalLinkIcon/></a></li>
<li>如何运行看这个 gulp-demo 的项目文档 README.md（根目录） 即可。</li>
<li>最后在这个发一条外链，你可以不用管这一句废话：<a href="https://biaov.cn/" target="_blank" rel="noopener noreferrer">个人网站<ExternalLinkIcon/></a></li>
</ul>
</div></template>


