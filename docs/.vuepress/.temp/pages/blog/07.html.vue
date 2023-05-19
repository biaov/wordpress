<template><div><h1 id="vue-发送-formdata-数据-nodejs-接收" tabindex="-1"><a class="header-anchor" href="#vue-发送-formdata-数据-nodejs-接收" aria-hidden="true">#</a> VUE 发送 Formdata 数据，NodeJS 接收</h1>
<h2 id="vue-发送-formdata-数据" tabindex="-1"><a class="header-anchor" href="#vue-发送-formdata-数据" aria-hidden="true">#</a> VUE 发送 Formdata 数据</h2>
<ul>
<li>参数 blob 是通过 this.cropper.getCroppedCanvas().toBlob(blob =&gt; { });获取到的。</li>
<li>具体使用方法，参考<a href="https://www.npmjs.com/package/cropperjs" target="_blank" rel="noopener noreferrer">此链接地址<ExternalLinkIcon/></a></li>
</ul>
<div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre v-pre class="language-JavaScript"><code>// 这里我使用的是cropperjs插件，裁剪图片成功执行此方法
 crop(blob) {
   const formData = new FormData();
   let uid = this.$store.getters.getUid;
   formData.append(&quot;croppedImg&quot;, blob);
   formData.append(&quot;id&quot;, uid);
   // 这里使用的是Axios请求
   this.$http
     .post(&quot;upload&quot;, formData)
     .then(res =&gt; {
       let data = res.data;
       if (data.code == 1) {
         let uploadAvatar = this.$store.getters.getUploadAvatar;
         this.$store.dispatch(&quot;onSaveUploadAvatar&quot;, uploadAvatar + 1);
         this.$Modal.success({
           title: &quot;提示&quot;,
           content: data.msg
         });
       } else {
         this.$Modal.warning({
           title: &quot;提示&quot;,
           content: data.msg
         });
       }
     })
     .catch(error =&gt; {
       console.log(error);
     });
 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>前端请求请求后，我们在浏览器的 Network 看是否有参数。</li>
<li>确保 Network 里有 Form Data 参数 ，如果是 Query String Parameters 参数或其它，则有可能不成功。</li>
</ul>
<p><img src="https://img-blog.csdnimg.cn/20190429165958306.png" alt="Network图片描述"></p>
<h2 id="nodejs-后台接收" tabindex="-1"><a class="header-anchor" href="#nodejs-后台接收" aria-hidden="true">#</a> NodeJS 后台接收</h2>
<ul>
<li>推荐使用 multiparty 模块接收参数。
<ul>
<li><a href="https://www.npmjs.com/package/multiparty" target="_blank" rel="noopener noreferrer">multiparty 文档地址<ExternalLinkIcon/></a></li>
</ul>
</li>
</ul>
<div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre v-pre class="language-JavaScript"><code>// 这里我配置了router，直接用app.post没有影响
router.post(&quot;/upload&quot;, (req, res) =&gt; {
  let obj = {};
  // 接收参数
  let form = new multiparty.Form();
  // 设置文件存储路径
  form.uploadDir = &quot;./avatar&quot;;
  // 设置单文件大小设置
  form.maxFilesSize = 2 * 1024 * 1024;
  // 上传完后处理
  form.parse(req, function (err, fields, files) {
    console.log(fields);
    console.log(files);
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p>
<ul>
<li>如果后台使用 connect-multiparty 模块只能接收 jQuery 传递的 formdata 参数，当然 jQuery 要设置了属性：
<ul>
<li>processData: false。// 不处理数据</li>
<li>contentType: false。// 不设置内容类型</li>
</ul>
</li>
<li><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/FormData/Using_FormData_Objects" target="_blank" rel="noopener noreferrer">参考地址<ExternalLinkIcon/></a></li>
<li>不能接收 Axios 传递的参数，因此推荐使用 multiparty 模块。
<img src="https://img-blog.csdnimg.cn/20190429171234794.png" alt="NodeJS后台打印值"></li>
</ul>
</div></template>


