---
title: 使用git拉取github项目-CSDN博客
date: '2025-03-17 21:40:56'
updated: '2025-03-17 23:37:42'
permalink: /post/use-git-to-pull-github-project-csdn-blog-1f2xgl.html
comments: true
toc: true
---



# 使用git拉取github项目-CSDN博客

---

* 使用git拉取github项目-CSDN博客
* [https://blog.csdn.net/qq_59509843/article/details/139632151](https://blog.csdn.net/qq_59509843/article/details/139632151)
* 文章浏览阅读2.5k次，点赞15次，收藏48次。这是我写的与git有关的第二篇博客，本章主要写如何使用git拉取github上的项目，温馨提示在上github时得使用梯子翻墙，不然打不开。本文有不妥之处欢迎大家在评论区讨论或者私信作者。到这里，使用git拉取github项目就结束了，欢迎大家在评论区讨论和指出问题。嗯。。。_git拉取github项目
* 2025-03-17 21:40:56

---

## 系列文章目录

 ​  
 第一章 [gitee本地仓库和远程仓库的使用](https://blog.csdn.net/qq_59509843/article/details/134156469)  
 ​第二章 使用git  
拉取[github项目](https://so.csdn.net/so/search?q=github%E9%A1%B9%E7%9B%AE&spm=1001.2101.3001.7020)  
 第三章 [将更新之后的github项目同步到本地](https://blog.csdn.net/qq_59509843/article/details/140634625?csdn_share_tail=%7B%22type%22:%22blog%22,%22rType%22:%22article%22,%22rId%22:%22140634625%22,%22source%22:%22qq_59509843%22%7D)

 ​

---

#### 文章目录

* [系列文章目录](https://blog.csdn.net/qq_59509843/article/details/139632151#_0)
* [前言](https://blog.csdn.net/qq_59509843/article/details/139632151#_16)
* [一、git的下载](https://blog.csdn.net/qq_59509843/article/details/139632151#git_25)
* [二、创建本地仓库](https://blog.csdn.net/qq_59509843/article/details/139632151#_32)
*  

  * [1.新建文件夹](https://blog.csdn.net/qq_59509843/article/details/139632151#1_33)
  * [2.设置为本地仓库](https://blog.csdn.net/qq_59509843/article/details/139632151#2_38)
  * [3.配置本地仓库的账号和邮箱](https://blog.csdn.net/qq_59509843/article/details/139632151#3_46)
  * [4.配置ssh](https://blog.csdn.net/qq_59509843/article/details/139632151#4ssh_54)
  * [5.将ssh与github账号绑定](https://blog.csdn.net/qq_59509843/article/details/139632151#5sshgithub_63)
* [三、拉取github项目](https://blog.csdn.net/qq_59509843/article/details/139632151#github_75)
*  

  * [1.复制项目代码](https://blog.csdn.net/qq_59509843/article/details/139632151#1_76)
* [总结](https://blog.csdn.net/qq_59509843/article/details/139632151#_93)

---

## 前言

 这是我写的与git有关的第二篇博客，本章主要写如何使用git拉取[github](https://so.csdn.net/so/search?q=github&spm=1001.2101.3001.7020)上的项目，温馨提示在上github时得使用梯子翻墙，不然打不开。本文有不妥之处欢迎大家在评论区讨论或者私信作者。

---

## 一、git的下载

直接搜索git，然后在git官网上下载安装包进行安装就可以了，可以一路点击next默认安装就行了。  
 ![在这里插入图片描述](https://mysynotebook.oss-cn-hongkong.aliyuncs.com/img/0bc3240f94cbe6da2fd3b0f0f77ec9df-20250317214056-jva55gs.png)  
 安装完之后，点击鼠标右键发现有Git GUT Here 和[Git Bash](https://so.csdn.net/so/search?q=Git%20Bash&spm=1001.2101.3001.7020) Here就算安装成功了。  
 ​​​​​​​​​​​​​​![在这里插入图片描述](https://mysynotebook.oss-cn-hongkong.aliyuncs.com/img/22396034976769a0182abe93eb68e4d0-20250317214056-brchl3k.png)

## 二、创建本地仓库

### 1.新建文件夹

新建一个文件夹作为仓库的文件夹，最好路径和命名不要带有中文，我这里新建了一个文件夹Local repository，你们也可以用其它名字。  
 ![在这里插入图片描述](https://mysynotebook.oss-cn-hongkong.aliyuncs.com/img/8e4f4c9f0fb39f4aa71a9b4ad3b14b2d-20250317214056-wlb2jil.png)

### 2.设置为本地仓库

右键打开文件夹，使用Git Bash Here打开  
 ![在这里插入图片描述](https://mysynotebook.oss-cn-hongkong.aliyuncs.com/img/e815cb74bbe62ecd63302f7dd53c90aa-20250317214056-qai9ubd.png)  
 就会弹出命令窗口，并使用git init 指令将其设置为仓库。  
 ![](undefined)

该指令将会在文件夹里生成一个.git文件，一般情况下该文件是处于隐藏状态  
 ![请添加图片描述](https://mysynotebook.oss-cn-hongkong.aliyuncs.com/img/f751917eb6391ba44ca05fd97c804e2b-20250317214056-o81u0rw.png)

### 3.配置本地仓库的账号和邮箱

 使用以下代码进行配置（双引号里面分别放自己的名字和邮箱）

```python
$ git config --global user.name "Your Name"
$ git config --global user.email "email@example.com"
```

![在这里插入图片描述](https://mysynotebook.oss-cn-hongkong.aliyuncs.com/img/3817fc752231a5d7bc6022656aeddf83-20250317214056-zo5vmj3.png)

### 4.配置ssh

 为了避免每次远程访问需要输密码，将使用ssh登陆。ssh应该与本机信息绑定。查看自己电脑 C:\\Users\\Administrator 目录下是否有 .ssh 文件夹。如果没有就需要生成。  
 一般都没有设置ssh，直接输入以下命令（双引号里面改为自己邮箱）

```python
$ ssh-keygen -t rsa -C "youremail@example.com"
```

![在这里插入图片描述](https://mysynotebook.oss-cn-hongkong.aliyuncs.com/img/25a369054298d5c9b28ec2f1e9ff881a-20250317214056-xir5cyc.png)  
 中间有需要选择的地方直接按回车就行。

### 5.将ssh与github账号绑定

复制.ssh文件夹下id\_rsa.pub文件中的内容，通常这个文件在c盘的Users/用户名文件夹下，在上面的步骤中也能看见该文件的路径，截图如下  
 ![在这里插入图片描述](https://mysynotebook.oss-cn-hongkong.aliyuncs.com/img/1eb7ef63f3422366d13ece1481c4f328-20250317214056-ktjjc4z.png)  
 找到.ssh文件  
 ![在这里插入图片描述](https://mysynotebook.oss-cn-hongkong.aliyuncs.com/img/14f3b9d60d28b2c0be01e7afd53e0f0d-20250317214056-hu0ytvz.png)  
 进入并使用记事本打开里面的id\_rsa.pub，全选并复制下来  
 ![在这里插入图片描述](https://mysynotebook.oss-cn-hongkong.aliyuncs.com/img/4ebffa32739a41c288862b2c9e4bb45b-20250317214056-t7qji2x.png)  
 粘贴进github里面  
 ![在这里插入图片描述](https://mysynotebook.oss-cn-hongkong.aliyuncs.com/img/19dc7ea820891b80cefb9853e0db182f-20250317214056-rgteeo2.png)  
 ![在这里插入图片描述](https://mysynotebook.oss-cn-hongkong.aliyuncs.com/img/ebd02dd56a1e70c8dd50a37f41efbae0-20250317214056-ffu3dek.png)  
 然后你的邮箱就会收到绑定信息  
 ![在这里插入图片描述](https://mysynotebook.oss-cn-hongkong.aliyuncs.com/img/1acd16d13c0c6c4a961211f681baa2ba-20250317214056-3vf6d3m.png)

## 三、拉取github项目

### 1.复制项目代码

 找到你想要拉取的github项目  
 ![在这里插入图片描述](https://mysynotebook.oss-cn-hongkong.aliyuncs.com/img/01b267b6e58be4746ab7fc91399451b9-20250317214056-h47t97v.png)  
 然后使用git clone 项目地址 指令进行拉取

```csharp
git clone
```

 如下图所示  
 ![在这里插入图片描述](https://mysynotebook.oss-cn-hongkong.aliyuncs.com/img/260bae0f3cb3436c4086a83e1f67d8ac-20250317214056-qd0kaft.png)  
 如上图所示，即为拉取成功，就可以在本地仓库里面看到你拉取的github项目了  
 ![在这里插入图片描述](https://mysynotebook.oss-cn-hongkong.aliyuncs.com/img/1136bd90029813b7e3c0d2d5a39ad0e2-20250317214056-wczmxn4.png)

## 总结

 到这里，使用git拉取github项目就结束了，欢迎大家在评论区讨论和指出问题。嗯。。。当然能够点赞收藏加关注就更好了。
