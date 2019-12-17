global.gc() // 垃圾回收
console.log(process.memoryUsage())

// 引用计数(垃圾回收机制之一)
let array = new Array(4 * 1024) // 谁来引用这个大对象 计数+1
// let map = new Map()
// WeakMap即便key引用着array 但是垃圾回收不把它考虑在内 依然会回收array
let map = new WeakMap()

// map开始引用这个大对象
map.set(array, 4) // 计数+1

array = null // 计数-1  计数为0时开始垃圾回收

global.gc()
console.log(process.memoryUsage())