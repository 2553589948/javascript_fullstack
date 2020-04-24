var fuhao = {

}

fuhao.huofang = function () {
  return "馒头"
}

fuhao.chuliliangshi = function () {
  return "面粉"
}

fuhao.mantou = function () {
  this.chuliliangshi()
  this.huofang()
}

// 人们想拿到馒头，第一个需要做的是让系统产生馒头
fuhao.men = function() {
  return this.mantou()
}