// a = (3,2)
// b = (4,3)
// c = (5,4)
// 包最大承重5
// function fn(type, capacity) {
//   return a || b || a+b || c
// }

var vals = [3, 4, 5, 7, 20]
var weights = [2, 3, 4, 1, 5],
    capacity = 5,
    n = vals.length

function pack(weights, vals, capacity, n) {
  let T = []
  for (let i = 0; i < n; i++) {
    T[i] = [] // [[], [], []]
    for (let j = 0; j <= capacity; j++) {
      if (j === 0) { // 容量为0
        T[i][j] = 0
        continue
      }

      if (j < weights[i]) { // 容量小于商品质量
        if (i === 0) {
          T[i][j] = 0
        } else {
          T[i][j] = T[i - 1][j]
        }
        continue
      }

      if (i === 0) {
        T[i][j] = vals[i]
      } else {
        T[i][j] = Math.max(vals[i] + T[i - 1][j - weights[i]], T[i - 1][j])
      }
    }
  }
  console.log('11111', T)
  findValue(weights, vals, capacity, n, T)
  return T
}

function findValue(weights, vals, capacity, n, T) { // 找需要的物品
  var i = n - 1, j = capacity
  while (i > 0 && j > 0) {
    if (T[i][j] !== T[i - 1][j]) {
      console.log(`选择物品:${i},重量：${weights[i]},价值：${vals[i]}`)
      j = j - weights[i]
      i--
    } else {
      i--
    }
  }
  if (i === 0) {
    if (T[i][j] !== 0) {
      console.log(`选择物品:${i},重量：${weights[i]},价值：${vals[i]}`)
    }
  }
}

pack(weights, vals, capacity, n)