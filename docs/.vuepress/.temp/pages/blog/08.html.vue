<template><div><h1 id="浅谈-uni-app-页面传值问题" tabindex="-1"><a class="header-anchor" href="#浅谈-uni-app-页面传值问题" aria-hidden="true">#</a> 浅谈 uni-app 页面传值问题</h1>
<h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h2>
<nav class="table-of-contents"><ul><li><router-link to="#目录">目录</router-link><ul><li><router-link to="#前言">前言</router-link></li><li><router-link to="#uni-app-页面传值">uni-app 页面传值</router-link></li></ul></li></ul></nav>
<h3 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h3>
<ul>
<li>作为一个前端开发者，现在大前端的概念比较深入人心，比如小程序、Android 和 iOS 跨端，前端 H5 等。而最近在使用 uni-app 跨端开发 App，遇到些问题分享一下。</li>
</ul>
<h3 id="uni-app-页面传值" tabindex="-1"><a class="header-anchor" href="#uni-app-页面传值" aria-hidden="true">#</a> uni-app 页面传值</h3>
<h4 id="传递基础类型数据" tabindex="-1"><a class="header-anchor" href="#传递基础类型数据" aria-hidden="true">#</a> 传递基础类型数据</h4>
<div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre v-pre class="language-JavaScript"><code>// A页面-传递参数
let value = &quot;参数值&quot;;
uni.navigateTo({
  url:`/pages/home/index?data=${value}`
});
// B页面-接收参数
onLoad(options) {
  let value = options.data;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="传递接引类型数据" tabindex="-1"><a class="header-anchor" href="#传递接引类型数据" aria-hidden="true">#</a> 传递接引类型数据</h4>
<div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre v-pre class="language-JavaScript"><code>// A页面-传递参数
let obj = { value: &quot;参数值&quot; };
uni.navigateTo({
  url:`/pages/home/index?data=${JSON.stringify(obj)}`
});
// B页面-接收参数
onLoad(options) {
  let obj = JSON.parse(options.data);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="传递数据过长或者数据包含特殊字符" tabindex="-1"><a class="header-anchor" href="#传递数据过长或者数据包含特殊字符" aria-hidden="true">#</a> 传递数据过长或者数据包含特殊字符</h4>
<ul>
<li>当你的数据过长传递数据（比如：base64 的图片数据）或者特殊数据（比如：?），如果用以上两种方法时会发现接收到的值不完整。</li>
<li>所以这个时候我们可以加上 encodeURIComponent 和 decodeURIComponent 方法</li>
</ul>
<div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre v-pre class="language-JavaScript"><code>// A页面-传递参数
let obj = { value: &quot;???&quot; };
uni.navigateTo({
  url:`/pages/home/index?data=${encodeURIComponent(JSON.stringify(obj))}`
});
// B页面-接收参数
onLoad(options) {
  let obj = JSON.parse(decodeURIComponent(options.data));
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>嗯，暂时就这些，继续踩坑中...</li>
</ul>
</div></template>


