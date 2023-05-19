<template><div><h1 id="使用-axios-的-post-请求-node-js-后台接收不到参数解决方法" tabindex="-1"><a class="header-anchor" href="#使用-axios-的-post-请求-node-js-后台接收不到参数解决方法" aria-hidden="true">#</a> 使用 axios 的 post 请求，node.js 后台接收不到参数解决方法</h1>
<h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h2>
<nav class="table-of-contents"><ul><li><router-link to="#目录">目录</router-link><ul><li><router-link to="#前台请求成功">前台请求成功</router-link></li><li><router-link to="#后台接收成功">后台接收成功</router-link></li><li><router-link to="#解决方法-后台-req-on-data-方法">解决方法-------后台 req.on(&#39;data&#39;）方法</router-link></li></ul></li></ul></nav>
<p>简单说明一下，最近在写个人网站的后台管理系统，前端界面使用的是 Vue 框架，后台使用的是 Node.js。</p>
<p>因为后台管理系统有登录，所以在写的时候发现一个小问题，因为以前没有登录，所以用的都是 get 请求，后台一直用的是 req.query 接收参数，但是 post 请求完成之后，req.query 是一个空对象，req.params 也是空对象，接收不到参数。</p>
<h3 id="前台请求成功" tabindex="-1"><a class="header-anchor" href="#前台请求成功" aria-hidden="true">#</a> 前台请求成功</h3>
<p><img src="https://img-blog.csdnimg.cn/20190110095737777.png" alt="img"></p>
<p><img src="https://img-blog.csdnimg.cn/20190110095659353.png" alt="img"></p>
<p><img src="https://img-blog.csdnimg.cn/20190110095804625.png" alt="img"></p>
<h3 id="后台接收成功" tabindex="-1"><a class="header-anchor" href="#后台接收成功" aria-hidden="true">#</a> 后台接收成功</h3>
<p><img src="https://img-blog.csdnimg.cn/20190110100029894.png" alt="img"></p>
<p><img src="https://img-blog.csdnimg.cn/20190110100123687.png" alt="img"></p>
<p>当然最先开始的也就是网上各个搜索引擎各种搜，前端尝试过 URLSearchParams 方法，application/x-www-form-urlencoded 方法以及 Qs.stringify 方法。但是都没有什么用，感觉还是获取不到参数。</p>
<h3 id="解决方法-后台-req-on-data-方法" tabindex="-1"><a class="header-anchor" href="#解决方法-后台-req-on-data-方法" aria-hidden="true">#</a> 解决方法-------后台 req.on('data'）方法</h3>
<p>幸好还是解决了，前端不操作，后台使用 req.on('data'）接收参数可以解决。上代码。</p>
<p><img src="https://img-blog.csdnimg.cn/20190110101030688.png" alt="img"></p>
<p><img src="https://img-blog.csdnimg.cn/20190110101741284.png" alt="img"></p>
<p>当然，这是一种方法，还可以使用 req.body,不过要载入 body-parser 中间件。</p>
<p>其实上面主要原因在于 req.query 和 req.params 只能接收到 get 请求的参数。所以 post 请求要使用其他的接收参数方式，比如我使用的 req.on(&quot;data&quot;)，或者使用上面提到过的 req.body。</p>
<p>哈哈哈哈~……~</p>
</div></template>


