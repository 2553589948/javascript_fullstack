// 转换为单位万并取小数点后一位
export function numToFixed (num) {
  if (num / 10000 < 1) {
    return num
  }
  return (Math.round(num / 1000) / 10).toFixed(1)
}

// 防抖
export function debounce (func, delay) {
  let timer
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

export function getDateDiff(dateTimeStamp) {
  // 时间字符串转时间戳
  var timestamp = new Date(dateTimeStamp).getTime();
  
  var minute = 1000 * 60;
  var hour = minute * 60;
  var day = hour * 24;
  var halfamonth = day * 15;
  var month = day * 30;
  var year = day * 365;
  var now = new Date().getTime();
  var diffValue = now - timestamp;
  var result;
  if (diffValue < 0) {
      return;
  }
  var yearC = diffValue / year;
  var monthC = diffValue / month;
  var weekC = diffValue / (7 * day);
  var dayC = diffValue / day;
  var hourC = diffValue / hour;
  var minC = diffValue / minute;
  if (yearC >= 1) {
      result = "" + parseInt(yearC) + "年前";
  } else if (monthC >= 1) {
      result = "" + parseInt(monthC) + "月前";
  } else if (weekC >= 1) {
      result = "" + parseInt(weekC) + "周前";
  } else if (dayC >= 1) {
      result = "" + parseInt(dayC) + "天前";
  } else if (hourC >= 1) {
      result = "" + parseInt(hourC) + "小时前";
  } else if (minC >= 1) {
      result = "" + parseInt(minC) + "分钟前";
  } else
      result = "刚刚";
  return result;
}