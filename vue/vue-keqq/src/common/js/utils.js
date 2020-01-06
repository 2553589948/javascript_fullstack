export function getDateDiff (dateTimeStamp) {
  // 时间字符串转时间戳
  var timestamp = new Date(dateTimeStamp).getTime()

  var minute = 1000 * 60
  var hour = minute * 60
  var day = hour * 24
  var now = new Date().getTime()
  var diffValue = now - timestamp
  var result
  if (diffValue < 0) {
    return
  }
  var dayC = diffValue / day
  var hourC = diffValue / hour
  var minC = diffValue / minute
  if (dayC > 4) {
    return dateTimeStamp
  } else if (dayC >= 1 && dayC <= 4) {
    result = '' + parseInt(dayC) + '天前'
  } else if (hourC >= 1) {
    result = '' + parseInt(hourC) + '小时前'
  } else if (minC >= 1) {
    result = '' + parseInt(minC) + '分钟前'
  } else {
    result = '刚刚'
  }
  return result
}
