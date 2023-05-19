<template><div><h1 id="vuejs-打包之后遇到的坑" tabindex="-1"><a class="header-anchor" href="#vuejs-打包之后遇到的坑" aria-hidden="true">#</a> VueJs 打包之后遇到的坑</h1>
<p>最近在用 webpack+vue 写项目，经过几天的熬夜加班改 BUG，终于把基本的框架给写完了，后面只要加一些小功能就可以了，太好吧！先来 npm run build 打包出来看看吧！</p>
<p><img src="https://img-blog.csdn.net/20180601161940667" alt="img"></p>
<p>打包中...，我们用本地服务器打开看一下。</p>
<p>额，不看不知道，一看吓一跳，坑咋这么多呢！但是作为一名积极向上的 IT 从业者，填坑吧。</p>
<h2 id="打包之后没有被渲染出来" tabindex="-1"><a class="header-anchor" href="#打包之后没有被渲染出来" aria-hidden="true">#</a> <strong>打包之后没有被渲染出来</strong></h2>
<p><img src="https://img-blog.csdn.net/20180601162517294" alt="img"></p>
<p>怎么回事，刚打开就告诉我啥也没有，这是要搞事情的前奏啊！，我们看一下错误信息，告诉我路径有问题，默默的看一下自己的地址栏和自己的文件所在目录，原来是我的打包文件没有放到根目录下，这个时候我们可以把我们的两个文件放到根目录下，但是作为一名有个性的 IT 人士，当然要看有没有其他方法。从上面的路径中隐隐约约有点预感，static 是直接相对于根目录，说明这有可能打包的时候，有可能设置了绝对路径，如果我改成相对路径，那不就可以了吗。</p>
<p><img src="https://img-blog.csdn.net/2018060116371782" alt="img"></p>
<p>我们去看一下项目文件下的 config&gt;index.js 找到里面的 build 下的 assetsPublicPath:'/'，把它改成 assetsPublicPath:'./'，加个小点表示相对路径，不加表示绝对路径。npm run build 运行。成功。</p>
<h2 id="路由-router-mode-history-导致页面不能渲染问题" tabindex="-1"><a class="header-anchor" href="#路由-router-mode-history-导致页面不能渲染问题" aria-hidden="true">#</a> <strong>路由（router）mode:'history',导致页面不能渲染问题</strong></h2>
<p><img src="https://img-blog.csdn.net/20180601164610644" alt="img"></p>
<p>地址栏的那个#怎么那么让我不舒服呢！对于有轻度强迫症的我来说，这是不能忍不了的。</p>
<p>我们在项目打包前，开发项目时（npm start），在 vueRouter 里设置 mode:&quot;history&quot;.可以去掉#号。</p>
<p>这里强行解释一番：</p>
<p>路由（router）默认 hash 模式，使用 URL 的 hash 来模拟一个完整的 URL，于是当 URL 改变时，页面不会重新加载，因为对于正常的页面来说，更换 URl 一定是会导致页面的更换的， 而只有更换 URL 中的查询字符串和 hash 值的时候才不会重新加载页面。</p>
<p>路由（router）的 history 模式，这种模式充分利用了 history.pushState API 来完成 URL 的跳转而不需要重新加载页面。没有#号。</p>
<p>npm run build 打包中....</p>
<p>什么鬼，为什么我的路由（router）部分没有被渲染出来，这就是 history 的坑了，解决方法一，会到以前的 hash 模式；解决方法二，设置 routes 里的路由 name。</p>
<p><img src="https://img-blog.csdn.net/20180601170541383" alt="img"></p>
<p>这是因为路由（router）无法找到路径中的组件，所以也就无法渲染了。只需要修改 src &gt; router &gt; index.js，在每个 path 后加上组件名称就行了，这样就可以了。</p>
<p>这里有个小问题:</p>
<p><img src="https://img-blog.csdn.net/20180601171646152" alt="img"></p>
<p><img src="https://img-blog.csdn.net/20180601171715884" alt="img"></p>
<p>为了我们的时间考虑，还是放到根目录吧！</p>
<p>首页没有问题了，逐个链接测试一下。</p>
<p><img src="https://img-blog.csdn.net/20180601171957510" alt="img">
<img src="https://img-blog.csdn.net/20180601172306572" alt="img"></p>
<p>这是什么鬼，路径和其他图片路径一样，图片也存在啊，为啥你就是这么傲娇，就是报错。来看一下控制台。</p>
<p><img src="https://img-blog.csdn.net/20180601172535256" alt="img"></p>
<p>结合之前的./原来是相对路径问题，是我的开发文件 assets 下多个图片文件夹。</p>
<p><img src="https://img-blog.csdn.net/20180601172830425" alt="img"></p>
<p>这个时候为了开发项目的可读性和维护性。只能默默的把前面改的相对路径'./'改回绝对路径'/'了。这就尴尬了，额额额，大家就当没看到哈！</p>
<p>暂时遇到这些坑，这是自己写项目的有感而发，希望对看过这篇文章的人有所帮助。</p>
</div></template>


