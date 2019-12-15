// set map weakSet weakMap
var a = new Set() //类似数组,成员的值是唯一的 Set()是一种数据解构 add()是set的方法
Array.from([2,3,4,5,6,4,2,1]).forEach(x => a.add(x))
console.log(a)

// 获取Set()数组的长度只能用.size方法
const items = new Set([1,2,3,4,5,5,5,5])
console.log(items.size)

// [...new Set(array)]
// [...new Set('abcbcd')].join('') 可以用来字符串去重

let set = new Set()
let b = NaN
let c = NaN
set.add(b)
set.add(c)
console.log(set)

// NaN对set来说是一样的东西 {}对set来说是不一样的东西

// set.add({})
// console.log(set.size)
// set.add({})
// console.log(set.size)

// set的has(), delete()方法


let set2 = new Set(['red', 'green', 'blue']) // set存储格式[{'red': 'red'}]
for(let item of set2.keys()) {
  // console.log(item)
}

for(let item of set2.values()) {
  // console.log(item)
}

for(let item of set2.entries()) {
  // console.log(item)
}

// console.log(Set.prototype[Symbol.iterator] === Set.prototype.values)

set2.forEach((value, key) => { // 类数组也可以用forEach
  console.log(key + ':' + value)
})

// let arr1 = [...set2]
// console.log(arr1)

let set3 = new Set([1,2,3])
// set()不支持map,filter方法
// set3 = [...set3].map(x => x * 2)
// set3 = [...set3].filter(x => (x % 2) == 0)
// console.log(set3)

let d = new Set([4,3,2])
// 并集
let union = new Set([...set3, ...d])
// 交集
let intersect = new Set([...set3].filter(x => d.has(x)))
// 差集
let diff = new Set([...set3].filter(x => !d.has(x)))
console.log(union)