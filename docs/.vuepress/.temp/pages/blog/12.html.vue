<template><div><h1 id="react-路由匹配的问题" tabindex="-1"><a class="header-anchor" href="#react-路由匹配的问题" aria-hidden="true">#</a> React 路由匹配的问题</h1>
<h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h2>
<nav class="table-of-contents"><ul><li><router-link to="#目录">目录</router-link><ul><li><router-link to="#前提">前提</router-link></li><li><router-link to="#安装路由">安装路由</router-link></li><li><router-link to="#配置-history-模式">配置 history 模式</router-link></li><li><router-link to="#react-路由匹配规则">React 路由匹配规则</router-link></li><li><router-link to="#完整路由组件">完整路由组件</router-link></li></ul></li></ul></nav>
<ul>
<li>最近在写 React 项目时，被 React 路由匹配的问题折磨的够呛，这里来分享一下其中的一些坑，以及我的路由配置<strong>组件</strong>。</li>
</ul>
<p><img src="https://img-blog.csdnimg.cn/20200717090452962.png" alt="在这里插入图片描述"></p>
<h3 id="前提" tabindex="-1"><a class="header-anchor" href="#前提" aria-hidden="true">#</a> 前提</h3>
<h3 id="安装路由" tabindex="-1"><a class="header-anchor" href="#安装路由" aria-hidden="true">#</a> 安装路由</h3>
<div class="language-Basic line-numbers-mode" data-ext="Basic"><pre v-pre class="language-Basic"><code>npm i react-router-dom -S
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>用 react-router-dom 不用 react-router 的原因：
<ul>
<li>react-router-dom 多出 <code v-pre>&lt;Link&gt;</code> <code v-pre>&lt;BrowserRouter&gt;</code> 等组件。</li>
<li>更适合，更好用，更简单（没有这些组件就需要你自己去封装）。</li>
</ul>
</li>
</ul>
<h3 id="配置-history-模式" tabindex="-1"><a class="header-anchor" href="#配置-history-模式" aria-hidden="true">#</a> 配置 history 模式</h3>
<ul>
<li>如果使用 hash 模式可以忽略此步骤。</li>
<li>页面使用：</li>
</ul>
<div class="language-JSX line-numbers-mode" data-ext="JSX"><pre v-pre class="language-JSX"><code>import { BrowserRouter } from &quot;react-router-dom&quot;;
// 路由组件
export default function RouterView() {
  return (&lt;BrowserRouter&gt;&lt;/BrowserRouter&gt;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>404 配置
<ul>
<li>history 模式下，网站刷新会 404,。</li>
<li>webpack.config.js 配置，配置详情请看 <a href="https://www.webpackjs.com/configuration/output/#output-publicpath" target="_blank" rel="noopener noreferrer">publicPath<ExternalLinkIcon/></a> 和 <a href="https://www.webpackjs.com/configuration/dev-server/#devserver-historyapifallback" target="_blank" rel="noopener noreferrer">historyApiFallback<ExternalLinkIcon/></a></li>
</ul>
</li>
</ul>
<div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre v-pre class="language-JavaScript"><code>{
  output: {
    // history会返回真实的路径
    // 当你使用按需加载的时候，默认为相对路径则会出现404
    publicPath: &quot;/&quot;
  }
  devServer：{
    historyApiFallback: true // 解决路由 history 404 问题
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>上线服务器 Nginx 部署 history 模式 404，<a href="http://react-guide.github.io/react-router-cn/docs/guides/basics/Histories.html" target="_blank" rel="noopener noreferrer">配置详情<ExternalLinkIcon/></a></li>
</ul>
<div class="language-Conf line-numbers-mode" data-ext="Conf"><pre v-pre class="language-Conf"><code>server {
  location / {
    try_files $uri /index.html
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="react-路由匹配规则" tabindex="-1"><a class="header-anchor" href="#react-路由匹配规则" aria-hidden="true">#</a> React 路由匹配规则</h3>
<ul>
<li>这里提一下 Vue 路由匹配规则：
<ul>
<li>调用了匹配器的 match 方法，通过 path-to-regexp ， 来创建一个正则表达式 ， 然后 ， 通过这个正则来检查是否匹配。</li>
<li>如果已经匹配则不会往下再去匹配。</li>
</ul>
</li>
<li>React 匹配规则：
<ul>
<li>从上到下执行，会继续匹配所以满足匹配的项。</li>
</ul>
</li>
</ul>
<h4 id="路由地址会匹配所有" tabindex="-1"><a class="header-anchor" href="#路由地址会匹配所有" aria-hidden="true">#</a> <code v-pre>/</code>路由地址会匹配所有</h4>
<ul>
<li>如果我现在的路由是 <code v-pre>/admin</code>,则会显示下面两个组件。
<ul>
<li>因为 <code v-pre>/admin</code> 会匹配 <code v-pre>/</code>，<code v-pre>/admin</code> 的前面有 <code v-pre>/</code>。</li>
</ul>
</li>
</ul>
<div class="language-JSX line-numbers-mode" data-ext="JSX"><pre v-pre class="language-JSX"><code>&lt;Route path=&quot;/&quot; component={} /&gt;
&lt;Route path=&quot;/admin&quot; component={} /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>解决：让他精确匹配，<code v-pre>exact</code> 属性表示要完全相等。
<ul>
<li><code v-pre>/admin</code> 和 <code v-pre>/</code> 是不全等的，所以不会同时出现两个。</li>
</ul>
</li>
</ul>
<div class="language-JSX line-numbers-mode" data-ext="JSX"><pre v-pre class="language-JSX"><code>&lt;Route path=&quot;/&quot; exact component={} /&gt;
&lt;Route path=&quot;/admin&quot; component={} /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="路由匹配多个" tabindex="-1"><a class="header-anchor" href="#路由匹配多个" aria-hidden="true">#</a> 路由匹配多个</h4>
<ul>
<li>路由从上往下匹配，先匹配了 <code v-pre>/admin</code>,他还会继续匹配 <code v-pre>/</code>。</li>
<li>上面可以添加 <code v-pre>exact</code> 精确匹配可以达到目的。</li>
</ul>
<div class="language-JSX line-numbers-mode" data-ext="JSX"><pre v-pre class="language-JSX"><code>&lt;Route path=&quot;/admin&quot; component={} /&gt;
&lt;Route path=&quot;/&quot; component={} /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>解决：
<ul>
<li>可以使用上面的 <code v-pre>exact</code> 属性精确匹配。</li>
<li>这里用另外一种方法。<code v-pre>&lt;Switch&gt;</code> 组件匹配完一个之后不再继续往下匹配。</li>
</ul>
</li>
</ul>
<div class="language-JSX line-numbers-mode" data-ext="JSX"><pre v-pre class="language-JSX"><code>&lt;Switch&gt;
  &lt;Route path=&quot;/admin&quot; component={} /&gt;
  &lt;Route path=&quot;/&quot; component={} /&gt;
&lt;/Switch&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="完整路由组件" tabindex="-1"><a class="header-anchor" href="#完整路由组件" aria-hidden="true">#</a> 完整路由组件</h3>
<ul>
<li>注意：因为我的第一个子路由和父路由不一样，所以不需要用到 <code v-pre>exact</code> 精确匹配。</li>
<li>如果你的第一个子路由和父路由一样，则需要将第一个子路由上加上 <code v-pre>exact</code>
<ul>
<li><code v-pre>/admin</code> 路由组件放前面的原因是因为如果他匹配了 <code v-pre>/</code> 则不会往下匹配，因为 <code v-pre>&lt;Switch&gt;</code> 组件，所以 <code v-pre>/</code> 路由要放在 <code v-pre>Routes</code> 数组的最后一个对象即可。</li>
</ul>
</li>
</ul>
<details>
<summary>✅ 查看代码</summary>
<div class="language-JSX line-numbers-mode" data-ext="JSX"><pre v-pre class="language-JSX"><code>import React from &quot;react&quot;;
import { BrowserRouter, Switch, Route, Redirect } from &quot;react-router-dom&quot;;
import { Require } from &quot;@/utils/global/function&quot;;

// 路由配置
const Routes = [
  {
    path: &quot;/admin&quot;, // 账号管理模块
    children: [
      {
        path: &quot;/admin/login&quot; // 登录页面
      },
      {
        path: &quot;/admin/forget&quot; // 忘记密码页面
      }
    ]
  },
  {
    path: &quot;/&quot;, // 首页模块
    children: [
      {
        path: &quot;/home&quot; // 首页-单页
      },
      {
        path: &quot;/public&quot;, // 公共模块
        children: [
          {
            path: &quot;/public/noticeList&quot; // 公告列表
          },
          {
            path: &quot;/public/helpCenter&quot; // 帮助中心
          },
          {
            path: &quot;/public/versionUpdate&quot; // 版本更新
          }
        ]
      },
      {
        path: &quot;/function&quot;, // 功能模块
        children: [
          {
            path: &quot;/function/imgList&quot; // 图片列表
          }
        ]
      },
      {
        path: &quot;/imgText&quot;, // 图文模块
        children: [
          {
            path: &quot;/imgText/carouselList&quot; // 轮播图列表
          },
          {
            path: &quot;/imgText/specialList&quot; // 特效列表
          },
          {
            path: &quot;/imgText/articleList&quot; // 文章列表
          }
        ]
      },
      {
        path: &quot;/user&quot;, // 用户中心模块
        children: [
          {
            path: &quot;/user/userInfo&quot; // 用户信息
          },
          {
            path: &quot;/user/userAdmin&quot; // 用户管理
          },
          {
            path: &quot;/user/editPwd&quot; // 修改密码
          },
          {
            path: &quot;/user/feedbackList&quot; // 用户反馈
          }
        ]
      }
    ]
  }
];

// 给路由添加组件
(function addRouter(arr) {
  arr.forEach(elem =&gt; {
    const path = elem.path;
    let url = &quot;&quot;;
    // 首页-单页自定路径
    switch (path) {
      case &quot;/&quot;:
        url = &quot;/index&quot;;
        break;
      case &quot;/home&quot;:
        url = &quot;/index/home&quot;;
        break;
      default:
        url = path;
        break;
    }
    elem.component = Require(() =&gt; import(`~/${url.slice(1)}`)); // 懒加载组件
    // 判断是否有子路由
    if (elem.children) {
      addRouter(elem.children); // 子集添加组件
    }
  });
})(Routes);

// 路由组件
export default function RouterView() {
  return (
    &lt;BrowserRouter&gt;
      {(function routerComponent(arr) {
        return (
          &lt;Switch&gt;
            {/* 路由声明组件 */}
            {arr.map(({ path, children, component: Comp }, i) =&gt; (
              &lt;Route path={path} key={i} children={props =&gt; &lt;Comp {...props}&gt;{children &amp;&amp; routerComponent(children)}&lt;/Comp&gt;}&gt;&lt;/Route&gt;
            ))}
            &lt;Redirect path=&quot;*&quot; to={arr[0].path}&gt;&lt;/Redirect&gt;
          &lt;/Switch&gt;
        );
      })(Routes)}
    &lt;/BrowserRouter&gt;
  );
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<ul>
<li>懒加载方法 <code v-pre>Require</code></li>
</ul>
<div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre v-pre class="language-JavaScript"><code>import React, { Component } from &quot;react&quot;;
/**
 * 组件懒加载
 * @param {Any} importComponent  - 需要导入的组件
 * @returns {Any} - 导出组件
 */

export const Require = importComponent =&gt; {
  return class extends Component {
    state = {
      component: null
    };
    componentDidMount() {
      importComponent() //传进来的函数返回我们想要的组件
        .then(cmp =&gt; {
          //这里的cmp估计就是组件的返回值，类似promise的resolve写法
          this.setState({ component: cmp.default }); //把组件存起来
        });
    }
    render() {
      const C = this.state.component; // 渲染的时候把组件 B 拿出来
      return C ? &lt;C {...this.props} /&gt; : null; // 返回的其实就是组件 B，并且把传给A的属性也转移到B上
    }
  };
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>~/</code> 表示自定义 <code v-pre>alias</code> 即 <code v-pre>path.resolve(__dirname, &quot;src/views&quot;)</code></li>
</ul>
</div></template>


