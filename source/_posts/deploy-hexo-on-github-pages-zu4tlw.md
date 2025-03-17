---
title: 在 GitHub Pages 上部署 Hexo
date: '2025-03-17 14:48:14'
updated: '2025-03-17 15:07:58'
permalink: /post/deploy-hexo-on-github-pages-zu4tlw.html
comments: true
toc: true
---



# 在 GitHub Pages 上部署 Hexo

---

* 在 GitHub Pages 上部署 Hexo - Hexo
* [https://hexo.io/zh-cn/docs/github-pages](https://hexo.io/zh-cn/docs/github-pages)
* 在本教程中，我们使用 GitHub Actions 部署 GitHub Pages。 此方法适用于公开或私人储存库. 若你不希望将源文件夹上传到 GitHub，请参阅 一键部署。  建立名为 username.github.io的储存库。 若之前已将 Hexo 上传至其他储存库，将该储存库重命名即可。 将 Hexo 文件夹中的文件 push 到储存库的默认分支。 默认分支通常名为main，旧一点的
* 2025-03-17 14:48:14

---

## [Hexo](https://hexo.io/zh-cn/)

[文档](https://hexo.io/zh-cn/docs/)​[API](https://hexo.io/zh-cn/api/)​[新闻](https://hexo.io/news/)​[插件](https://hexo.io/plugins/)​[主题](https://hexo.io/themes/)​[关于](https://hexo.io/about/)简体中文

## 在 GitHub Pages 上部署 Hexo

在本教程中，我们使用 [GitHub Actions](https://docs.github.com/zh/actions) 部署 GitHub Pages。 此方法适用于公开或私人储存库. 若你不希望将源文件夹上传到 GitHub，请参阅 [一键部署](https://hexo.io/zh-cn/docs/github-pages#%E4%B8%80%E9%94%AE%E9%83%A8%E7%BD%B2)。

1. 建立名为 ***username***​ **.github.io**的储存库。 若之前已将 Hexo 上传至其他储存库，将该储存库重命名即可。
2. 将 Hexo 文件夹中的文件 push 到储存库的默认分支。 默认分支通常名为​**main**​，旧一点的储存库可能名为​**master**​。

* 将 `main`​ 分支 push 到 GitHub：

  ```
  $ git push -u origin main
  ```
* 默认情况下 `public/`​ 不会被上传(也不该被上传)，确保 `.gitignore`​ 文件中包含一行 `public/`​。 整体文件夹结构应该与 [示例储存库](https://github.com/hexojs/hexo-starter) 大致相似。

3. 使用 `node --version`​ 指令检查你电脑上的 Node.js 版本。 记下主要版本（例如，`v20.y.z`​）
4. 在储存库中前往 **Settings** \> **Pages** \> **Source** 。 将 source 更改为 ​**GitHub Actions**​，然后保存。
5. 在储存库中建立 `.github/workflows/pages.yml`​，并填入以下内容 (将 `20`​ 替换为上个步骤中记下的版本)：

.github/workflows/pages.yml

```
name: Pages

on:
  push:
    branches:
      - main # default branch

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
          # If your repository depends on submodule, please see: https://github.com/actions/checkout
          submodules: recursive
      - name: Use Node.js 20
        uses: actions/setup-node@v4
        with:
          # Examples: 20, 18.19, >=16.20.2, lts/Iron, lts/Hydrogen, *, latest, current, node
          # Ref: https://github.com/actions/setup-node#supported-version-syntax
          node-version: "20"
      - name: Cache NPM dependencies
        uses: actions/cache@v4
        with:
          path: node_modules
          key: ${{ runner.OS }}-npm-cache
          restore-keys: |
            ${{ runner.OS }}-npm-cache
      - name: Install Dependencies
        run: npm install
      - name: Build
        run: npm run build
      - name: Upload Pages artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./public
  deploy:
    needs: build
    permissions:
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

6. 部署完成后，前往 ​*username*​.github.io 查看网页。

若你使用了一个带有 `CNAME`​ 的自定义域名，你需要在 `source/`​ 文件夹中新增 `CNAME`​ 文件。 [更多信息](https://docs.github.com/zh/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)

## 项目页面

如果您希望在 GitHub 上有一个项目页面：

1. 导航到 GitHub 上的存储库。 转到 **Settings** 选项卡。 建立名为 `<repository 的名字>`​ 的储存库，这样你的博客网址为 `<你的 GitHub 用户名>.github.io/<repository 的名字>`​，repository 的名字可以任意，例如 blog 或 hexo。
2. 编辑你的 `_config.yml`​，将 `url:`​ 更改为 `<你的 GitHub 用户名>.github.io/<repository 的名字>`​。
3. 在 GitHub 仓库的设置中，导航至 **Settings** \> **Pages** \> **Source** 。 将 source 更改为 ​**GitHub Actions**​，然后保存。
4. Commit 并 push 到默认分支上。
5. 部署完成后，前往 ​*username*​.github.io/*repository* 查看网页。
