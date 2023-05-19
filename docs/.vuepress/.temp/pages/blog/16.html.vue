<template><div><h1 id="使用-vuepress-快速搭建一个个人博客" tabindex="-1"><a class="header-anchor" href="#使用-vuepress-快速搭建一个个人博客" aria-hidden="true">#</a> 使用 vuepress 快速搭建一个个人博客</h1>
<blockquote>
<p>又有一个可以装逼的技术点了</p>
</blockquote>
<h2 id="初始化项目" tabindex="-1"><a class="header-anchor" href="#初始化项目" aria-hidden="true">#</a> 初始化项目</h2>
<div class="language-Basic line-numbers-mode" data-ext="Basic"><pre v-pre class="language-Basic"><code>npm init -y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="安装依赖" tabindex="-1"><a class="header-anchor" href="#安装依赖" aria-hidden="true">#</a> 安装依赖</h3>
<ul>
<li><a href="https://vuepress.vuejs.org/zh/" target="_blank" rel="noopener noreferrer">vuepress<ExternalLinkIcon/></a>：用来开发博客项目的依赖</li>
</ul>
<div class="language-Basic line-numbers-mode" data-ext="Basic"><pre v-pre class="language-Basic"><code>npm i -D vuepress
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="初始化目录" tabindex="-1"><a class="header-anchor" href="#初始化目录" aria-hidden="true">#</a> 初始化目录</h3>
<div class="language-Markdown line-numbers-mode" data-ext="Markdown"><pre v-pre class="language-Markdown"><code>|-- wordpress -------------------- 项目名称
    |-- .gitignore --------------- git忽略文件
    |-- ftp.js ------------------- 上传配置文件
    |-- package-lock.json -------- 依赖地址信息
    |-- package.json ------------- npm 包信息
    |-- README.md ---------------- 项目文档
    |-- build -------------------- 配置目录
    |-- dist --------------------- 打包目录
    |-- docs --------------------- 项目主目录
        |-- README.md ------------ 入口文件
        |-- .vuepress ------------ vuepress 配置目录
        |   |-- config.js -------- 配置文件
        |-- |-- public ----------- 资源目录
        |   |-- styles ----------- 样式文件
        |-- blog ----------------- 博客文章目录
        |-- |-- README.md -------- blog的根目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置运行命令" tabindex="-1"><a class="header-anchor" href="#配置运行命令" aria-hidden="true">#</a> 配置运行命令</h3>
<ul>
<li>package.json</li>
</ul>
<div class="language-JSON line-numbers-mode" data-ext="JSON"><pre v-pre class="language-JSON"><code>&quot;scripts&quot;: {
  &quot;start&quot;: &quot;npm run dev&quot;,
  &quot;dev&quot;: &quot;vuepress dev docs&quot;,
  &quot;build&quot;: &quot;vuepress build docs&quot;,
  &quot;upload&quot;: &quot;node ftp.js&quot;,
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置-config-js" tabindex="-1"><a class="header-anchor" href="#配置-config-js" aria-hidden="true">#</a> 配置 config.js</h3>
<details>
<summary>✅ 查看详情</summary>
<div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre v-pre class="language-JavaScript"><code>const articleNum = 15; // 文章数量
// 目录配置
const children = Array.from(new Array(articleNum), (_, i) =&gt; (i &lt; 10 ? &quot;0&quot; + i : String(i))); // 初始化

// 配置文件
const themeConfig = {
  logo: &quot;/logo.svg&quot;,
  search: false,
  smoothScroll: true,
  nav: [
    {
      text: &quot;首页&quot;,
      link: &quot;/&quot;
    },
    {
      text: &quot;博客&quot;,
      ariaLabel: &quot;博客菜单&quot;,
      items: [
        {
          text: &quot;我的博客&quot;,
          link: &quot;/blog/&quot;
        },
        {
          text: &quot;CSDN&quot;,
          link: &quot;https://blog.csdn.net/biao_feng&quot;,
          target: &quot;_blank&quot;
        }
      ]
    },
    {
      text: &quot;Github&quot;,
      link: &quot;https://github.com/biaov/wordpress&quot;,
      target: &quot;_blank&quot;
    }
  ],
  sidebar: {
    &quot;/blog/&quot;: [
      {
        title: &quot;首页&quot;,
        path: &quot;/&quot;
      },
      {
        title: &quot;博文&quot;,
        path: &quot;/blog/&quot;,
        collapsable: false,
        sidebarDepth: 3,
        children
      }
    ]
  }
};

// 配置
const config = {
  base: &quot;/&quot;,
  title: &quot;个人博客&quot;,
  description: &quot;这是我用 VuePress 搭建的个人博客！&quot;,
  dest: &quot;dist&quot;,
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { name: 'referrer', content: 'no-referrer' }]
  ],
  host: &quot;127.0.0.1&quot;,
  port: &quot;8888&quot;,
  themeConfig:themeConfig,
};

module.exports = config;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h3 id="运行项目" tabindex="-1"><a class="header-anchor" href="#运行项目" aria-hidden="true">#</a> 运行项目</h3>
<div class="language-Basic line-numbers-mode" data-ext="Basic"><pre v-pre class="language-Basic"><code>npm start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<p>开发中...
开发完成</p>
<hr>
<h3 id="打包项目" tabindex="-1"><a class="header-anchor" href="#打包项目" aria-hidden="true">#</a> 打包项目</h3>
<div class="language-Basic line-numbers-mode" data-ext="Basic"><pre v-pre class="language-Basic"><code>npm run build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="上传项目文件到服务器" tabindex="-1"><a class="header-anchor" href="#上传项目文件到服务器" aria-hidden="true">#</a> 上传项目文件到服务器</h2>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>这是使用 ftp 上传文件到服务器，请确保你配置了 ftp 服务器，并开放了 21 端口。</p>
</div>
<h3 id="使用-flashfxp-上传文件" tabindex="-1"><a class="header-anchor" href="#使用-flashfxp-上传文件" aria-hidden="true">#</a> 使用 <a href="https://www.flashfxp.com/" target="_blank" rel="noopener noreferrer">FlashFXP<ExternalLinkIcon/></a> 上传文件</h3>
<h4 id="连接服务器" tabindex="-1"><a class="header-anchor" href="#连接服务器" aria-hidden="true">#</a> 连接服务器</h4>
<p><img src="https://img-blog.csdnimg.cn/20201031110737424.png" alt="在这里插入图片描述"></p>
<h4 id="上传-dist-目录文件" tabindex="-1"><a class="header-anchor" href="#上传-dist-目录文件" aria-hidden="true">#</a> 上传 dist 目录文件</h4>
<p><img src="https://img-blog.csdnimg.cn/20201031110906547.png" alt="在这里插入图片描述"></p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>上传成功</p>
</div>
<h3 id="使用自动化构建" tabindex="-1"><a class="header-anchor" href="#使用自动化构建" aria-hidden="true">#</a> 使用自动化构建</h3>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>由于某些原因，没有具体的开源案例，只提供思路。</p>
</div>
<h4 id="效果" tabindex="-1"><a class="header-anchor" href="#效果" aria-hidden="true">#</a> 效果</h4>
<ul>
<li>当代码提交到远程 Git 仓库之后，服务器代码自动更新。</li>
</ul>
<h4 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h4>
<ul>
<li>监听我的代码提交，当我提交完之后，Git 仓库向服务器发送一个请求</li>
<li>服务器接收请求之后，执行我的预设操作，即：拉取代码 -&gt; 安装依赖 -&gt; 打包项目 -&gt; 项目更新完成</li>
</ul>
<h4 id="具体操作" tabindex="-1"><a class="header-anchor" href="#具体操作" aria-hidden="true">#</a> 具体操作</h4>
<ul>
<li>这里以 Github 为例，如果是其它类型的 Git 仓库，大体流程不变，只有监听 Git 提交的方式不同。</li>
<li>配置 Webhooks
<ul>
<li>地址：个人项目 -&gt; Settings -&gt; Webhooks -&gt; Add webhook
<img src="https://img-blog.csdnimg.cn/20201103112620179.png" alt="在这里插入图片描述"></li>
<li>配置服务器接收请求地址，密码，以及触发请求的方式</li>
</ul>
</li>
</ul>
<p><img src="https://img-blog.csdnimg.cn/20201103112639337.png" alt="在这里插入图片描述"></p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<h3 id="项目开源地址" tabindex="-1"><a class="header-anchor" href="#项目开源地址" aria-hidden="true">#</a> 项目开源地址</h3>
<ul>
<li>👉 <a href="https://github.com/biaov/wordpress" target="_blank" rel="noopener noreferrer">wordpress<ExternalLinkIcon/></a></li>
</ul>
<h3 id="项目演示地址" tabindex="-1"><a class="header-anchor" href="#项目演示地址" aria-hidden="true">#</a> 项目演示地址</h3>
<ul>
<li>👉 <a href="http://wordpress.biaov.cn/" target="_blank" rel="noopener noreferrer">wordpress<ExternalLinkIcon/></a></li>
</ul>
</div></template>


