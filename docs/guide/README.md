---
sidebar: auto
---

# 操作指引

::: warning 小心留意
《操作指引》文件尚未完成編撰，本處所見內容僅是示意用舉例，非本部落真正之操作指引。
:::

## 簡介

本操作指引用於導引使用者，知曉如何透過本 [VuePress 部落格模版](https://github.com/AlanJui/vuepress-blog)，創造個人專屬之部落格。對於模版未盡滿意處，請參考 [VuePress](https://vuepress.vuejs.org) 官網技術文件，自行擴展功能。

## 開始啟用

### 事前準備

- [NodeJS >= 8](https://nodejs.org/)
- [yarn](https://yarnpkg.com/lang/en/docs/install/) (可考慮選項)
- 略通「終端機」之操作，知曉指令如何輸入及執行

### 安裝作業

決定好「工作目錄」所在路徑，然後啟動「終端機」軟體，透過 cd 指令進入工作目錄。

::: tip
「工作目錄」參考，例如： `~/workspace/vuepress/`
:::


```bash
# 自 Git 容器下載本部落格模版至個人端
git clone https://github.com/AlanJui/vuepress-blog.git

# 進入部落格模版所在目錄處
cd vuepress-blog

# 安裝 Node.js 相關模組套件
npm install # or yarn

# 啟動編輯操作模式
npm run dev # OR yarn dev
```

打開「瀏覽器」軟體，在「網址」處輸入 [http://localhost:8080](http://localhost:8080) ，然後觀察瀏覽器輸出之網頁內容。

## 操作教學

### 文章編輯作業

1. 在子目錄路徑處：·`./docs/posts/` ，建立一個名為： `my-post.md` 之 Markdown 檔案。

::: tip
檔案建立，可透過終端機下指令完成：

 `$ touch ./docs/posts/my-post.md`
:::

若是使用「檔案總管」瀏覽此工作目錄，各個「目錄」與「檔案」之結構關聯，將如下圖所示：

```{12}
.
├── README.md
├── deploy.sh
├── docs
│   ├── .vuepress
│   ├── README.md
│   ├── guide
│   │   └── README.md
│   └── posts
│       ├── README.md
│       ├── pipenv_Shell_Prompt.md
│       ├── my-post.md 
│       ├── 在_Ubuntu_18_04_使用_Vagrant_Box_for_Libvirt.md
│       └── 在_macOS_Catlina_安裝_Vue_js.md
├── node_modules/
│   ├── ```
│   ├── ```
│   └── ``` 
├── package-lock.json
└── package.json
```

2. 啟動個人慣用之「文字編輯器」，並打開檔案： `my-post.md` ，準備開始進行文件之編輯作業。

3. 將以下範例複製並貼入 `my-post.md` 檔案之中：

```
---
title: 我的首篇發文
date: 2019-10-20 22:52:00
description: 試用 VuePress 部落格模版，學習如何「發文」之操作程序⋯⋯
sidebar: auto 
---

# 大家好！

我的部落格開張囉，這是我的首篇發文，請多指教嘿！

::: tip
我的部落格好看嗎？告訴你，製作過程超簡單！
::

> 「懷才就跟懷孕一樣，時間久了才能讓人看出來。」⋯⋯⋯語出：`《不正經格言錄》`
```

4.  :confetti_ball: 完成「存檔」後，再次回到「瀏覽器」，點擊首頁右上方的「文章」連結，接著將可看到剛完成的「發文」。


### 文章發佈作業

以 GitPage 為例，說明存放於個人端之部落格文章，如何將發佈到 HTTP 伺服器。

執行以下指令，要求 VuePress 將原屬 Markdown 檔案格式之文章，轉換成「網頁」專用之 HTML 檔案格式。

	$ . deploy.sh

## 學習資源

### VjuePress 簡易入門教學影片

[VuePress Tutorial - Learn how to use VuePress for a Documentation Site (Beginner)](https://www.youtube.com/watch?v=5Kqyhu_eIcw)

<iframe width="560" height="315" src="https://www.youtube.com/embed/5Kqyhu_eIcw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Vue.js 快速入門教學影片

[Vue JS Crash Course - 2019](https://www.youtube.com/watch?v=Wy9q22isx3U)

<iframe width="560" height="315" src="https://www.youtube.com/embed/Wy9q22isx3U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

