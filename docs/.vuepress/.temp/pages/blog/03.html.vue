<template><div><h1 id="使用-git-从码云上-clone-项目到本地-修改完之后提交项目到码云" tabindex="-1"><a class="header-anchor" href="#使用-git-从码云上-clone-项目到本地-修改完之后提交项目到码云" aria-hidden="true">#</a> 使用 Git，从码云上 clone 项目到本地，修改完之后提交项目到码云</h1>
<h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h2>
<nav class="table-of-contents"><ul><li><router-link to="#目录">目录</router-link><ul><li><router-link to="#一、把项目从码云上-clone-下来。-这里以一个自己的简单分支做演示">一、把项目从码云上 clone 下来。（这里以一个自己的简单分支做演示）</router-link></li><li><router-link to="#二、修改文件">二、修改文件</router-link></li><li><router-link to="#三、把修改完的项目提交到码云上">三、把修改完的项目提交到码云上</router-link></li></ul></li></ul></nav>
<blockquote>
<p>最近在写公司的项目，用的比较多的就是使用 Git，从码云上 clone 下来项目，到修改完之后，再提交项目到码云上去，这样的方法很适用于团队协作，以及避免电脑里的代码，因为特殊情况而丢失。所以把这个过程简单的分享一下！欢迎大家讨论。
闲话少说，开始进入正题。</p>
</blockquote>
<h3 id="一、把项目从码云上-clone-下来。-这里以一个自己的简单分支做演示" tabindex="-1"><a class="header-anchor" href="#一、把项目从码云上-clone-下来。-这里以一个自己的简单分支做演示" aria-hidden="true">#</a> 一、把项目从码云上 clone 下来。（这里以一个自己的简单分支做演示）</h3>
<ol>
<li><strong>先简单创建一个临时演示的项目。（已有项目直接进入 2）</strong>
<img src="https://img-blog.csdn.net/2018092511295698" alt="img">
<img src="https://img-blog.csdn.net/20180925113310164" alt="img"></li>
<li><strong>点击创建项目之后，直接跳转到代码目录界面。（已有项目的直接点击项目进入该界面）</strong></li>
</ol>
<p><img src="https://img-blog.csdn.net/20180925113742302" alt="img"></p>
<p>点击克隆/下载按钮，弹出下载框，这里有两种方法可以下载。我们这里使用第二种方法。</p>
<p>（1）直接点击下载 ZIP，他会直接下载整个项目的压缩包。</p>
<p>（2）点击复制按钮。在你需要把项目放在的那个目录下打开 Git（这里直接在桌面打开 Git，这里使用 Git Bash Here），输入 Git 命令：git clone +你刚才复制的地址，敲回车就可以了。（推荐使用 Git 命令的这种方法）</p>
<p><img src="https://img-blog.csdn.net/2018092511483743" alt="img"></p>
<p>这里说一个题外话，如果是项目设置了权限的话，则需要输入用户名及及密码，这里演示的不需要输入。</p>
<p>下面这种是需要输入你的名称和密码。</p>
<p><img src="https://img-blog.csdn.net/20180925115347551" alt="img"></p>
<p><img src="https://img-blog.csdn.net/20180925115625616" alt="img"></p>
<h3 id="二、修改文件" tabindex="-1"><a class="header-anchor" href="#二、修改文件" aria-hidden="true">#</a> 二、修改文件</h3>
<p>把自己写的项目文件复制到该目录下。</p>
<p><img src="https://img-blog.csdn.net/20180925125036397" alt="img"></p>
<p><img src="https://img-blog.csdn.net/20180925125219550" alt="img"></p>
<h3 id="三、把修改完的项目提交到码云上" tabindex="-1"><a class="header-anchor" href="#三、把修改完的项目提交到码云上" aria-hidden="true">#</a> 三、把修改完的项目提交到码云上</h3>
<p>Git 有两种提交方式：</p>
<p>（1）操作式。Git GUI Here。（过于简单，这里不使用这种）</p>
<p><img src="https://img-blog.csdn.net/20180925125625398" alt="img"></p>
<p>（2）命令式。Git Bash Here。我们一直使用的，推荐使用。</p>
<p><img src="https://img-blog.csdn.net/20180925125712248" alt="img"></p>
<p>说一个小知识点：如果我们直接在项目里打开 Git Bash Here 的话，就可以直接进入下面的操作，会在界面上出现（master），表示默认的 master 分支。</p>
<p>没有的话需要进入项目文件。cd 项目目录（如果在桌面的话，直接 cd test 进入目录），就会出现（master）了。（如果没有出现，请检查目录是否出错）</p>
<p>先输入命令 git pull，他的作用主要在于合并码云上的项目。（因为有时候是团队开发，有可能在你修改完代码之前，别人先修改了一些东西，这个时候你不可能重新去 clone 一份，效率太慢了）。</p>
<p>如果没有人修改则会提示 Already up to date.（表示已经是最新的）。</p>
<p><img src="https://img-blog.csdn.net/20180925130057708" alt="img"></p>
<p>我们知道 Git 有三个区域：  工作区（working directory） 、暂缓区（stage index） 、历史记录区（history）  。</p>
<p>所以我们需要把我们修改的文件先添加到暂缓区（stage index），使用 Git 命令：git add -A。（-A 表示所有修改的文件）</p>
<p><img src="https://img-blog.csdn.net/20180925133401418" alt="img"></p>
<p>然后就是把暂存区的代码放到库库中去。使用 Git 命令：git commit,</p>
<p>因为我们是第一次提交，所以需要加上-m &quot;代码修改提示&quot;,所以应该输入 Git 命令：git commit -m &quot;修改代码&quot;。</p>
<p><img src="https://img-blog.csdn.net/20180925134337481" alt="img"></p>
<p>这里也提示了，你改变几个文件。</p>
<p>最后我们需要把仓库里的代码放到码云上去。使用 Git 命令：git push。这里我们需要输入用户名及密码。</p>
<p><img src="https://img-blog.csdn.net/20180925134540294" alt="img"></p>
<p>提交成功，然后我们去码云上刷新一下我们的项目，看一下是否成功。</p>
<p><img src="https://img-blog.csdn.net/20180925135126596" alt="img"></p>
<p>刷新之后，有新的东西出来（或者是有新的时间提示），自己也可以直接进入文件里查看。</p>
<p>项目修改成功！</p>
</div></template>


