var AipImageClassifyClient = require('baidu-aip-sdk').imageClassify //图片分类
var fs = require('fs')  //文件模块

var APP_ID = "17798942"
var API_KEY = "CPMBtNIVHr1GotGfT9ZzkP7V"
var SECRET_KEY = "NCptYCWaxADuzOOYsfhqDM2hQH8jGO0g"
// I/O(把文件读取到内存中)
// readFileSync同步 base64格式内存更小
var image = fs.readFileSync('car.jpg').toString("base64")

var client = new AipImageClassifyClient(APP_ID, API_KEY, SECRET_KEY)
client.carDetect(image).then(function(result) {
  console.log(result)
}).catch(function(err) {
  console.log(err)
})

// console.log(image)