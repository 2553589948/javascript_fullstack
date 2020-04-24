// 这是一个简单的工厂
var XMLHttpFactory = function() {

} 

XMLHttpFactory.createXMLHttp = function () {
  var XMLHttp = null
  // XMLHttpFactory.createXMLHttp() 这个方法根据当前环境的具体情况返回一个XHR对象
  if (window.XMLHttpRequest) {
    XMLHttp = new XMLHttpRequest()
  } else if (window.ActiveXObject) {
    XMLHttp = new ActiveXObject("Microsoft.XMLHTTP")
  }
  return XMLHttp
} 


var AjaxHander = function() {
  var XMLHttp = XMLHttpFactory.createXMLHttp() // 具体操作
}