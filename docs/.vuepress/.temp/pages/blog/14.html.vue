<template><div><h1 id="typescript-nodejs-编写一个-react-脚手架工具" tabindex="-1"><a class="header-anchor" href="#typescript-nodejs-编写一个-react-脚手架工具" aria-hidden="true">#</a> TypeScript + NodeJs 编写一个 React 脚手架工具</h1>
<h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h2>
<nav class="table-of-contents"><ul><li><router-link to="#目录">目录</router-link><ul><li><router-link to="#初始化-typescript-配置">初始化 TypeScript 配置</router-link></li><li><router-link to="#初始化-package-json-文件">初始化 package.json 文件</router-link></li><li><router-link to="#安装依赖插件">安装依赖插件</router-link></li><li><router-link to="#编写一个简单的命令">编写一个简单的命令</router-link></li><li><router-link to="#本地测试">本地测试</router-link></li><li><router-link to="#发布大概流程">发布大概流程</router-link></li></ul></li></ul></nav>
<ul>
<li>搭建一个适合项目的脚手架有时候还是有必要的，除了增加你的技术以外，还可以在开发项目时更快的初始化。</li>
<li>今天就分享一下如何使用 TypeScript+NodeJs 编写一个 React 脚手架工具，不是很难，因为都是踩在巨人的肩膀上。</li>
</ul>
<h3 id="初始化-typescript-配置" tabindex="-1"><a class="header-anchor" href="#初始化-typescript-配置" aria-hidden="true">#</a> 初始化 TypeScript 配置</h3>
<ul>
<li>初始化 TypeScript 项目并创建 tsconfig.json 文件。</li>
</ul>
<div class="language-Basic line-numbers-mode" data-ext="Basic"><pre v-pre class="language-Basic"><code>tsc --init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>修改 tsconfig.json 配置文件。</li>
</ul>
<div class="language-JSON line-numbers-mode" data-ext="JSON"><pre v-pre class="language-JSON"><code>{
  &quot;compilerOptions&quot;: {
    &quot;target&quot;: &quot;es5&quot;, /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019' or 'ESNEXT'. */
    &quot;module&quot;: &quot;commonjs&quot;, /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. */
    &quot;outDir&quot;: &quot;./lib&quot;, /* 输出目录 */
    &quot;strict&quot;: true, /* 启用所有严格类型检查选项。 */
    &quot;baseUrl&quot;: &quot;./&quot;, /* 解析非绝对模块名称的基目录。 */
    /* 路径别名，主要针对于ts才有效果 */
    &quot;paths&quot;: {
      &quot;@/*&quot;: [
        &quot;src/*&quot;
      ]
    },
    &quot;esModuleInterop&quot;: true, /* 通过为所有导入创建命名空间对象，实现CommonJS和ES模块之间的互操作性。意味着“allowSyntheticDefaultImports”。 */
    &quot;experimentalDecorators&quot;: true, /* 启用对ES7装饰器的实验性支持。 */
    &quot;forceConsistentCasingInFileNames&quot;: true, /* 不允许对同一文件进行大小写不一致的引用。 */
    &quot;resolveJsonModule&quot;: true /* 允许导入JSON文件 */
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="初始化-package-json-文件" tabindex="-1"><a class="header-anchor" href="#初始化-package-json-文件" aria-hidden="true">#</a> 初始化 package.json 文件</h3>
<div class="language-Basic line-numbers-mode" data-ext="Basic"><pre v-pre class="language-Basic"><code>npm init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="安装依赖插件" tabindex="-1"><a class="header-anchor" href="#安装依赖插件" aria-hidden="true">#</a> 安装依赖插件</h3>
<div class="language-Basic line-numbers-mode" data-ext="Basic"><pre v-pre class="language-Basic"><code>npm i -S commander inquirer chalk download-git-repo execa handlebars log-symbols module-alias ora
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-Basic line-numbers-mode" data-ext="Basic"><pre v-pre class="language-Basic"><code>npm i -D @types/node
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>
<p>主要插件</p>
<ul>
<li><a href="https://github.com/tj/commander.js" target="_blank" rel="noopener noreferrer">commander<ExternalLinkIcon/></a>：一个命令行框架，用来解析用户命令行输入和参数；例如：rcm -v。</li>
<li><a href="https://github.com/SBoudrias/Inquirer.js" target="_blank" rel="noopener noreferrer">inquirer<ExternalLinkIcon/></a>：一个交互式命令行工具；例如：input 输入，confirm 确认等等。</li>
</ul>
</li>
<li>
<p>修饰插件</p>
<ul>
<li><a href="https://github.com/chalk/chalk" target="_blank" rel="noopener noreferrer">chalk<ExternalLinkIcon/></a>：给终端的字体加上颜色，显得更加炫酷。</li>
<li><a href="https://gitlab.com/flippidippi/download-git-repo#readme" target="_blank" rel="noopener noreferrer">download-git-repo<ExternalLinkIcon/></a>：下载并提取 Git 仓库，主要用来下载项目模板。</li>
<li><a href="https://github.com/sindresorhus/execa" target="_blank" rel="noopener noreferrer">execa<ExternalLinkIcon/></a>：NodeJs 运行 shell 命令，主要用来安装插件。</li>
<li><a href="https://github.com/handlebars-lang/handlebars.js" target="_blank" rel="noopener noreferrer">handlebars<ExternalLinkIcon/></a>：一个模板引擎，用来将用户提交的信息动态填充到文件中。主要用来下载模板之后，修改 package.json 文件。</li>
<li><a href="https://github.com/sindresorhus/log-symbols" target="_blank" rel="noopener noreferrer">log-symbols<ExternalLinkIcon/></a>：在终端上显示出 √ 或 × 等的图标。</li>
<li><a href="https://github.com/ilearnio/module-alias" target="_blank" rel="noopener noreferrer">module-alias<ExternalLinkIcon/></a>：用来取别名，主要是 JS 中加载。</li>
<li><a href="https://github.com/sindresorhus/ora" target="_blank" rel="noopener noreferrer">ora<ExternalLinkIcon/></a>：在终端上显示一些小图标，显示下载中的动画效果。</li>
<li><a href="https://github.com/DefinitelyTyped/DefinitelyTyped#readme" target="_blank" rel="noopener noreferrer">@types/node<ExternalLinkIcon/></a>：在 TS 中识别 NodeJs。</li>
</ul>
</li>
<li>
<p>package.json</p>
</li>
</ul>
<div class="language-JSON line-numbers-mode" data-ext="JSON"><pre v-pre class="language-JSON"><code>{
  &quot;name&quot;: &quot;react-cli-mine&quot;,
  &quot;version&quot;: &quot;1.0.0&quot;,
  &quot;private&quot;: false,
  &quot;description&quot;: &quot;This is a simple cli about react!&quot;,
  &quot;main&quot;: &quot;src/index.ts&quot;,
  &quot;bin&quot;: {
    &quot;rcm&quot;: &quot;bin/react-cli-mine.js&quot;
  },
  &quot;scripts&quot;: {
    &quot;start&quot;: &quot;start cmd /k &amp;&amp; npm run dev&quot;,
    &quot;dev&quot;: &quot;tsc -p tsconfig.json -w&quot;,
    &quot;test&quot;: &quot;echo \&quot;Error: no test specified\&quot; &amp;&amp; exit 1&quot;
  },
  &quot;keywords&quot;: [
    &quot;React&quot;,
    &quot;Cli&quot;,
    &quot;TypeScript&quot;,
    &quot;ES6+&quot;
  ],
  &quot;repository&quot;: {
    &quot;type&quot;: &quot;git&quot;,
    &quot;url&quot;: &quot;https://github.com/biaov/react-cli-mine.git&quot;
  },
  &quot;author&quot;: &quot;biaov &lt;biaov@qq.vom&gt;&quot;,
  &quot;license&quot;: &quot;ISC&quot;,
  &quot;dependencies&quot;: {
    &quot;chalk&quot;: &quot;^4.1.0&quot;,
    &quot;commander&quot;: &quot;^6.0.0&quot;,
    &quot;download-git-repo&quot;: &quot;^3.0.2&quot;,
    &quot;execa&quot;: &quot;^4.0.3&quot;,
    &quot;handlebars&quot;: &quot;^4.7.6&quot;,
    &quot;inquirer&quot;: &quot;^7.3.3&quot;,
    &quot;log-symbols&quot;: &quot;^4.0.0&quot;,
    &quot;module-alias&quot;: &quot;^2.2.2&quot;,
    &quot;ora&quot;: &quot;^4.0.5&quot;
  },
  &quot;devDependencies&quot;: {
    &quot;@types/node&quot;: &quot;^14.0.27&quot;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="编写一个简单的命令" tabindex="-1"><a class="header-anchor" href="#编写一个简单的命令" aria-hidden="true">#</a> 编写一个简单的命令</h3>
<ul>
<li>编写 <code v-pre>-v,--version</code>。</li>
<li>因为已经存在 version 属性了，所以我们只能使用它提供的 API 修改默认值。</li>
</ul>
<div class="language-TypeScript line-numbers-mode" data-ext="TypeScript"><pre v-pre class="language-TypeScript"><code>import { program } from &quot;commander&quot;;
import { version } from &quot;@/../package.json&quot;; // 引入版本号，这样每次更新的时候只要修改package.json文件即可，降低维护成本

program.version(version, &quot;-v, --version&quot;, &quot;输出版本号&quot;); // options 重写
program.parse(process.argv); // 处理参数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="本地测试" tabindex="-1"><a class="header-anchor" href="#本地测试" aria-hidden="true">#</a> 本地测试</h3>
<ul>
<li>在你的项目根目录运行 shell 命令。</li>
</ul>
<div class="language-Basic line-numbers-mode" data-ext="Basic"><pre v-pre class="language-Basic"><code>npm link
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-Basic line-numbers-mode" data-ext="Basic"><pre v-pre class="language-Basic"><code>rcm -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://img-blog.csdnimg.cn/20200812181437865.png" alt="在这里插入图片描述"></p>
<ul>
<li>更多的命令你可以自己完善了，也可以参考我的<a href="https://github.com/biaov/react-cli-mine" target="_blank" rel="noopener noreferrer">react-cli-mine<ExternalLinkIcon/></a>。</li>
<li>至于如何发布到<a href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer">NPM 库<ExternalLinkIcon/></a>，这里说一下大概流程，就不做详细讲解了。</li>
</ul>
<h3 id="发布大概流程" tabindex="-1"><a class="header-anchor" href="#发布大概流程" aria-hidden="true">#</a> 发布大概流程</h3>
<ul>
<li>必须要有一个<a href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer">NPM 库<ExternalLinkIcon/></a>账号，你可以去<a href="https://www.npmjs.com/signup" target="_blank" rel="noopener noreferrer">注册一个<ExternalLinkIcon/></a>。</li>
<li>有了账号之后，你就在本地 shell 命令中登录一下。</li>
</ul>
<div class="language-Basic line-numbers-mode" data-ext="Basic"><pre v-pre class="language-Basic"><code>npm login
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://img-blog.csdnimg.cn/20200812181453270.png" alt="在这里插入图片描述"></p>
<ul>
<li>运行发布命令</li>
</ul>
<div class="language-Basic line-numbers-mode" data-ext="Basic"><pre v-pre class="language-Basic"><code>npm publish
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>注意：
<ul>
<li>发布的时候，package.json 文件里的 private 属性要写上 false，表示不是私有的。不然发布不了。</li>
<li>每次的发布版本要比上一次的要高，最低的初始版本可以是 <code v-pre>0.0.1</code>。</li>
</ul>
</li>
</ul>
</div></template>


