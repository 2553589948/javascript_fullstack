// // 造人的模版
// function shangdi() {}
// shangdi.prototype.zaoren_yanjing = function() {
//   console.log('眼睛')
// }
// shangdi.prototype.zaoren_bizi = function() {
//   console.log('鼻子')
// }
// shangdi.prototype.zaoren_zuiba = function() {
//   console.log('嘴巴')
// }
// shangdi.prototype.aihao = function() {
//   throw new Error('我只是一个钩子，需要你自己去探索')
// }

// // 小明
// function xiaoming() {
//   console.log('小明是上帝的子类')
//   shangdi.call(this)
// }
// xiaoming.prototype = new shangdi()
// xiaoming.prototype.aihao = function() {
//   console.log('小明爱讲笑话')
// }



// -----------------------------------------------
function liucheng() {}
liucheng.prototype.start = function() {
  confirm('您是否需要进入游戏')
}
liucheng.prototype.loading = function() {
  confirm('游戏加载中...')
}
liucheng.prototype.out = function() {
  confirm('您是否要离开游戏')
}

function xiaojigege() {
  // 游戏内容
}
xiaojigege.prototype = new liucheng()
xiaojigege.start()