<template><div><h1 id="服务器使用-docker-从零部署-vue-项目" tabindex="-1"><a class="header-anchor" href="#服务器使用-docker-从零部署-vue-项目" aria-hidden="true">#</a> 服务器使用 Docker 从零部署 Vue 项目</h1>
<h2 id="前提" tabindex="-1"><a class="header-anchor" href="#前提" aria-hidden="true">#</a> 前提</h2>
<ul>
<li>一台服务器 ( Linux 内核系统 - CentOS 8 为例 )，如果是本地装 docker 模拟的话，跳过此阶段</li>
<li>了解 docker 简单概念，Linux 简单操作</li>
</ul>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>服务器保证可以正常连接访问，国内的已备案，并开放了端口</p>
</div>
<h3 id="题外话-服务器重装系统-以阿里云为例" tabindex="-1"><a class="header-anchor" href="#题外话-服务器重装系统-以阿里云为例" aria-hidden="true">#</a> 题外话-服务器重装系统（以阿里云为例）</h3>
<ol>
<li>
<p>登录阿里云账号，右上角打开控制台</p>
<p><img src="https://img-blog.csdnimg.cn/20210422183634269.png" alt="图片"></p>
</li>
<li>
<p>找到云服务器 ECS（点击左侧栏目），停止服务器（实例）
<img src="https://img-blog.csdnimg.cn/20210422183709477.png" alt="图片"></p>
</li>
<li>
<p>点击左侧实例，点击列表更多 &gt; 云盘和镜像 &gt; 更换操作系统
<img src="https://img-blog.csdnimg.cn/20210422183911872.png" alt="图片"></p>
</li>
</ol>
<ul>
<li>接下来进入正题</li>
</ul>
<h2 id="安装-docker" tabindex="-1"><a class="header-anchor" href="#安装-docker" aria-hidden="true">#</a> 安装 docker</h2>
<h3 id="连接服务器-这里用的-xshell" tabindex="-1"><a class="header-anchor" href="#连接服务器-这里用的-xshell" aria-hidden="true">#</a> 连接服务器，这里用的 xshell</h3>
<ul>
<li>打开 xshell，点击左上角新建，输入 IP 地址 &gt; 账号 ( root ) 和密码（重装系统的时候设置的）</li>
</ul>
<h3 id="输入安装命令" tabindex="-1"><a class="header-anchor" href="#输入安装命令" aria-hidden="true">#</a> 输入安装命令</h3>
<div class="language-Basic line-numbers-mode" data-ext="Basic"><pre v-pre class="language-Basic"><code>curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="检测是否安装成功" tabindex="-1"><a class="header-anchor" href="#检测是否安装成功" aria-hidden="true">#</a> 检测是否安装成功</h3>
<div class="language-Basic line-numbers-mode" data-ext="Basic"><pre v-pre class="language-Basic"><code>docker -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://img-blog.csdnimg.cn/20210422183924446.png#pic_center" alt="图片"></p>
<div class="custom-container tip"><p class="custom-container-title">成功</p>
<p>显示版本号，安装成功</p>
</div>
<h2 id="配置-nginx-web-服务器" tabindex="-1"><a class="header-anchor" href="#配置-nginx-web-服务器" aria-hidden="true">#</a> 配置 nginx web 服务器</h2>
<h3 id="下载-nginx-镜像" tabindex="-1"><a class="header-anchor" href="#下载-nginx-镜像" aria-hidden="true">#</a> 下载 nginx 镜像</h3>
<div class="language-Basic line-numbers-mode" data-ext="Basic"><pre v-pre class="language-Basic"><code>docker pull nginx:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="启动一个来自于-nginx-镜像的-docker-容器" tabindex="-1"><a class="header-anchor" href="#启动一个来自于-nginx-镜像的-docker-容器" aria-hidden="true">#</a> 启动一个来自于 nginx 镜像的 docker 容器</h3>
<ul>
<li>如何你已经有了 nginx 配置文件则省略此步骤，如何没有，则按以下步骤来复制默认配置</li>
</ul>
<h4 id="创建并启动临时的容器" tabindex="-1"><a class="header-anchor" href="#创建并启动临时的容器" aria-hidden="true">#</a> 创建并启动临时的容器</h4>
<div class="language-Basic line-numbers-mode" data-ext="Basic"><pre v-pre class="language-Basic"><code>docker run --name temp-nginx 8080:80 -d nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>打开地址查看，ip:8080，如果有页面，则表示 nginx 部署成功，如果没有则表示部署失败或者 nginx 镜像下载失败</li>
<li>失败原因寻找：
<ul>
<li>nginx 镜像下载失败：命令 <code v-pre>docker images</code> 查看是否下载成功，没有则重新下载</li>
<li>部署失败：命令 <code v-pre>docker logs temp-nginx</code> 查看错误日志信息</li>
</ul>
</li>
</ul>
<h4 id="复制配置" tabindex="-1"><a class="header-anchor" href="#复制配置" aria-hidden="true">#</a> 复制配置</h4>
<ul>
<li>新建存放目录 <code v-pre>mkdir -p /docker/nginx</code></li>
<li>把配置复制到 <code v-pre>/docker/nginx</code> 目录下
<ul>
<li><code v-pre>docker cp temp-nginx:/etc/nginx/nginx.conf /docker/nginx</code></li>
<li><code v-pre>docker cp -a temp-nginx:/usr/share/nginx/html /docker/nginx</code></li>
<li>其他文件如日志，可以后面自己再去操作，这里只做基本部署</li>
</ul>
</li>
</ul>
<h4 id="删除临时容器" tabindex="-1"><a class="header-anchor" href="#删除临时容器" aria-hidden="true">#</a> 删除临时容器</h4>
<div class="language-Basic line-numbers-mode" data-ext="Basic"><pre v-pre class="language-Basic"><code>docker rm -f temp-nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="修改-nginx-conf-配置" tabindex="-1"><a class="header-anchor" href="#修改-nginx-conf-配置" aria-hidden="true">#</a> 修改 nginx.conf 配置</h4>
<ul>
<li><code v-pre>vi /docker/nginx/nginx.conf</code></li>
<li>注释 <code v-pre>include /etc/nginx/conf.d/*.conf;</code> 这段话，不然他会引入 conf.d 里的配置
<ul>
<li>当然，如果你不想注释的话，可以参考上面的方法复制 conf.d 文件夹，后面记得加个映射就行</li>
</ul>
</li>
<li>在原文件的基础上加上 <code v-pre>server</code></li>
</ul>
<details>
<summary>👀 查看 nginx.conf 详情</summary>
<div class="language-Conf line-numbers-mode" data-ext="Conf"><pre v-pre class="language-Conf"><code>user  nginx;
worker_processes  1;
error_log  /var/log/nginx/error.log warn;
pid        /var/run/nginx.pid;
events {
    worker_connections  1024;
}
http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;
    log_format  main  '$remote_addr - $remote_user [$time_local] &quot;$request&quot; '
                      '$status $body_bytes_sent &quot;$http_referer&quot; '
                      '&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;';
    access_log  /var/log/nginx/access.log  main;
    sendfile        on;
    keepalive_timeout  65;
    # 注释下面这段，不然他会引入conf.d里的配置
    # include /etc/nginx/conf.d/*.conf;
    # 文件里面所有的路径都要写容器里的路径，不要写本地路径，不然会找不到文件
    # 所以后面会把本地路径映射到容器路径
    # 比如 /usr/share/nginx/html 其实会访问 /docker/nginx/html 目录
    # 开启服务
    server {
        listen       80;
        server_name  biaov.cn;
        location / {
            # vue文件存放目录
            # 注意这里一定是容器路径，不能是本地路径
            root   /usr/share/nginx/html;
            index  index.html index.htm;
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h4 id="创建映射的容器" tabindex="-1"><a class="header-anchor" href="#创建映射的容器" aria-hidden="true">#</a> 创建映射的容器</h4>
<div class="language-Basic line-numbers-mode" data-ext="Basic"><pre v-pre class="language-Basic"><code>docker run -d --name nginx-http -p 80:80 -v /docker/nginx/html:/usr/share/nginx/html -v /docker/nginx/nginx.conf:/etc/nginx/nginx.conf nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="上传-vue-文件" tabindex="-1"><a class="header-anchor" href="#上传-vue-文件" aria-hidden="true">#</a> 上传 Vue 文件</h3>
<ul>
<li>这里使用 FlashFXP 上传，你也可以用 Xshell 的 ftp 上传</li>
</ul>
<p><img src="https://img-blog.csdnimg.cn/20210422184023959.png" alt="图片"></p>
<ul>
<li>把 Vue 文件上传到这个目录即可</li>
</ul>
<p><img src="https://img-blog.csdnimg.cn/20210422184035728.png#pic_center" alt="图片"></p>
<ul>
<li>用域名或 ip 查看下，如 <a href="https://biaov.cn/" target="_blank" rel="noopener noreferrer">biaov.cn<ExternalLinkIcon/></a></li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">完成</p>
<p>部署完成</p>
</div>
<ul>
<li>题外话-部署 SSL 证书流程</li>
<li>阿里云下载 nginx 的 SSl 证书(域名要一致)</li>
<li>nginx.conf 配置 443 端口（证书访问地址记得做映射）</li>
</ul>
<div class="language-Conf line-numbers-mode" data-ext="Conf"><pre v-pre class="language-Conf"><code>server {
    listen       443 ssl;
    server_name  biaov.cn;
    ssl_certificate      /etc/nginx/cert/biaov/biaov.cn.pem;
    ssl_certificate_key  /etc/nginx/cert/biaov/biaov.cn.key;
    ssl_session_cache    shared:SSL:1m;
    ssl_session_timeout  5m;
    ssl_ciphers  HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers  on;
    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>docker 创建并开启 443 端口的容器</li>
</ul>
<div class="language-Basic line-numbers-mode" data-ext="Basic"><pre v-pre class="language-Basic"><code>docker run -d --name nginx-https -p 443:443 -v /docker/nginx/html:/usr/share/nginx/html -v /docker/nginx/nginx.conf:/etc/nginx/nginx.conf /docker/nginx/certs:/etc/nginx/cert -v /docker/nginx/config:/etc/nginx/config nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>参考教程: <a href="https://www.runoob.com/docker/docker-tutorial.html" target="_blank" rel="noopener noreferrer">Docker 教程<ExternalLinkIcon/></a></li>
</ul>
</div></template>


