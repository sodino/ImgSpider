var img_spider = require('./img-spider.js');

//var string = 'http://games.ifeng.com/a/20160504/41603363_0.shtml \n\r http://news.qq.com/a/20160510/034621.htm#p=1 http://games.ifeng.com/picture/gaoqing/detail_2015_09/11/41081883_0.shtml'
//var string = 'http://news.qq.com/a/20160510/034621.htm#p=1'
var string = 'http://news.ifeng.com/a/20160519/48804958_0.shtml#p=1'
var arr = string.split(/\s+/);

var imgSpider = new img_spider();
imgSpider.spider(arr, (err, arrImgGallery)=>{
	console.log('arrImgGallery');
	console.log(arrImgGallery);
});