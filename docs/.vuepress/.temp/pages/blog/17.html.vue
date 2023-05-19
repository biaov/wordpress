<template><div><h1 id="使用-nodejs-typescript-开发一个自动化部署程序" tabindex="-1"><a class="header-anchor" href="#使用-nodejs-typescript-开发一个自动化部署程序" aria-hidden="true">#</a> 使用 NodeJs + TypeScript 开发一个自动化部署程序</h1>
<ul>
<li>前端工程化已经很普遍了，让我们来开发一个自动化部署程序。</li>
</ul>
<h2 id="什么时候使用自动化部署" tabindex="-1"><a class="header-anchor" href="#什么时候使用自动化部署" aria-hidden="true">#</a> 什么时候使用自动化部署</h2>
<ul>
<li>当你需要节省时间时
<ul>
<li>自动化部署主要可以节省你打包和上传服务器的时间。</li>
<li>如果你想节省上线时间，则不需要自动化部署，因为自动化部署不一定有你本地上传快。</li>
</ul>
</li>
<li>当你需要节省服务器的内存时
<ul>
<li>自动化部署势必会占用你服务器的内存和 CPU 使用率。</li>
</ul>
</li>
</ul>
<h2 id="自动化部署原理" tabindex="-1"><a class="header-anchor" href="#自动化部署原理" aria-hidden="true">#</a> 自动化部署原理</h2>
<ul>
<li>当你在提交代码后，Git 仓库通过 Webhooks 发送一个 POST 请求到你的服务器。</li>
<li>当你的服务器程序接受到 Webhooks 的请求会执行如下操作：
<ul>
<li>查看是否存在项目：
<ul>
<li>存在：在服务器指定目录拉取项目。</li>
<li>不存在：克隆项目到服务器指定目录。</li>
</ul>
</li>
<li>安装依赖。</li>
<li>执行打包命令。</li>
<li>打包完成。</li>
</ul>
</li>
<li>自动化部署成功。</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>至于如何配置 Webhooks，请看我的上一篇博文的下面</p>
</div>
<h3 id="自动化部署流程图" tabindex="-1"><a class="header-anchor" href="#自动化部署流程图" aria-hidden="true">#</a> 自动化部署流程图</h3>
<div class="language-Flow line-numbers-mode" data-ext="Flow"><pre v-pre class="language-Flow"><code>start=&gt;start: 开始
submitCode=&gt;operation: 提交代码
webhooksRequest=&gt;operation: Webhooks 发送 POST 请求
serverReceive=&gt;operation: 服务器程序接收请求
isExist=&gt;condition: 是否存在项目？
existed=&gt;operation: 在服务器指定目录拉取项目
nonexist=&gt;operation: 克隆项目到服务器指定目录
install=&gt;operation: 安装项目依赖
installFinish=&gt;inputoutput: 项目依赖安装完成
build=&gt;operation: 执行打包命令
buildFinish=&gt;inputoutput: 打包完成
success=&gt;inputoutput: 自动化部署成功
end=&gt;end: 结束

start-&gt;submitCode-&gt;webhooksRequest-&gt;serverReceive-&gt;isExist
isExist(yes)-&gt;existed-&gt;install
isExist(no)-&gt;nonexist-&gt;install
install-&gt;installFinish-&gt;build-&gt;buildFinish-&gt;success-&gt;end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="开始开发" tabindex="-1"><a class="header-anchor" href="#开始开发" aria-hidden="true">#</a> 开始开发</h2>
<h3 id="搭建整体架子" tabindex="-1"><a class="header-anchor" href="#搭建整体架子" aria-hidden="true">#</a> 搭建整体架子</h3>
<h4 id="初始化项目" tabindex="-1"><a class="header-anchor" href="#初始化项目" aria-hidden="true">#</a> 初始化项目</h4>
<div class="language-Basic line-numbers-mode" data-ext="Basic"><pre v-pre class="language-Basic"><code>tsc --init
npm init -y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="安装项目依赖" tabindex="-1"><a class="header-anchor" href="#安装项目依赖" aria-hidden="true">#</a> 安装项目依赖</h4>
<ul>
<li><a href="https://www.npmjs.com/package/execa" target="_blank" rel="noopener noreferrer">execa<ExternalLinkIcon/></a>：让 NodeJs 执行 Shell 命令。</li>
<li><a href="https://www.npmjs.com/package/express" target="_blank" rel="noopener noreferrer">express<ExternalLinkIcon/></a>：NodeJs 的框架。</li>
<li><a href="https://www.npmjs.com/package/module-alias" target="_blank" rel="noopener noreferrer">module-alias<ExternalLinkIcon/></a>：使用 alias 引入文件。</li>
<li><a href="https://www.npmjs.com/package/multiparty" target="_blank" rel="noopener noreferrer">multiparty<ExternalLinkIcon/></a>：接收 post 请求参数。</li>
<li><a href="https://www.npmjs.com/package/yamljs" target="_blank" rel="noopener noreferrer">yamljs<ExternalLinkIcon/></a>：识别 YAML 文件。</li>
<li><a href="https://www.npmjs.com/package/@types/node" target="_blank" rel="noopener noreferrer">@types/node<ExternalLinkIcon/></a>：在 NodeJs 里识别 TypeScript。</li>
<li><a href="https://www.npmjs.com/package/clean-webpack-plugin" target="_blank" rel="noopener noreferrer">clean-webpack-plugin<ExternalLinkIcon/></a>：清理打包目录。</li>
<li><a href="https://www.npmjs.com/package/nodemon" target="_blank" rel="noopener noreferrer">nodemon<ExternalLinkIcon/></a>：本地执行 node 程序。</li>
<li><a href="https://www.npmjs.com/package/webpack" target="_blank" rel="noopener noreferrer">webpack<ExternalLinkIcon/></a>：webpack。</li>
<li><a href="https://www.npmjs.com/package/webpack-cli" target="_blank" rel="noopener noreferrer">webpack-cli<ExternalLinkIcon/></a>：webpack 脚手架。</li>
</ul>
<div class="language-Basic line-numbers-mode" data-ext="Basic"><pre v-pre class="language-Basic"><code>npm i -S execa express module-alias multiparty yamljs
npm i -D @types/node clean-webpack-plugin nodemon webpack webpack-cli
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="配置-webpack" tabindex="-1"><a class="header-anchor" href="#配置-webpack" aria-hidden="true">#</a> 配置 webpack</h4>
<details>
<summary>✅ 查看 webpack.config.js 文件</summary>
<div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre v-pre class="language-JavaScript"><code>const { resolve } = require(&quot;path&quot;);
const { CleanWebpackPlugin } = require(&quot;clean-webpack-plugin&quot;);
const config = {
  mode: &quot;production&quot;,
  entry: resolve(__dirname, &quot;./temporary/index.js&quot;),
  output: {
    path: resolve(__dirname, &quot;./dist&quot;),
    filename: &quot;index.js&quot;
  },
  resolve: {
    alias: {
      &quot;@&quot;: resolve(__dirname, &quot;./temporary&quot;)
    }
  },
  target: &quot;node&quot;,
  externals: {},
  plugins: [new CleanWebpackPlugin()]
};
module.exports = config;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h4 id="配置-script-命令" tabindex="-1"><a class="header-anchor" href="#配置-script-命令" aria-hidden="true">#</a> 配置 script 命令</h4>
<div class="language-JSON line-numbers-mode" data-ext="JSON"><pre v-pre class="language-JSON"><code>{
  &quot;scripts&quot;: {
    &quot;start&quot;: &quot;start cmd /k npm run dev:nm &amp; npm run dev:ts&quot;,
    &quot;dev:ts&quot;: &quot;tsc -p tsconfig.json -w&quot;,
    &quot;dev:nm&quot;: &quot;nodemon temporary -w&quot;,
    &quot;serve&quot;: &quot;pm2 start dist -n automated&quot;,
    &quot;build&quot;: &quot;webpack --config webpack.config.js&quot;,
    &quot;test&quot;: &quot;echo \&quot;Error: no test specified\&quot; &amp;&amp; exit 1&quot;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="nodejs-执行-shell-命令" tabindex="-1"><a class="header-anchor" href="#nodejs-执行-shell-命令" aria-hidden="true">#</a> NodeJs 执行 shell 命令</h4>
<div class="language-TypeScript line-numbers-mode" data-ext="TypeScript"><pre v-pre class="language-TypeScript"><code>(async()=&gt;{
  // clone 项目到本地
  // output：项目 clone 指定目录
  await execa(&quot;git&quot;, [&quot;clone&quot;, &quot;clone地址&quot;], {
    cwd: output,
    stdio: &quot;inherit&quot;
  });
})()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>经过一段时间的开发，开发完成</p>
</div>
<h4 id="服务器部署" tabindex="-1"><a class="header-anchor" href="#服务器部署" aria-hidden="true">#</a> 服务器部署</h4>
<ul>
<li><a href="https://github.com/biaov/automated/blob/main/deploy.md" target="_blank" rel="noopener noreferrer">服务器部署文档<ExternalLinkIcon/></a></li>
</ul>
<h2 id="项目地址" tabindex="-1"><a class="header-anchor" href="#项目地址" aria-hidden="true">#</a> 项目地址</h2>
<ul>
<li><a href="https://github.com/biaov/automated" target="_blank" rel="noopener noreferrer">自动化部署程序<ExternalLinkIcon/></a></li>
</ul>
</div></template>


