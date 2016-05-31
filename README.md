title: 【Node.js】爬虫--抓取新闻标题、图片、文字描述，支持QQ、iFeng
categories: Node.js
tags:
  - Node.js
date: 2016-05-31 15:47:44

---
先上效果图：

图片上部分为待解析的网页新闻链接，支持一次输入多个.
图片下部分为解析的进度日志打印。

![qq.img.spider02](http://ww3.sinaimg.cn/mw1024/e3dc9ceagw1f4el9evyyaj20og0egjtd.jpg)

点击'Commit'之后，对比效果图如下。左边为腾讯新闻原网页，右边为抓取后的整合效果。

![qq.img.spider](http://ww1.sinaimg.cn/mw1024/e3dc9ceagw1f4ekk8zsjvj21c20pwn49.jpg)


GitHub源码链接：[Sodino#ImgSpider](https://github.com/sodino/ImgSpider/)

工程结构：

|文件名|描述|
|-----|----|
|app.js|程序启动|
|img-spider.js|爬虫爬取管理|
|ifengImgs.js|爬取iFeng下game/fashion的实现|
|ifengPictures.js|爬取iFeng下game高清图的实现|
|qqImgs.js|爬取腾讯新闻图的实现|
|img.gallery.js|爬取图片的汇总|
|imgs.html|提交爬取链接的html界面|



应用到的知识点：

* express:搭建Web服务
* cheerio:类似jQuery的快速解析网页工具
* iconv-lite:解决中文乱码问题
* 正则表达式:网址匹配、内容匹配/过滤
* Charles:抓包工具



更多细节看源码吧....


---
[About Sodino](http://sodino.com/about/)
