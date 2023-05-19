<template><div><h1 id="谈一谈使用-webpack-开发时-vue-组件之间的数据传递" tabindex="-1"><a class="header-anchor" href="#谈一谈使用-webpack-开发时-vue-组件之间的数据传递" aria-hidden="true">#</a> 谈一谈使用 webpack 开发时，Vue 组件之间的数据传递</h1>
<h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h2>
<nav class="table-of-contents"><ul><li><router-link to="#目录">目录</router-link><ul><li><router-link to="#一、父组件传递给子组件数据">一、父组件传递给子组件数据</router-link></li><li><router-link to="#二、子组件传递给父组件数据">二、子组件传递给父组件数据</router-link></li><li><router-link to="#三、父组件直接获取子组件中数据">三、父组件直接获取子组件中数据</router-link></li><li><router-link to="#四、子组件直接获取父组件中数据">四、子组件直接获取父组件中数据</router-link></li><li><router-link to="#五、兄弟组件之间传递数据">五、兄弟组件之间传递数据</router-link></li><li><router-link to="#总结">总结</router-link></li></ul></li></ul></nav>
<ul>
<li>我们在学习 Vue 的时候，难免会使用各个组件之间传递数据。</li>
<li>先来介绍一下 Vue 中组件传递的方式，有<strong>父组件传递给子组件数据</strong>，<strong>子组件传递给父组件数据</strong>，<strong>父组件直接获取子组件中数据</strong>，<strong>子组件直接获取父组件数据</strong>以及<strong>兄弟组件之间传递数据</strong>这五种方式。</li>
<li>接下来介绍一下这五种组件传递数据的方式在 webpack 中如何使用的。</li>
</ul>
<h3 id="一、父组件传递给子组件数据" tabindex="-1"><a class="header-anchor" href="#一、父组件传递给子组件数据" aria-hidden="true">#</a> 一、父组件传递给子组件数据</h3>
<ul>
<li><strong>第一步，新建一个子组件放在 components 文件里，随便写的内容</strong>。</li>
</ul>
<p><img src="https://img-blog.csdn.net/20180808161911222" alt="img"></p>
<ul>
<li><strong>第二步，在父组件中引入子组件，注册组件，使用组件</strong>。</li>
</ul>
<p><img src="https://img-blog.csdn.net/2018080816240942" alt="img"></p>
<ul>
<li>
<p>这里说一个题外话，关于组件的命名，定义组件名的方式有两种：使用 kebab-case（短横线分隔命名）和使用 PascalCase（驼峰式命名）。我这里使用的是 PascalCase（驼峰式命名），如果想详细了解组件命名，请点击<a href="https://cn.vuejs.org/v2/guide/components-registration.html" target="_blank" rel="noopener noreferrer">这里<ExternalLinkIcon/></a>。</p>
</li>
<li>
<p><strong>第三步，在父组件中使用自定义属性传递数据</strong>。</p>
</li>
</ul>
<p><img src="https://img-blog.csdn.net/20180808163518117" alt="img"></p>
<ul>
<li><strong>第四步，在子组件中使用 props 接受父组件传递过来的数据</strong>。</li>
</ul>
<p><img src="https://img-blog.csdn.net/20180808164047869" alt="img"></p>
<ul>
<li>这里说一个题外话，props 接受数据的两种方式：数组和对象。上面是数组，下面是对象。</li>
</ul>
<p><img src="https://img-blog.csdn.net/20180808164610416" alt="img"></p>
<ul>
<li>这种方式可以过滤掉一些数据。我这里传递的数据类型是字符串。如果传递的是对象或者数组的时候，那么 default 会略有不同。</li>
</ul>
<p><img src="https://img-blog.csdn.net/20180808165204682" alt="img">
<img src="https://img-blog.csdn.net/20180808165301635" alt="img"></p>
<ul>
<li>可以使用 ES6 简写成：
<ul>
<li>如果想详细了解 props 接收数据，请点击<a href="https://cn.vuejs.org/v2/guide/components-props.html" target="_blank" rel="noopener noreferrer">这里<ExternalLinkIcon/></a>。</li>
<li>我们使用钩子函数 mounted 在控制台看一下。</li>
</ul>
</li>
</ul>
<p><img src="https://img-blog.csdn.net/20180808165630963" alt="img"></p>
<p><img src="https://img-blog.csdn.net/20180808165731554" alt="img"></p>
<h3 id="二、子组件传递给父组件数据" tabindex="-1"><a class="header-anchor" href="#二、子组件传递给父组件数据" aria-hidden="true">#</a> 二、子组件传递给父组件数据</h3>
<ul>
<li><strong>第一步，在子组件中通过使用$emit()自定义方法，传递数据</strong>。</li>
</ul>
<p><img src="https://img-blog.csdn.net/20180808171230564" alt="img"></p>
<ul>
<li><strong>第二步，在父组件中通过自定义事件，接收参数并在控制台中查看</strong>。</li>
</ul>
<p><img src="https://img-blog.csdn.net/20180808171722897" alt="img">
<img src="https://img-blog.csdn.net/20180808171809594" alt="img"></p>
<h3 id="三、父组件直接获取子组件中数据" tabindex="-1"><a class="header-anchor" href="#三、父组件直接获取子组件中数据" aria-hidden="true">#</a> 三、父组件直接获取子组件中数据</h3>
<ul>
<li>在父组件中通过给子组件设置 ref 属性，从而通过$ref 获取数据。</li>
</ul>
<p><img src="https://img-blog.csdn.net/2018080817272895" alt="img"></p>
<p><img src="https://img-blog.csdn.net/20180808172805917" alt="img"></p>
<p><img src="https://img-blog.csdn.net/2018080817284053" alt="img"></p>
<h3 id="四、子组件直接获取父组件中数据" tabindex="-1"><a class="header-anchor" href="#四、子组件直接获取父组件中数据" aria-hidden="true">#</a> 四、子组件直接获取父组件中数据</h3>
<ul>
<li>在子组件中通过$parent 获取父组件数据</li>
</ul>
<p><img src="https://img-blog.csdn.net/20180808173122749" alt="img"></p>
<p><img src="https://img-blog.csdn.net/20180808173334865" alt="img"></p>
<p><img src="https://img-blog.csdn.net/20180808173411301" alt="img"></p>
<p><img src="https://img-blog.csdn.net/20180808173505317" alt="img"></p>
<h3 id="五、兄弟组件之间传递数据" tabindex="-1"><a class="header-anchor" href="#五、兄弟组件之间传递数据" aria-hidden="true">#</a> 五、兄弟组件之间传递数据</h3>
<p><img src="https://img-blog.csdn.net/20180808173650543" alt="img"></p>
<ul>
<li><strong>第一步，新建一个 bus.js 文件夹放在 src 目录下</strong>。</li>
</ul>
<p><img src="https://img-blog.csdn.net/20180808173923301" alt="img"></p>
<ul>
<li><strong>第二步，在 bus.js 里创建一个 vue 实例</strong>。</li>
</ul>
<p><img src="https://img-blog.csdn.net/20180808174006857" alt="img"></p>
<p>*  <strong>第三步，在 components 目录下新建一个组件 demo2 并在里面引入总线 bus.js 文件，并通过 bus.$emit()作为数据发送方，发送数据</strong>。</p>
<p><img src="https://img-blog.csdn.net/20180808175243527" alt="img"></p>
<ul>
<li><strong>第四步，在共同的父组件中引入子组件 demo2.vue，并注册使用</strong>。</li>
</ul>
<p><img src="https://img-blog.csdn.net/20180808175500367" alt="img"></p>
<p>* <strong>第五步，在接收数据的子组件（demo.vue）里引入总线 bus.js 文件，并通过 bus.$on()接收数据</strong>。</p>
<p><img src="https://img-blog.csdn.net/20180808180202113" alt="img"></p>
<p><img src="https://img-blog.csdn.net/20180808180202113" alt="img"></p>
<h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3>
<p>以上就是使用 webpack 开发时，Vue 组件之间的数据传递的几种方式，关于兄弟之间的传递数据也有其他方法，比如 Vuex,这里不去细说了。</p>
<p>哈哈哈，接下来介绍一下在 Vue.js 官网上学习的小技巧。</p>
<p>先打开<a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">官网<ExternalLinkIcon/></a></p>
<p><img src="https://img-blog.csdn.net/20180808180751497" alt="img"></p>
<p>都是英文，把它变成中文。在网址 <code v-pre>https://vuejs.org/</code> 里的 <code v-pre>vuejs</code> 前面加上 <code v-pre>cn.</code> 就是中文版本了。</p>
<p>还没有完。。。。。。</p>
<p>点击进去右上角菜单生态系统里的 Vuex 里去</p>
<p><img src="https://img-blog.csdn.net/20180808181206269" alt="img"></p>
<p>怎么又是英文的呢？</p>
<p><img src="https://img-blog.csdn.net/20180808181321946" alt="img"></p>
<p>这个时候加 cn.不能变成中文的了。</p>
<p>这个时候我们在 <code v-pre>https://vuex.vuejs.org/</code> 的后面加上 <code v-pre>/zh</code>就又是中文的了，</p>
<p>哈哈哈哈~~~~</p>
<p>在导航栏可以直接选择多语言</p>
<p>中文的官网方便我们快速的学习 Vue 知识。</p>
</div></template>


