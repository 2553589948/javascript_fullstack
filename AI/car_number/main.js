var AipOcrClient = require('baidu-aip-sdk').ocr // ocr从图片中提取文字
var fs = require('fs')

var image = fs.readFileSync('./car2.jpg').toString('base64') // 文件本身就是二进制文本

var APP_ID = "17799064"
var API_KEY = "dFw3E4nkah49RCckzuNxvs5A"
var SECRET_KEY = "XsmqFm9F6xnssK2Y4IllrSo7FssRgA47"

var client = new AipOcrClient(APP_ID, API_KEY, SECRET_KEY)

var options = {}
client.licensePlate(image, options).then(function(res) {
  console.log(res)
}).catch(function(err) {
  console.log(err)
})