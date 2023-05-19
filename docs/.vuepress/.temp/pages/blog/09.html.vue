<template><div><h1 id="uni-app-vue-nodejs-express-开发一个开源项目" tabindex="-1"><a class="header-anchor" href="#uni-app-vue-nodejs-express-开发一个开源项目" aria-hidden="true">#</a> Uni-App+Vue+NodeJs+Express 开发一个开源项目</h1>
<h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h2>
<nav class="table-of-contents"><ul><li><router-link to="#目录">目录</router-link><ul><li><router-link to="#前言">前言</router-link></li><li><router-link to="#技术栈">技术栈</router-link></li><li><router-link to="#目录结构">目录结构</router-link></li><li><router-link to="#总结">总结</router-link></li></ul></li></ul></nav>
<h3 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h3>
<ul>
<li>有一段时间没有发布博客了，前段时间写了一个由 <code v-pre>Uni-App+Vue+NodeJs+Express</code> 开发的一个开源项目，今天来发布一篇关于这个的博客。</li>
<li>此项目主要兼容<code v-pre>H5</code>、<code v-pre>小程序</code>、<code v-pre>App</code> 这三个端。</li>
<li>项目地址：<a href="https://github.com/biaov/MINEAPP" target="_blank" rel="noopener noreferrer">MINEAPP<ExternalLinkIcon/></a></li>
</ul>
<h3 id="技术栈" tabindex="-1"><a class="header-anchor" href="#技术栈" aria-hidden="true">#</a> 技术栈</h3>
<table>
<thead>
<tr>
<th>名称</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://uniapp.dcloud.io/README" target="_blank" rel="noopener noreferrer">uni-app 框架<ExternalLinkIcon/></a></td>
<td>一个使用 Vue.js 开发所有前端应用的框架。</td>
</tr>
<tr>
<td><a href="http://www.html5plus.org/doc/zh_cn/accelerometer.html#" target="_blank" rel="noopener noreferrer">5+Api<ExternalLinkIcon/></a></td>
<td>和手机交互的一些 API。</td>
</tr>
<tr>
<td><a href="https://cn.vuejs.org/" target="_blank" rel="noopener noreferrer">VueJs<ExternalLinkIcon/></a></td>
<td>一套用于构建用户界面的渐进式框架。</td>
</tr>
<tr>
<td><a href="https://vuex.vuejs.org/zh/" target="_blank" rel="noopener noreferrer">Vuex<ExternalLinkIcon/></a></td>
<td>一个专为 Vue.js 应用程序开发的状态管理模式。</td>
</tr>
<tr>
<td><a href="http://nodejs.cn/api/" target="_blank" rel="noopener noreferrer">NodeJs<ExternalLinkIcon/></a></td>
<td>一个基于 Chrome V8 引擎的 JavaScript 运行时。</td>
</tr>
<tr>
<td><a href="http://expressjs.com/" target="_blank" rel="noopener noreferrer">Express<ExternalLinkIcon/></a></td>
<td>一个保持最小规模的灵活的 Node.js Web 应用程序开发框架</td>
</tr>
<tr>
<td><a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer">MySql<ExternalLinkIcon/></a></td>
<td>一个关系型数据库管理系统。</td>
</tr>
</tbody>
</table>
<h3 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构" aria-hidden="true">#</a> 目录结构</h3>
<div class="language-Markdown line-numbers-mode" data-ext="Markdown"><pre v-pre class="language-Markdown"><code>|-- MINEAPP------------------------------- 项目名称
    |-- .gitignore------------------------ Git上传忽略文件
    |-- README.md------------------------- 项目文档
    |-- BackEnd -------------------------- 后端目录
    |   |-- package-lock.json ------------ 模块的来源及版本号文件
    |   |-- package.json ----------------- 模块描述文件
    |   |-- data ------------------------- 数据库文件目录
    |   |-- src -------------------------- 开发目录
    |-- FrontEnd ------------------------ 前端目录
    |   |-- App.vue ---------------------- 主要文件
    |   |-- copyright.md ----------------- 版权信息
    |   |-- main.js ---------------------- 入口文件
    |   |-- manifest.json ---------------- APP配置文件
    |   |-- pages.json ------------------- 节点配置应用文件
    |   |-- uni.scss --------------------- 全局scss配置文件
    |   |-- api -------------------------- 请求API
    |   |-- components ------------------- 组件目录
    |   |-- filters ---------------------- 全局过滤目录
    |   |-- pages ------------------------ 页面目录
    |   |-- static ----------------------- 静态资源目录
    |   |-- store ------------------------ Vuex状态管理目录
    |   |-- unpackage -------------------- APP配置资源目录
    |   |-- utils ------------------------ 全局配置目录
    |-- images --------------------------- 项目文档图片
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3>
<ul>
<li>项目内容暂时还没有很多，不过后续作者会不定期更新。</li>
<li>如果其中存在一些 BUG ，还请见谅。</li>
</ul>
</div></template>


