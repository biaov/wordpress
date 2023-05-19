<template><div><h1 id="h5-vue3-ts-实现元素拖拽、缩放、旋转" tabindex="-1"><a class="header-anchor" href="#h5-vue3-ts-实现元素拖拽、缩放、旋转" aria-hidden="true">#</a> H5 + Vue3 + TS 实现元素拖拽、缩放、旋转</h1>
<h2 id="拖拽" tabindex="-1"><a class="header-anchor" href="#拖拽" aria-hidden="true">#</a> 拖拽</h2>
<h3 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h3>
<ul>
<li>利用 touch 事件来获取元素移动的位置，通过设置元素的样式(top,left)来控制元素的移动</li>
<li>拖拽点移动距离 = 移动实时坐标 - 初始坐标</li>
<li>元素移动距离 = 元素初始值 + 拖拽点移动距离</li>
</ul>
<h3 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h3>
<ul>
<li>绑定属性</li>
</ul>
<div class="language-Vue line-numbers-mode" data-ext="Vue"><pre v-pre class="language-Vue"><code>&lt;template&gt;
  &lt;div :style=&quot;`top:${rect.y}px;left:${rect.x}px;`&quot; @touchstart=&quot;onTouchstart&quot; @touchmove=&quot;onTouchmove&quot;&gt;&lt;/div&gt;
&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>获取开始位置</li>
</ul>
<div class="language-TypeScript line-numbers-mode" data-ext="TypeScript"><pre v-pre class="language-TypeScript"><code>const rect = ref({ x: 0, y: 0 })
const onTouchstart = (e: TouchEvent) =&gt; {
  const { clientX, clientY } = e.changedTouches[0]
  startPoint = { x: clientX, y: clientY } // 开始点
  startRect = { ...rect.value } // 开始元素位置
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>计算元素移动距离</li>
</ul>
<div class="language-TypeScript line-numbers-mode" data-ext="TypeScript"><pre v-pre class="language-TypeScript"><code>const onTouchmove = (e: TouchEvent) =&gt; {
  const { clientX, clientY } = e.changedTouches[0]
  const diffX = clientX - startPoint.x // 手指横向移动距离
  const diffY = clientY - startPoint.y // 手指纵向移动距离
  const distX = startRect.x + diffX // 元素移动的距离
  const distY = startRect.y + diffY // 元素移动的距离
  rect.value.x = distX
  rect.value.y = distY
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="旋转" tabindex="-1"><a class="header-anchor" href="#旋转" aria-hidden="true">#</a> 旋转</h2>
<h3 id="思路-1" tabindex="-1"><a class="header-anchor" href="#思路-1" aria-hidden="true">#</a> 思路</h3>
<ul>
<li>元素旋转是根据元素中心点旋转，先计算元素的中心点坐标，再计算元素旋转的角度</li>
<li>元素旋转的角度：以元素中心点为坐标系原点，开始点为坐标系上的点，触摸点为目标点，通过目标点的反正切得出对应的弧度，再通过弧度计算出角度</li>
<li>⚠ 注意：此角度只有每个象限的角度，所以你需要根据当前角度所在象限进行角度换算
<ul>
<li>如果你觉得四个象限麻烦，可以考虑使用 <code v-pre>Math.atan2</code> 计算角度，这里使用的是 <code v-pre>Math.atan</code></li>
</ul>
</li>
<li>中心点:
<ul>
<li>x = rect.w / 2 + rect.x</li>
<li>y = rect.h / 2 + rect.y</li>
</ul>
</li>
<li>弧度 = Math.atan(x / y)</li>
<li>角度 = 弧度 * 180 / Math.PI</li>
</ul>
<h3 id="实现-1" tabindex="-1"><a class="header-anchor" href="#实现-1" aria-hidden="true">#</a> 实现</h3>
<ul>
<li>获取中心点</li>
</ul>
<div class="language-TypeScript line-numbers-mode" data-ext="TypeScript"><pre v-pre class="language-TypeScript"><code>interface Point {
  x: number
  y: number
}

const rect = ref({ x: 0, y: 0, w: 100, h: 100 })

const getCenterPoint = (): Point =&gt; {
  const { w, h, x: ex, y: ey } = rect
  const x = w / 2 + ex
  const y = h / 2 + ey

  return { x, y }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>获取旋转角度</li>
<li>以正下方为 0° 开始</li>
</ul>
<div class="language-TypeScript line-numbers-mode" data-ext="TypeScript"><pre v-pre class="language-TypeScript"><code>const getRotate = (point: Point): number =&gt; {
  const center = getCenterPoint()
  if (point.x === center.x) {
    return point.y &gt;= center.y ? 0 : 180
  }
  if (point.y === center.y) {
    return point.x &lt; center.x ? 90 : 270
  }
  const x = point.x - center.x
  const y = point.y - center.y
  let angle = (Math.atan(Math.abs(x / y)) / Math.PI) * 180
  // 默认从第三象限(x&lt;0 &amp;&amp; y&gt;0)开始为正
  if (x &lt; 0 &amp;&amp; y &lt; 0) {
    // 第二象限
    angle = 180 - angle
  } else if (x &gt; 0 &amp;&amp; y &lt; 0) {
    // 第一象限
    angle += 180
  } else if (x &gt; 0 &amp;&amp; y &gt; 0) {
    // 第四象限
    angle = 360 - angle
  }
  return angle
}

const angle = getRotate({ x: 100, y: 100 }) // 角度
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="缩放" tabindex="-1"><a class="header-anchor" href="#缩放" aria-hidden="true">#</a> 缩放</h2>
<h3 id="左上-西北-方向" tabindex="-1"><a class="header-anchor" href="#左上-西北-方向" aria-hidden="true">#</a> 左上(西北)方向</h3>
<ul>
<li>思路：通过开始点和中心点计算出对称点，然后通过移动目标点和对称点计算出新的中心点，根据移动目标点和新的中心点和角度可以计算出角度为 0 时的元素坐标点，元素坐标点和新的中心点计算出新的对称点，再根据新的对称点和元素坐标点计算元素的大小，也可以直接根据元素坐标点和新的中心点计算出元素大小，这里为了和其它方位统一所以使用新的对称点计算元素大小
<ul>
<li>计算出的新的宽高保持为正值，后续不用重新获取绝对值</li>
<li>对称点 = 中心点 x 2 - 开始点</li>
<li>新的中心点 = ( 目标点 + 对称点 ) / 2</li>
<li>元素坐标点 = (目标点 - 新的中心点) x Math.cos(角度 x π / 180) - (目标点 - 新的中心点) x Math.sin(角度 x π / 180) + 新的中心点</li>
<li>新的对称点 = 新的中心点 x 2 - 目标点</li>
<li>元素大小 = 新的对称点 - 元素坐标点</li>
</ul>
</li>
<li>实现：</li>
</ul>
<div class="language-TypeScript line-numbers-mode" data-ext="TypeScript"><pre v-pre class="language-TypeScript"><code>/**
 * 左上(西北)方向
 * @param { Option } param - 计算参数
 * @returns { Rect } 计算之后的大小
 */
const northWestResize = ({ symmPoint, curPoint, rect }: Option): Rect =&gt; {
  const newCenter = getCenterPoint(curPoint, symmPoint) // 新的中心点坐标
  const newPoint = getRotatePoint(curPoint, newCenter, -rect.r) // 新的坐标点
  const newSymmPoint = getSymmPoint(newPoint, newCenter) // 新的对称点

  const newW = newSymmPoint.x - newPoint.x // 新的宽度
  const newH = newSymmPoint.y - newPoint.y // 新的高度

  if (newW &gt; 0 &amp;&amp; newH &gt; 0) {
    rect.w = Math.round(newW)
    rect.h = Math.round(newH)
    rect.x = Math.round(newPoint.x)
    rect.y = Math.round(newPoint.y)
  }

  return rect
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="上-北-方向" tabindex="-1"><a class="header-anchor" href="#上-北-方向" aria-hidden="true">#</a> 上(北)方向</h3>
<ul>
<li>思路：通过移动目标点和开始点和角度计算角度为 0° 时的新坐标，然后通过新坐标和开始点和角度计算出新的旋转坐标，根据勾股定理计算元素高度，根据旋转坐标和对称点计算出新的中心点，通过新的中心点和元素大小计算出元素的坐标
<ul>
<li>新坐标 = (目标点 - 开始点) x Math.cos(角度 x π / 180) - (目标点 - 开始点) x Math.sin(角度 x π / 180) + 开始点</li>
<li>旋转坐标 = (新坐标 - 开始点) x Math.cos(角度 x π / 180) - (新坐标 - 开始点) x Math.sin(角度 x π / 180) + 开始点
<ul>
<li>因为是往上拖拽，所以新坐标的横坐标和开始点的坐标相同 (新坐标.x = 开始点.x)</li>
</ul>
</li>
<li>元素高度 = Math.sqrt((旋转坐标 - 对称坐标)² + (旋转坐标 - 对称坐标)²)</li>
<li>新的中心点 = (旋转坐标 + 对称坐标) / 2</li>
</ul>
</li>
<li>实现：</li>
</ul>
<div class="language-TypeScript line-numbers-mode" data-ext="TypeScript"><pre v-pre class="language-TypeScript"><code>/**
 * 上(北)方向
 * @param { Option } param - 计算参数
 * @returns { Rect } 计算之后的大小
 */
const northResize = ({ startPoint, symmPoint, curPoint, rect }: Option): Rect =&gt; {
  const rotatePoint = getRotatePoint(curPoint, startPoint, -rect.r)
  const centerTop = getRotatePoint(
    {
      x: startPoint.x,
      y: rotatePoint.y
    },
    startPoint,
    rect.r
  )

  const newH = Math.sqrt((centerTop.x - symmPoint.x) ** 2 + (centerTop.y - symmPoint.y) ** 2)

  if (newH &gt; 0) {
    const newCenter = {
      x: (centerTop.x + symmPoint.x) / 2,
      y: (centerTop.y + symmPoint.y) / 2
    }
    rect.h = Math.round(newH)
    rect.x = Math.round(newCenter.x - rect.w / 2)
    rect.y = Math.round(newCenter.y - newH / 2)
  }

  return rect
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>其它方向同理</li>
</ul>
<h2 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h2>
<ul>
<li>演示地址：<a href="https://mineh5ui.biaov.cn/mobile.html#/doc/drag" target="_blank" rel="noopener noreferrer">拖拽演示<ExternalLinkIcon/></a>，为了视觉可以打开调试器 ( F12 ) 切换浏览器的 <code v-pre>Toggle device toobar - Ctrl + Shift + M</code></li>
<li>源码地址：
<ul>
<li><a href="https://github.com/biaov/MINE-H5-UI/blob/master/packages/MeDrag/hooks.ts" target="_blank" rel="noopener noreferrer">TS 源码<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/biaov/MINE-H5-UI/blob/v1/packages/MeDrag/index.vue" target="_blank" rel="noopener noreferrer">JS 源码<ExternalLinkIcon/></a></li>
</ul>
</li>
<li>技术博客：<a href="http://wordpress.biaov.cn/blog/20.html" target="_blank" rel="noopener noreferrer">H5 + Vue3 + TS 实现元素拖拽、缩放、旋转<ExternalLinkIcon/></a></li>
</ul>
</div></template>


