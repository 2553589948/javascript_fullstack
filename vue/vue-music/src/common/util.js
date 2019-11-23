export function debounce (func, delay) {
  let timer
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay);
  }
}

export function findIndex (list, song) { // 自定义findIndex()方法
  return list.findIndex((item) => { //原生js自带的方法findIndex()返回查询元素的下标
    return item.id === song.id //返回值为布尔值存在为true
  })
}