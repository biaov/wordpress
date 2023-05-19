<template><div><h1 id="electron-vue-实现输入法自动刷字数" tabindex="-1"><a class="header-anchor" href="#electron-vue-实现输入法自动刷字数" aria-hidden="true">#</a> Electron + Vue 实现输入法自动刷字数</h1>
<ul>
<li>思路：循环使用 <code v-pre>robotjs</code> 库模拟键盘点击，从而实现输入法刷自动刷字数的功能。</li>
</ul>
<h2 id="安装依赖" tabindex="-1"><a class="header-anchor" href="#安装依赖" aria-hidden="true">#</a> 安装依赖</h2>
<div class="language-Basic line-numbers-mode" data-ext="Basic"><pre v-pre class="language-Basic"><code>npm i robotjs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="vue-代码" tabindex="-1"><a class="header-anchor" href="#vue-代码" aria-hidden="true">#</a> Vue 代码</h3>
<ul>
<li>在 Vue 中编写一个文本域用来聚焦输入法焦点。</li>
<li>思路：当我们按下 S 键时，给 Electron 发送消息告诉 Electron 开始刷字数; 当我们按下 E 键时，告诉 Electron 停止自动刷。</li>
</ul>
<div class="language-Vue line-numbers-mode" data-ext="Vue"><pre v-pre class="language-Vue"><code>&lt;template&gt;
  &lt;textarea @keyup.stop=&quot;onKeyup&quot;&gt;&lt;/textarea&gt;
&lt;/template&gt;
&lt;script setup&gt;
// 键盘输入
const onKeyup = e =&gt; {
  switch (e.code) {
    case 'KeyS':
      // 给 Electron 发送消息，开始刷字数
      // ipcRenderer.invoke('wordNum', { type: 'start'})
      break
    case 'KeyE':
      // 给 Electron 发送消息，结束刷字数
      // ipcRenderer.invoke('wordNum', { type: 'end' })
      break
    default:
      break
  }
}
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="electron-代码" tabindex="-1"><a class="header-anchor" href="#electron-代码" aria-hidden="true">#</a> Electron 代码</h3>
<div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre v-pre class="language-JavaScript"><code>import robot from 'robotjs'

let wordNumStatus = true
// 开始刷数量
const startBrushNum = () =&gt; {
  setTimeout(() =&gt; {
    robot.keyTap('a') // a: 表示键盘 A 键
    wordNumStatus &amp;&amp; startBrushNum()
  }, 1000)
}
// 键盘输入字数
const wordNumAction = ({ type }) =&gt; {
  switch (type) {
    case 'start':
      wordNumStatus = true
      startBrushNum()
      break
    case 'end':
      wordNumStatus = false
      break
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3>
<ul>
<li>通过以上思路可以确定关键点在于 <code v-pre>robotjs</code> 库触发键盘模拟点击。</li>
<li>所以更加简单的方法就是使用 <code v-pre>NodeJs</code>, 在 <code v-pre>NodeJs</code> 中引入 <code v-pre>robotjs</code> 库模拟点击，一样可以实现刷字数。</li>
<li>不过需要引入 <code v-pre>keypress</code> 来监听键盘输入（其中一种库，还有其它库可以监听）。</li>
<li>Electron + Vue 如果有代码细节不清楚，参考 <a href="https://github.com/biaov/mine-desktop" target="_blank" rel="noopener noreferrer">Electron + Vue 实现源码<ExternalLinkIcon/></a></li>
</ul>
</div></template>


