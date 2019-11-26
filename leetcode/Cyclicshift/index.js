// 循环移位
// [1, 2, 3, 4, 5, 6, 7] k = 3
// 7 1 2 3 4 5 6
// 6 7 1 2 3 4 5
// 5 6 7 1 2 3 4

// 空间复杂度0(n) 时间复杂度0(n)
// var arr = [-1, -100, 3, 99], k = 2
// function Rshift (arr, k) {
//   const newArr = [...arr]
//   const n = arr.length
//   if (k % n === 0) return
//   for (let i = 0; i < n; i++) {
//     arr[i] = newArr[(k + i) % n]
//   }
//   return arr
// }
// console.log(Rshift(arr, k))

// 0(1) 时间复杂度n*k
// var arr = [-1, -100, 3, 99], k = 2
// function Rshift (arr, k) {
//   const n = arr.length
//   if (k % n === 0) {return arr}
//   let cnt = Math.abs(k > 0 ? k % n : n + (k % n))
//   let t = null
//   while (cnt--) {
//     t = arr[n - 1]
//     for (let i = n - 1; i > 0; i--) {
//       arr[i] = arr[i - 1]
//       // console.log(arr)
//     }
//     arr[0] = t
//   }
//   return arr
// }
// console.log(Rshift(arr, k))

// 三次翻转
// [0, n-k-1]
// [n-k, n-1]
// [0, n-1]
// 0(1) 时间复杂度n
var arr = [-1, -100, 3, 99], k = 2
function reverse(list, start, end) {
  let t = null
  while (start < end) {
    t = list[start]
    list[start] = list[end]
    list[end] = t
    start++
    end--
  }
}
function Rshift (list, k) {
  const n = list.length
  if (k % n === 0) {return arr}
  reverse(list, 0, n-k-1)
  reverse(list, n-k, n-1)
  reverse(list, 0, n-1)
  return list
}
console.log(Rshift(arr, k))
