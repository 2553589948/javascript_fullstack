export function setLocalStroageData (item, obj) {
  localStorage.setItem(item, JSON.stringify(obj))
}

export function getLocalStroageData (item) {
  JSON.parse(localStorage.getItem(item))
}