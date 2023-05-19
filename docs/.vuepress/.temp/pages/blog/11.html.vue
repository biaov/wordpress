<template><div><h1 id="javascript-深拷贝封装" tabindex="-1"><a class="header-anchor" href="#javascript-深拷贝封装" aria-hidden="true">#</a> JavaScript 深拷贝封装</h1>
<h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h2>
<nav class="table-of-contents"><ul><li><router-link to="#目录">目录</router-link><ul><li><router-link to="#深拷贝和浅拷贝概述">深拷贝和浅拷贝概述</router-link></li><li><router-link to="#实现一层深拷贝的一些方法">实现一层深拷贝的一些方法</router-link></li><li><router-link to="#封装方法深拷贝">封装方法深拷贝</router-link></li></ul></li></ul></nav>
<h3 id="深拷贝和浅拷贝概述" tabindex="-1"><a class="header-anchor" href="#深拷贝和浅拷贝概述" aria-hidden="true">#</a> 深拷贝和浅拷贝概述</h3>
<h4 id="为什么会有深拷贝和浅拷贝" tabindex="-1"><a class="header-anchor" href="#为什么会有深拷贝和浅拷贝" aria-hidden="true">#</a> 为什么会有深拷贝和浅拷贝</h4>
<ul>
<li>JS 的数据类型分为基本类型和引用类型。
<ul>
<li>基本类型：直接存储在栈(stack)中的数据。</li>
<li>引用类型：存储的是该对象在栈中的引用（即指针），真实的数据存放在堆内存里。</li>
</ul>
</li>
<li>深拷贝和浅拷贝针对的是引用类型。理论上基本类型赋值都属于深拷贝，这是因为基本类型的不可变性。</li>
</ul>
<h4 id="深拷贝" tabindex="-1"><a class="header-anchor" href="#深拷贝" aria-hidden="true">#</a> 深拷贝</h4>
<ul>
<li>复制引用类型的真实数据。不直接复制引用地址（即指针）。</li>
</ul>
<h4 id="浅拷贝" tabindex="-1"><a class="header-anchor" href="#浅拷贝" aria-hidden="true">#</a> 浅拷贝</h4>
<ul>
<li>只复制引用地址（即指针）。不改变引用类型的真实数据</li>
</ul>
<h3 id="实现一层深拷贝的一些方法" tabindex="-1"><a class="header-anchor" href="#实现一层深拷贝的一些方法" aria-hidden="true">#</a> 实现一层深拷贝的一些方法</h3>
<h4 id="for-in-循环复制对象" tabindex="-1"><a class="header-anchor" href="#for-in-循环复制对象" aria-hidden="true">#</a> for in 循环复制对象</h4>
<div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre v-pre class="language-JavaScript"><code>const obj = { a: 1 }; // 需要被拷贝的对象
const obj2 = {}; // 拷贝的新对象
// 循环遍历
for (const key in obj) {
  Object.prototype.hasOwnProperty(obj, key) &amp;&amp; (obj2[key] = obj[key]);
}
obj2.a = 2; // 修改新的对象验证
console.log(obj.a); // 1
console.log(obj2.a); // 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="object-assgin" tabindex="-1"><a class="header-anchor" href="#object-assgin" aria-hidden="true">#</a> Object.assgin</h4>
<ul>
<li>这是 ES6 新增的静态方法，可用于深拷贝对象。</li>
<li>用于将所有<strong>可枚举属性</strong>的值从一个或多个源对象复制到目标对象。它将返回目标对象。</li>
</ul>
<div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre v-pre class="language-JavaScript"><code>const obj = { a: 1 }; // 需要被拷贝的对象
const obj2 = {}; // 拷贝的新对象
Object.assign(obj2, obj); // 深拷贝
obj2.a = 2; // 修改新的对象验证
console.log(obj.a); // 1
console.log(obj2.a); // 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="扩展运算符" tabindex="-1"><a class="header-anchor" href="#扩展运算符" aria-hidden="true">#</a> 扩展运算符</h4>
<ul>
<li>通过 <code v-pre>...</code> 扩展运算符来实现深拷贝。</li>
</ul>
<div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre v-pre class="language-JavaScript"><code>const obj = { a: 1 }; // 需要被拷贝的对象
const obj2 = { ...obj }; // 拷贝的新对象
obj2.a = 2; // 修改新的对象验证
console.log(obj.a); // 1
console.log(obj2.a); // 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="object-entries-foreach" tabindex="-1"><a class="header-anchor" href="#object-entries-foreach" aria-hidden="true">#</a> Object.entries + forEach</h4>
<ul>
<li>Object.entries 是 ES8 新增的静态方法。</li>
<li>返回一个给定对象自身可枚举属性的键值对数组，其排列与使用 for...in 循环遍历该对象时返回的顺序一致（区别在于 for-in 循环还会枚举原型链中的属性）。</li>
<li>forEach 为 ES5 的迭代遍历 API。</li>
</ul>
<div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre v-pre class="language-JavaScript"><code>const obj = { a: 1 }; // 需要被拷贝的对象
const obj2 = {}; // 拷贝的新对象
// 循环遍历
Object.entries(obj).forEach(elem =&gt; {
  obj2[elem[0]] = elem[1];
});
obj2.a = 2; // 修改新的对象验证
console.log(obj.a); // 1
console.log(obj2.a); // 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="json-parse-和-json-stringify" tabindex="-1"><a class="header-anchor" href="#json-parse-和-json-stringify" aria-hidden="true">#</a> JSON.parse 和 JSON.stringify</h4>
<ul>
<li>该方法可用于多层深拷贝。</li>
<li>原理：通过 JSON.stringify 把需要深拷贝的引用类型转成 JSON 字符串，而字符串是基本类型，所以通过 JSON.parse 把 JSON 字符串解析成引用类型其通过了<strong>字符串的不可变性</strong>实现深拷贝的目的。</li>
<li>注意：此方法虽然省事但是存在一些缺陷。
<ul>
<li>如果 obj 里面有时间对象，则 JSON.stringify 后再 JSON.parse 的结果，时间将只是字符串的形式。而不是时间对象。</li>
<li>如果 obj 里有 RegExp、Error 对象，则序列化的结果将只得到空对象。</li>
<li>如果 obj 里有函数，undefined，则序列化的结果会把函数或 undefined 丢失。</li>
<li>如果 obj 里有 NaN、Infinity 和 -Infinity，则序列化的结果会变成 null。</li>
<li>JSON.stringify() 只能序列化对象的可枚举的自有属性。
<ul>
<li>如果 obj 中的对象是有构造函数生成的，则使用 JSON.parse(JSON.stringify(obj)) 深拷贝后，会丢弃对象的 constructor。</li>
</ul>
</li>
<li>如果对象中存在循环引用的情况也无法正确实现深拷贝。</li>
</ul>
</li>
</ul>
<div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre v-pre class="language-JavaScript"><code>const obj = { a: 1 }; // 需要被拷贝的对象
const obj2 = JSON.parse(JSON.stringify(obj)); // 拷贝的新对象
obj2.a = 2; // 修改新的对象验证
console.log(obj.a); // 1
console.log(obj2.a); // 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="兼容性" tabindex="-1"><a class="header-anchor" href="#兼容性" aria-hidden="true">#</a> 兼容性</h4>
<ul>
<li>关于其中的兼容性可以考虑使用 <a href="https://www.babeljs.cn/" target="_blank" rel="noopener noreferrer">babel<ExternalLinkIcon/></a> 来转译成 ES5。</li>
</ul>
<h3 id="封装方法深拷贝" tabindex="-1"><a class="header-anchor" href="#封装方法深拷贝" aria-hidden="true">#</a> 封装方法深拷贝</h3>
<h4 id="支持类型" tabindex="-1"><a class="header-anchor" href="#支持类型" aria-hidden="true">#</a> 支持类型</h4>
<ul>
<li>暂时只支持 String,Number,Boolean,null,undefined,Object,Array,Date,RegExp,Error 类型的深拷贝。</li>
</ul>
<h4 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h4>
<div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre v-pre class="language-JavaScript"><code>/**
 * 变量类型判断
 * @param {String} type - 需要判断的类型
 * @param {Any} value - 需要判断的值
 * @returns {Boolean} - 是否该类型
 */
const IsType = (type, value) =&gt; Object.prototype.toString.call(value) === `[object ${type}]`;

/**
 * 深拷贝变量-递归算法(recursive algorithm)
 * 支持 String,Number,Boolean,null,undefined,Object,Array,Date,RegExp,Error 类型
 * @param {Any} arg - 需要深拷贝的变量
 * @returns {Any} - 拷贝完成的值
 */
const DeepCopyRA = arg =&gt; {
  const newValue = IsType(&quot;Object&quot;, arg) // 判断是否是对象
    ? {}
    : IsType(&quot;Array&quot;, arg) // 判断是否是数组
    ? []
    : IsType(&quot;Date&quot;, arg) // 判断是否是日期对象
    ? new arg.constructor(+arg)
    : IsType(&quot;RegExp&quot;, arg) || IsType(&quot;Error&quot;, arg) // 判断是否是正则对象或错误对象
    ? new arg.constructor(arg)
    : arg;
  // 判断是否是数组或对象
  if (IsType(&quot;Object&quot;, arg) || IsType(&quot;Array&quot;, arg)) {
    // 循环遍历
    for (const key in arg) {
      // 防止原型链的值
      Object.prototype.hasOwnProperty.call(arg, key) &amp;&amp; (newValue[key] = DeepCopyRA(arg[key]));
    }
  }
  return newValue;
};
const obj = { a: { a: 1 }, b: [1, 2, 3], c: new Date(), d: /^\d{6}$/, e: 5, f: undefined, g: null }; // 需要被拷贝的对象
const obj2 = DeepCopyRA(obj); // 拷贝的新对象
obj2.a.a = 2; // 修改新的对象验证
obj2.b[0] = 2; // 修改新的对象验证
console.log(obj); // { a: { a: 1 }, b: (3)[(1, 2, 3)], c: &quot;Thu Jun 18 2020 11:29:02 GMT+0800 (中国标准时间) {}&quot;, d: /^\d{6}$/, e: 5, f: undefined, g: null };
console.log(obj2); // { a: { a: 2 }, b: (3)[(2, 2, 3)], c: &quot;Thu Jun 18 2020 11:29:02 GMT+0800 (中国标准时间) {}&quot;, d: /^\d{6}$/, e: 5, f: undefined, g: null };
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><a href="https://github.com/biaov/MINE-H5-UI/blob/master/packages/MeAPI/function.js" target="_blank" rel="noopener noreferrer">更多 API 源码<ExternalLinkIcon/></a></li>
</ul>
</div></template>


