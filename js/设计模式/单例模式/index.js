// 独立对象， 创建2个 一个是xiaowang   一个是xiaoli
// 让 xiaoli 跟 xiaowang 通过门铃进行通信
// 先看 xiaowang 家有没有门， 如果有们，直接敲门didi，如果没有门，先建门
// 两个单例开始通信

// var test = {
//   name: 'wn',
//   fn =  function() {

//   }
// }

var xiaowang = (function(argument) {
  var xiaowangjia = function(message) {
    this.menling = message
  }
  var men;
  var info = {
    sendMessage: function(message) {
      if (!men) {
        men = new xiaowangjia(message)
      }
      return men
    }
  }
  return info
})()



var xiaoli = {
  callXiaowang: function() {
    var _xw = xiaowang.sendMessage()
    alert(_xw)
  }
}






var person = {
  name: 'wn',
  age: 18,
  eat = function() {

  },
  run = function() {
    animal.run()
  }
}


var animal = {
  name: '小黑',
  wight: '20kg',
  run = function() {

  }
}
