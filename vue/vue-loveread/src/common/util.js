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