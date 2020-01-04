// 动态规划
// 找出两个数相加等于固定值 
let arr = [13, 1, 2, 5, 3, 8, 11]
let sum = 18
// function findSum(arr, sum) { // 时间复杂度(n^2)
//   for(let i = 0; i < arr.length; i++) {
//     for(let j = i + 1; i < arr.length; j++) {
//       if (arr[i] + arr[j] === sum) {
//         console.log(i, j, arr[i], arr[j])
//       }
//     }
//   }
// }
// findSum(arr, sum)


function findSum1(arr, sum) { // 时间复杂度(n)
  let obj = {}
  arr.forEach((v, i) => {
    if (String(v) in obj) {
      console.log('找到了' + obj[v], i)
    }
    obj[sum - v] = i
  })
}
findSum1(arr, sum)

// 二分法查找
let arr1 = [1,2,3,5,7,10,11,13,15,18,20,23]
// arr1.forEach((val, index) => { // 时间复杂度(n)
//   if (val === 20) {
//     console.log(index)
//   }
// })

function search(arr, item) { // 时间复杂度(log(n))
  let low = 0
  let heigh = arr.length - 1
  let mid
  let element
  while (low <= heigh) {
    mid = Math.floor((low + heigh) / 2)
    element = arr[mid]
    if (element < item) {
      low = mid + 1
    } else if (element > item) {
      heigh = mid - 1
    } else {
      return mid
    }
  }
  return -1
}
console.log(search(arr1, 20))