export function setLocalStroageData (item, obj) {
  localStorage.setItem(item, JSON.stringify(obj))
}

export function getLocalStroageData (item) {
  JSON.parse(localStorage.getItem(item))
}

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