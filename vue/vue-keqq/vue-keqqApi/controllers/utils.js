let getNowFormatDate = function () {
  var date = new Date()
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var strDate = date.getDate()
  var hour = date.getHours()
  var min = date.getMinutes()
  // var second = date.getSeconds()

  if (month >= 1 && month <= 9) {
    month = '0' + month
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = '0' + strDate
  }
  if (hour >= 0 && hour <= 9) {
    hour = '0' + hour
  }
  if (min >= 0 && min <= 9) {
    min = '0' + min
  }
  // if (second >= 0 && second <= 9) {
  //   second = '0' + second
  // }
  var currentdate = year + '-' + month + '-' + strDate + ' ' + hour + ':' + min
  return currentdate
}

module.exports = {
  getNowFormatDate
}