---
title: 在 github pages 上部署 hexo，再结合思源笔记进行一键发布
date: '2025-03-17 14:27:22'
updated: '2025-03-17 22:06:13'
permalink: >-
  /post/deploy-hexo-on-github-pages-and-then-publish-it-in-one-click-with-siyuan-notes-z1ssk1b.html
comments: true
toc: true
---



# 在 github pages 上部署 hexo，再结合思源笔记进行一键发布

#### 目录

* [一、前置准备](https://blog.csdn.net/2303_76953932/article/details/145233223#_1)
* [二、搭建本地的博客 (Hexo 主题)](https://blog.csdn.net/2303_76953932/article/details/145233223#_Hexo__20)
* [三、新建 Github 仓库](https://blog.csdn.net/2303_76953932/article/details/145233223#_Github__60)
* [四 、将本地博客部署到 Github 上](https://blog.csdn.net/2303_76953932/article/details/145233223#__Github__79)
* [五 、基本使用](https://blog.csdn.net/2303_76953932/article/details/145233223#__184)
* 六 、

## 一、前置准备

1. 首先准备一个 `github`​ 账号
2. 本次是基于 `git`​ 进行部署，所以首先安装一个 `git`​，链接: [https://git-scm.com/downloads](https://git-scm.com/downloads)
3. 安装 `node.js`​ ，官网链接： [Node.js — Download Node.js®](https://nodejs.org/zh-cn/download)
4. 安装这两个，一般都会自动配置 `path`​，配置这个目的是可以在任何路径下使用 `git 和 node.js`​，如果没有配置环境变量，可以去配置一下。测试安装是否成功

```bash
# win + r 调出 cmd 命令行窗口，然后按照示例输入
# 如果出现版本号，说明已经安装成功了
C:\Users\xingzhu>node -v
v18.16.1

C:\Users\xingzhu>git --version
git version 2.39.0.windows.2
```

5. ​`git`​ 还需要配置相应的环境， 实现 `git`​ 和 `github`​ 之间的交互，如使用 `git`​ 拉取 `github`​ 项目、配置相应的密钥等等，推荐一个配置学习的链接：[使用git拉取github项目-CSDN博客](https://blog.csdn.net/qq_59509843/article/details/139632151)

## 二、搭建本地的博客 (Hexo 主题)

1. 新建一个文件夹用来存储博客，如我创建的 `MyBlog`​，完整路径就是 `C:\MyBlog`​ ，建议路径中不要包含中文字符
2. 创建完后，进入这个创建的文件夹，然后鼠标右击，点击 `Open Git Bash here`​，进入一个命令行界面，然后输入 `npm install -g hexo-cli`​ ，将 Hexo 命令行工具安装到系统的全局环境中

```bash
# 示例
$ npm install -g hexo-cli
```

3. 待安装完毕，输入以下指令，将会新建一个 `myblogs`​ 文件夹，并且安装 Hexo 项目所需的依赖项

```bash
# 创建一个新的 Hexo 项目
$ hexo init myblogs
$ cd myblogs

# 安装 Hexo 项目所需的依赖项
$ npm install
```

 执行完毕会生成这些文件

![在这里插入图片描述](https://mysynotebook.oss-cn-hongkong.aliyuncs.com/img/10da7a834e244c519cf0009e3a3e3a8b-20250317142722-1ugysg5.png)

4. 继续在 Git Bash 中执行指令 `hexo server`​

```bash
hexo server
```

 执行完毕后，打开本地浏览器，访问 `http://localhost:4000/`​，出现以下界面，说明本地部署成功了

![在这里插入图片描述](https://mysynotebook.oss-cn-hongkong.aliyuncs.com/img/5c80c7a7d7874511a18d3a3b722274c2-20250317142721-td88501.png)

## 三、新建 [Github](https://so.csdn.net/so/search?q=Github&spm=1001.2101.3001.7020) 仓库

1. 创建一个 github 仓库，点击 `Create repository`​
2. 需要特别注意的是仓库名字是 `Github用户名.github.io `​ 这个格式

 ![在这里插入图片描述](https://mysynotebook.oss-cn-hongkong.aliyuncs.com/img/a5aab38d2b9c4ff883d56ad9d2d1d42a-20250317142721-mht93rd.png)

3. 注意记得勾选 `Add a README file`​，为了方便后续查看 GitHub Pages 的域名和部署分支，然后点击创建
4. 创建后，点击 `setting`​  
    ​![在这里插入图片描述](https://mysynotebook.oss-cn-hongkong.aliyuncs.com/img/ab361ea45e7f40ec83b5bc7e75032258-20250317142722-stxudh5.png)
5. 查看这个分支，这里为 `main`​ 分支，后面写[配置文件](https://so.csdn.net/so/search?q=%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6&spm=1001.2101.3001.7020)需要用到，然后 `https://xingzhuz.github.io`​ 就是后续我们访问的域名，目前也可以访问，只是只能显示出你的仓库名，即我的 `xingzhuz.github.io`​

![在这里插入图片描述](https://mysynotebook.oss-cn-hongkong.aliyuncs.com/img/424da4aafde949289c38323de8035131-20250317142722-re9eeul.png)

## 四 、将本地博客部署到 Github 上

1. 打开博客目录，即我的 `C:\MyBlog\myblogs`​，找到 `_config.yml`​ 文件，然后使用记事本或者其他软件打开，这里我用 `vscode`​ 打开
2. 在末尾处加以下代码

```yml
# Deployment
## Docs: https://hexo.io/docs/one-command-deployment
deploy:
  type: git
  repo: git@github.com:xingzhuz/xingzhuz.github.io.git
  branch: main
```

 这个代码是指，使用 `git`​ 方式部署，`repo`​ 的选择按照如下图片示例

![在这里插入图片描述](https://mysynotebook.oss-cn-hongkong.aliyuncs.com/img/9b155723b1504ef3a14ae2d8bf3654e8-20250317142721-o3zf1w8.png)

 而那个 `branch`​ 填写的就是分支，就是上述第三步建仓库时候，`pages`​ 部分查看的分支，需要一致

 上面这种图片是我已经部署上去了，所以后面会看到有文件，而没有部署之前，即你们现在的界面，就是空的，只有一个 `READMD.md`​ 文件

3. 在当前博客目录安装 git 插件，即 `C:\MyBlog\mybgs`​，使用 `git bash`​ 执行这个命令

```bash
npm install hexo-deployer-git --save
```

4. 最后依次执行

```bash
hexo clean      # 清理 Hexo 缓存：
hexo generate   # 重新生成静态文件
hexo deploy     # hexo deploy
```

![在这里插入图片描述](https://mysynotebook.oss-cn-hongkong.aliyuncs.com/img/ff4509f5360e4d499bc6b34e2a93b03b-20250317142721-9la5evn.png)

 如果设置了密钥，输入密钥即可，若最终出现 `Deploy done`​ 就说明部署成功了，此时就可以使用域名访问了，`https://用户名.github.io`​ ，如果界面没改变，等个一两分钟即可

5. 如果最后一步报错:

```bash
Please make sure you have the correct access rights and the repository exists. 
FATAL Something's wrong. Maybe you can find the solution here:https://hexo.io/docs/troubleshooting.html 
Error: Spawn failed 
    at ChildProcess.<anonymous> (C:\MyBlog\myblogs\node_modules\hexo-deployer-git\node_modules\hexo-util\lib\spawn.js:51:21) 
    at ChildProcess.emit (node:events:519:28) 
    at cp.emit (C:\MyBlog\myblogs\node_modules\cross-spawn\lib\enoent.js:34:29) 
    at ChildProcess._handle.onexit (node:internal/child_process:294:12) 
```

> 解决方案

1. 首先检查上述配置过程中是否出错，即 `_config.yml`​ 文件是否出错
2. 检查 `git`​ 是否能够连接 `github`​

```bash
git ls-remote https://github.com/xingzhuz/xingzhuz.github.io.git
```

3. 如果不能连接，再测试 `SSH`​ 连接情况

```bash
ssh -T git@github.com

# 如果报错
ssh: connect to host github.com port 22: Connection timed out
```

* 说明这个 SSH 连接超时，解决方案就是换个端口号
* 按照以下进行添加或者更改，更改电脑用户目录下的 `config`​ 文件，我的是 `C:\Users\xingzhu\.ssh\config`​，以记事本打开或者其他方式打开

```bash
# 如果有这行数据，更改和添加对应的参数，如果没有，直接添加到末尾处
Host github.com
  Hostname ssh.github.com
  Port 443
```

* 更改后，注意需要刷新使其生效，有对应的命令，粗暴的方式就是重新启动即可
* 生效后，测试连接情况

```bash
ssh -T git@github.com
# 我的成功示例 
# Hi xingzhuz! You've successfully authenticated, but GitHub does not provide shell access.

ping github.com
# 显示一系列数字，即 IP

# 如果都能成功，配置基本就可以了
# 此时再执行
hexo clean      # 清理 Hexo 缓存：
hexo generate   # 重新生成静态文件
hexo deploy     # hexo deploy
```

## 五 、基本使用

1. 进入博客主目录，然后逐步进入 `source\_posts`​，我的就是 ` C:\MyBlog\myblogs\source\_posts`​
2. 然后新建一个 `命名.md`​ 文件，用记事本或者 Vscode 打开，如果有支持 markdown 格式的笔记软件的话，可以对应打开

![在这里插入图片描述](https://mysynotebook.oss-cn-hongkong.aliyuncs.com/img/2aff1c061d7d422fb32f144cc1da1bae-20250317142721-cf25i6i.png)

4. 这个使用 `---`​ 包括起来的内容称之为 `Front-matter`​，即前置信息，用于给 Hexo 渲染该 md 文档，除了这三项，还有很多的配置项可以自己添加：

|配置项|意义|
| ------------| ----------------------|
|title|网页文章标题|
|date|文章创建时间|
|comments|文章评论功能是否启动|
|tags|文章标签|
|categories|文章分类|
|keywords|文章关键字|

5. 后面的内容就是文章实际的 markdown 语法了，按需写
6. 也可以去搜索一些优秀的博主的框架，引进自己的博客中，按照博主的教程使用框架主题，按需设置

> 说明： 参考： [https://oceanwang.top/personal-website-7/](https://oceanwang.top/personal-website-7/)

<iframe name="googlefcPresent"></iframe>

![](https://mysynotebook.oss-cn-hongkong.aliyuncs.com/img/10da7a834e244c519cf0009e3a3e3a8b-20250317142722-1ugysg5.png)

![](https://mysynotebook.oss-cn-hongkong.aliyuncs.com/img/5c80c7a7d7874511a18d3a3b722274c2-20250317142721-td88501.png)

![](https://mysynotebook.oss-cn-hongkong.aliyuncs.com/img/a5aab38d2b9c4ff883d56ad9d2d1d42a-20250317142721-mht93rd.png)

![](https://mysynotebook.oss-cn-hongkong.aliyuncs.com/img/ab361ea45e7f40ec83b5bc7e75032258-20250317142722-stxudh5.png)

![](https://mysynotebook.oss-cn-hongkong.aliyuncs.com/img/424da4aafde949289c38323de8035131-20250317142722-re9eeul.png)

![](https://mysynotebook.oss-cn-hongkong.aliyuncs.com/img/9b155723b1504ef3a14ae2d8bf3654e8-20250317142721-o3zf1w8.png)

![](https://mysynotebook.oss-cn-hongkong.aliyuncs.com/img/ff4509f5360e4d499bc6b34e2a93b03b-20250317142721-9la5evn.png)

![](https://mysynotebook.oss-cn-hongkong.aliyuncs.com/img/2aff1c061d7d422fb32f144cc1da1bae-20250317142721-cf25i6i.png)
