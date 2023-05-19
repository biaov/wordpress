<template><div><h1 id="前端跨域原理的一些猜想" tabindex="-1"><a class="header-anchor" href="#前端跨域原理的一些猜想" aria-hidden="true">#</a> 前端跨域原理的一些猜想</h1>
<h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h2>
<nav class="table-of-contents"><ul><li><router-link to="#目录">目录</router-link><ul><li><router-link to="#什么是跨域">什么是跨域</router-link></li><li><router-link to="#为什么会存在跨域">为什么会存在跨域</router-link></li><li><router-link to="#如何处理跨域">如何处理跨域</router-link></li></ul></li></ul></nav>
<h3 id="什么是跨域" tabindex="-1"><a class="header-anchor" href="#什么是跨域" aria-hidden="true">#</a> 什么是跨域</h3>
<ul>
<li>每一个 web 服务都是一个区域，当两个 web 服务之间相互通讯时，所以产生了跨域。</li>
</ul>
<h3 id="为什么会存在跨域" tabindex="-1"><a class="header-anchor" href="#为什么会存在跨域" aria-hidden="true">#</a> 为什么会存在跨域</h3>
<ul>
<li>这是由于浏览器的同源策略的限制。同源策略规定了如果不是同源的服务，相互之间通讯是不允许的，因为这样可能存在安全问题。</li>
<li>同源策略：
<ul>
<li>同协议、同域名、同端口</li>
</ul>
</li>
</ul>
<p><img src="https://img-blog.csdnimg.cn/20200608153852511.png" alt="同源策略"></p>
<h3 id="如何处理跨域" tabindex="-1"><a class="header-anchor" href="#如何处理跨域" aria-hidden="true">#</a> 如何处理跨域</h3>
<ul>
<li>如果不是相互通讯的话即可以不受同源策略的影响。</li>
<li>例如：script 标签和 iframe 标签，都是属于引用外部资源，不存在跨域问题，即不受同源策略的影响。</li>
</ul>
<h4 id="跨域方法" tabindex="-1"><a class="header-anchor" href="#跨域方法" aria-hidden="true">#</a> 跨域方法</h4>
<h5 id="jsonp" tabindex="-1"><a class="header-anchor" href="#jsonp" aria-hidden="true">#</a> JSONP</h5>
<ul>
<li>通过 script 标签引用接口出传递回调函数，通过回调函数接收参数的方法接收数据</li>
</ul>
<h5 id="iframe" tabindex="-1"><a class="header-anchor" href="#iframe" aria-hidden="true">#</a> Iframe</h5>
<ul>
<li>document.domain</li>
<li>location.hash</li>
<li>window.name</li>
<li>postMessage</li>
</ul>
<h5 id="cors" tabindex="-1"><a class="header-anchor" href="#cors" aria-hidden="true">#</a> CORS</h5>
<ul>
<li>设置跨域资源共享，允许所有的服务访问我的服务。即告诉浏览器不要限制别的服务访问我的服务。</li>
<li>设置 Access-Control-Allow-Origin。</li>
</ul>
<h5 id="proxy-代理" tabindex="-1"><a class="header-anchor" href="#proxy-代理" aria-hidden="true">#</a> Proxy 代理</h5>
<ul>
<li>proxy 对象通过拦截你的请求，然后开启一个 nodejs 服务去访问你的接口，没有通过浏览器，所以也不受同源策略的影响。</li>
</ul>
<h5 id="websocket-协议" tabindex="-1"><a class="header-anchor" href="#websocket-协议" aria-hidden="true">#</a> WebSocket 协议</h5>
<ul>
<li>该协议规定直接允许跨域通讯，即不存在跨域。</li>
</ul>
</div></template>


