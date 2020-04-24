// 这是一个抽象(复杂)的工厂
var XMLHttpFactory = function() {

} 
XMLHttpFactory.prototype = {
  // 如果真的要调用这个方法会抛出一个错误，他不能被实例化，只能用来派生子类
  createFactory: function() {
    throw new Error('This is an abstract class')
  }
}

var XHRHandler = function() {
  XMLHttpFactory.call(this)
}
XHRHandler.prototype = new XMLHttpFactory()
XHRHandler.prototype.constructor = XHRHandler 


// 重新定义createFactory方法
XHRHandler.prototype.createFactory = function () {
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