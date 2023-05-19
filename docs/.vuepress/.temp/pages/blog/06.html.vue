<template><div><h1 id="使用-autoprefixer-和-postcss-cli-给-css-加上浏览器厂商前缀" tabindex="-1"><a class="header-anchor" href="#使用-autoprefixer-和-postcss-cli-给-css-加上浏览器厂商前缀" aria-hidden="true">#</a> 使用 autoprefixer 和 postcss-cli 给 css 加上浏览器厂商前缀</h1>
<h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h2>
<nav class="table-of-contents"><ul><li><router-link to="#目录">目录</router-link><ul><li><router-link to="#一、创建-package-json-文件">一、创建 package.json 文件</router-link></li><li><router-link to="#二、安装所依赖的插件">二、安装所依赖的插件</router-link></li></ul></li></ul></nav>
<ul>
<li>在写 css 的时候，总会使用到 css3 的许多好的东西，但是有一个我们不得不考虑的问题，那就是兼容性，通过 Can I use 这个网站我们就会发现兼容性的东西真多。</li>
<li>但是我们在写 css 的过程中，每一个都去手写的话，就会降低自己的开发效率。所以我们应该要让它自动给所有的 css 文件添加浏览器厂商前缀。因此我们可以使用 autoprefixer 这个插件来自动给 css 文件加上浏览器厂商前缀。</li>
<li>那么就开始吧，首先新建一个文件夹，在文件夹里打开命令提示符（在文件夹的空白区域 shift+鼠标右击）</li>
</ul>
<h3 id="一、创建-package-json-文件" tabindex="-1"><a class="header-anchor" href="#一、创建-package-json-文件" aria-hidden="true">#</a> 一、创建 package.json 文件</h3>
<p>1.运行命令 npm init。第一项为你创建的项目名称，这个就不多说了，一直按 Enter（回车）。</p>
<h3 id="二、安装所依赖的插件" tabindex="-1"><a class="header-anchor" href="#二、安装所依赖的插件" aria-hidden="true">#</a> 二、安装所依赖的插件</h3>
<ol>
<li><strong>运行命令 npm i autoprefixer postcss-cli -D -g</strong>。-D 表示 -save-dev 安装到开发项；-g 表示全局安装。
a. 如果想了解<a href="https://www.npmjs.com/package/postcss-cli" target="_blank" rel="noopener noreferrer">postcss-cli<ExternalLinkIcon/></a>或者<a href="https://www.npmjs.com/package/autoprefixer" target="_blank" rel="noopener noreferrer">autoprefixer<ExternalLinkIcon/></a>的更多用法你可以直接点击进入。</li>
<li><strong>在 package.json 文件配置 browserslist</strong></li>
</ol>
<div class="language-JSON line-numbers-mode" data-ext="JSON"><pre v-pre class="language-JSON"><code>&quot;browserslist&quot;: [&quot;last 5 version&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>a. 如果想了解<a href="https://www.npmjs.com/package/browserslist" target="_blank" rel="noopener noreferrer">browserslist<ExternalLinkIcon/></a>的更多用法你可以直接点击进入。 3. <strong>在根目录先创建 src 文件夹，在 src 里创建 css 文件夹，之后把你需要转化的 css 文件夹或 css 文件放到此目录下</strong>（提示：最好此 css 文件夹下只有 css 文件）。 4. <strong>在 package.json 文件中的 script 里配置运行命令</strong>。</p>
<div class="language-JSON line-numbers-mode" data-ext="JSON"><pre v-pre class="language-JSON"><code>&quot;scripts&quot;: {
    &quot;css&quot;: &quot;npx postcss src/css -u autoprefixer -d dist/css&quot;,
    &quot;test&quot;: &quot;echo \&quot;Error: no test specified\&quot; &amp;&amp; exit 1&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>a. 解释一下： src/css 表示转化之前目录名，dis/css 表示转化之后目录名，-u 表示--use 及需要使用的插件，-d 表示-out-dir 及需要输出的命令。 5. <strong>运行命令 npm run css</strong></p>
<ul>
<li>查看前后对比效果图</li>
</ul>
<p><img src="https://img-blog.csdnimg.cn/20190312164737482.png" alt="img"></p>
<p>这里分享一下我的演示目录和 package.json 文件</p>
<p><img src="https://img-blog.csdnimg.cn/20190312165222492.png" alt="img"></p>
<p><img src="https://img-blog.csdnimg.cn/20190312165244650.png" alt="img"></p>
<p>解释一下：里面有一些文件或许你没有，没有关系，因为我这里还使用了 babel 把 es6 转换成 es5，所以略有不同。</p>
<p>因为 es6 的语法糖有很多，所以我们在开发的时候喜欢使用 es6 的东西。但是还是老问题--兼容性。所有需要使用 babel。当然，如果你想要了解怎么一次性把所有的 js 文件里的 es6 转为 es5 可以点击<a href="https://github.com/biaov/babel-autoprefixer" target="_blank" rel="noopener noreferrer">babel<ExternalLinkIcon/></a>（这里我解释了 autoprefixer 的使用和 babel 的使用）</p>
<p>总结：虽然只是一个小小的 autoprefixer 的使用，但是里面还是涉及到很多有用的知识的。最后通过这种自动化的方法，即通过 autoprefixer 自动把所有的 css 文件加上浏览器厂商前缀的方法，提升了我们的效率。</p>
</div></template>


