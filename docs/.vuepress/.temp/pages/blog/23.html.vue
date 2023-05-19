<template><div><h1 id="vue-实现拼图校验效果" tabindex="-1"><a class="header-anchor" href="#vue-实现拼图校验效果" aria-hidden="true">#</a> Vue 实现拼图校验效果</h1>
<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2>
<p><img src="https://img-blog.csdnimg.cn/310e3ba545b044fc8b9fee97eab0223c.png#pic_center" alt="效果图"></p>
<ul>
<li>拖动下面的方块使上面的方块同时拖动指导指定位置范围则表示成功
<ul>
<li>拖动使用 <code v-pre>Touch</code> 事件监听元素节点的移动</li>
<li>拼图右边缺口使用元素加透明度，左侧高亮部分使用元素的背景图来定位元素</li>
<li>移动使用 <code v-pre>CSS</code> 的 <code v-pre>left</code> 属性</li>
</ul>
</li>
<li>由于我们在拖动的时候，<code v-pre>1px</code> 不差有点难以精准，所以需要一个像素范围，这里默认是 <code v-pre>5px</code>
<ul>
<li>计算时加减 <code v-pre>5px</code> 即可</li>
</ul>
</li>
<li>如果拖动释放，则需要返回原位置，加个过渡动画，<code v-pre>class</code> 控制
<ul>
<li>通过 <code v-pre>CSS</code> 的 <code v-pre>animation</code> 属性来实现过渡动画</li>
</ul>
</li>
</ul>
<h2 id="实现代码" tabindex="-1"><a class="header-anchor" href="#实现代码" aria-hidden="true">#</a> 实现代码</h2>
<div class="language-Vue line-numbers-mode" data-ext="Vue"><pre v-pre class="language-Vue"><code>&lt;template&gt;
  &lt;!-- 拼图校验 --&gt;
  &lt;div class=&quot;me-jigsaw-validate&quot; :style=&quot;`width:${width};`&quot;&gt;
    &lt;div class=&quot;jigsaw-img&quot; :style=&quot;`height:${height};--x:${missingPoint.x}px;--y:${crossPoint.y}px;--point-width:${crossPoint.width}px;--url:url(${url});`&quot; ref=&quot;jigsawImgRef&quot;&gt;
      &lt;div class=&quot;jigsaw-img-point&quot; :class=&quot;{ animation: openAnimation }&quot; :style=&quot;`left:${dragPoint.x + moveX}px;background-position:-${missingPoint.x}px -${crossPoint.y}px;background-size:${imgRect.width}px ${imgRect.height}px;`&quot;&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;jigsaw-slide&quot; :style=&quot;`height:${slideStyle.height};background:${slideStyle.background};`&quot;&gt;
      &lt;div class=&quot;slide-dot&quot; :class=&quot;{ animation: openAnimation }&quot; :style=&quot;`left:${moveX}px;background:${slideStyle.dotBackground};`&quot; @transitionend=&quot;onAnimationend&quot; @touchstart=&quot;onTouchstart&quot; @touchmove=&quot;onTouchmove&quot; @touchend=&quot;onTouchend&quot;&gt;&lt;/div&gt;
      &lt;div class=&quot;slide-tips&quot; :style=&quot;`color:${slideStyle.tips};`&quot;&gt;{{ tips }}&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
export default {
  name: 'MeJigsawValidate',
  props: {
    // 图片地址
    url: {
      type: String,
      required: true
    },
    // 图片宽度
    width: {
      type: String,
      default: '100%'
    },
    // 图片高度
    height: {
      type: String,
      default: '300px'
    },
    // 随机位置
    random: {
      type: Boolean,
      default: true
    },
    // 滑块样式
    slideStyle: {
      type: Object,
      default: () =&gt; ({
        height: '40px', // 滑块高度
        background: '#f6f6f6', // 滑块背景色
        dotBackground: '#409eff', // 拖拽点背景色
        tips: '#494949' // 提示文本颜色
      })
    },
    // 提示语
    tips: {
      type: String,
      default: '按住左边按钮向右拖动完成上方图像验证'
    },
    // 容错值
    range: {
      type: Number,
      default: 5
    }
  },
  data() {
    return {
      dragPoint: { x: 10 }, // 拖拽点
      missingPoint: { x: 200 }, // 缺失点
      crossPoint: { y: 20, width: 50, height: 50 }, // 拖拽点和缺失点相同信息
      startX: 0, // 横向开始点
      openAnimation: false, // 动画开关
      moveX: 0, // 移动距离
      imgRect: { width: 0, height: 0 } // 图片范围
    }
  },
  methods: {
    // 操作开始
    handleStart({ clientX }) {
      this.openAnimation = false
      this.startX = clientX
    },
    // 操作移动
    handleMove({ clientX }) {
      this.moveX = clientX - this.startX
    },
    // 操作结束
    handleEnd({ clientX }) {
      const dx = this.dragPoint.x // 拖拽点 x
      const mx = this.missingPoint.x // 缺失点 x
      const curX = clientX - this.startX // 当前位移
      const resultBool = Math.abs(dx + curX - mx) &lt; this.range // 验证结果

      if (resultBool) {
        this.moveX = mx - dx
      } else {
        this.moveX = 0
        this.openAnimation = true
      }

      this.$emit('change', resultBool)
    },
    // 手指触摸开始
    onTouchstart(e) {
      this.handleStart(e.changedTouches[0])
    },
    // 手指触摸移动
    onTouchmove(e) {
      this.handleMove(e.changedTouches[0])
    },
    // 手指触摸离开
    onTouchend(e) {
      this.handleEnd(e.changedTouches[0])
    },
    // 动画结束
    onAnimationend() {
      this.openAnimation = false
    }
  },
  mounted() {
    const { width, height } = this.$refs.jigsawImgRef?.getBoundingClientRect()
    this.imgRect = { width, height }
    const split = width / 2 // 分割值
    const cw = this.crossPoint.width
    const ch = this.crossPoint.height

    if (this.random) {
      this.crossPoint.y = ~~(Math.random() * (height - ch))
      this.dragPoint.x = ~~(Math.random() * (split - cw))
      this.missingPoint.x = ~~(Math.random() * (width - cw - split)) + split
    } else {
      this.crossPoint.y = (height - ch) / 2
      this.missingPoint.x = width - cw - 10
    }
  }
}
&lt;/script&gt;

&lt;style lang=&quot;less&quot; scoped&gt;
.me-jigsaw-validate {
  .animation {
    transition: left 0.4s;
  }
  .jigsaw {
    &amp;-img {
      position: relative;
      width: 100%;
      background: var(--url) no-repeat center;
      background-size: 100% 100%;
      .point(@left) {
        position: absolute;
        top: var(--y);
        left: @left;
        width: var(--point-width);
        height: var(--point-width);
        border: 1px solid @border-color-default;
        border-radius: @border-radius-default;
      }
      &amp;::before {
        .point(var(--x));
        content: '';
        box-sizing: border-box;
        background: rgba(#000, 50%);
      }
      &amp;-point {
        .point(10px);
        background-repeat: inherit;
        background-image: inherit;
      }
    }
    &amp;-slide {
      position: relative;
      width: 100%;
      height: 40px;
      background: @bg-color;
      overflow: hidden;
      .slide {
        &amp;-dot {
          position: absolute;
          top: 0;
          left: 0;
          width: 40px;
          height: 100%;
          background: @color-primary;
        }
        &amp;-tips {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          width: 100%;
          height: 100%;
          padding: @padding-default;
          color: @font-color;
          font-size: @font-size-min;
          user-select: none;
        }
      }
    }
  }
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="扩展" tabindex="-1"><a class="header-anchor" href="#扩展" aria-hidden="true">#</a> 扩展</h2>
<ul>
<li>演示地址：
<ul>
<li><a href="https://mineh5ui.biaov.cn/v2/doc/jigsawValidate" target="_blank" rel="noopener noreferrer">拼图校验<ExternalLinkIcon/></a></li>
</ul>
</li>
<li>源代码：
<ul>
<li><a href="https://github.com/biaov/MINE-H5-UI/blob/master/packages/MeJigsawValidate/index.vue" target="_blank" rel="noopener noreferrer">基于 Vue3.x<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/biaov/MINE-H5-UI/blob/v1/packages/MeJigsawValidate/index.vue" target="_blank" rel="noopener noreferrer">基于 Vue2.x<ExternalLinkIcon/></a></li>
</ul>
</li>
</ul>
</div></template>


