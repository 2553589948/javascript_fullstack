// const data = {}
// const element = document.getElementById('myDiv')

// data[element] = 'kyle'
// data['[object HTMLDivElement]']

// Map数据结构的数据key值可以是任何数据类型
const m = new Map()
const o = {p: 'hello world'}

m.set(o, 'content') // .set()方法是map的一个方法,用来设置或修改实例当中的值
m.delete(o)
// console.log(m.has(o))
// console.log(m.get(o))

const items = new Map([
  ['name', 'kyle'],
  ['sex', 'boy']
])
// 执行过程如下
/* const item = [
  ['name', 'kyle'],
  ['sex', 'boy']
]
item.forEach(([key, value]) => items.set(key, value)) */
// 执行结果如下
/* items = {
  'name': 'kyle',
  'sex': 'boy'
} */
console.log(items.size)
console.log(items.has('name'))
console.log(items.get('name'))

// 实际上不仅仅是数组,任何具有迭代器(Iterator)的接口，只要是每一个成员都是双元素数组的数据结构,都可以作为Map的参数，所以Set、Map都可以用来生成新的Map

const set = new Set([
  ['foo', 1],
  ['bar', 2]
])

const m1 = new Map(set)

console.log(m1.get('foo'))

const m2 = new Map([['baz', 3]])
console.log(m2)
const m3 = new Map(m2)

console.log(m3.get('baz'))

const m5 = new Map()
m5.set(1, 'aaa').set(2, 'bbb').set(1, 'bbb')
console.log(m5)
console.log(m5.get(3))

// 相同的key值在不同对象的引用，Map结构中视为两个key值
const m6 = new Map()
const k1 = ['a']
const k2 = ['a']

m6.set(k1, 111).set(k2, 222)
console.log(m6)

// 这是特例，其他正负值不可以 布尔值、undefined、null也不可以 NaN能被作为key值
let m7 = new Map()
m7.set(-0, 123)
console.log(m7.get(+0))


// 实例属性和操作方法
const m8 = new Map()
// m8.set('foo', true)
// m8.set('bar', false)
m8.set('abc', 123).set(22, 'abc').set(undefined, NaN)
console.log(m8)
console.log(m8.size)
console.log(m8.get(22))
console.log(m8.has(undefined))
console.log(m8.has(123))
// console.log(m8.get(123))
m8.clear()
console.log(m8)

// 遍历
// Map数据结构的遍历顺序一定会按照数据本身的顺序进行
const m9 = new Map([
  ['foo', 'no'],
  ['bar', 'yes']
])

console.log(m9)
console.log(m9.keys())

// console.log(Object.prototype.toString.call(m9.keys())) // 类型判断

// for (let key of m9.keys()) {
//   console.log(key)
// }

// for (let value of m9.values()) {
//   console.log(value)
// }

for (let item of m9.entries()) {
  console.log(item)
}

for (let item of m9.entries()) {
  console.log(item[0], item[1])
}

for (let [key, value] of m9.entries()) {
  console.log(key, value)
}

// console.log(Map.prototype[Symbol.iterator] === Map.prototype.entries)

for (let [key, value] of m9) {
  console.log(key, value)
}


// Map转为数据结构
const m10 = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three']
])

// [...m10.keys()]
// [...m10.values()]
// [...m10.entries()]
// [...m10]

// 类对象可以被forEach遍历
m10.forEach((value, key, m10) => { // 注意参数
  console.log(key + ':' + value, m10)
})

Array.from(m10).map((k, idx) => {
  console.log(`${k}: ${idx}`)
})

const m12 = new Map()
m12.set(1, 'a').set(2, 'b').set(3, 'c')
console.log(Array.from(m12)) //数组的每一项作为key值 value值为下标
Array.from(m12).filter(([k, v]) => {
  console.log(k < 3)
})


// Map => 对象
function setMapToObj(strMap) {
  let obj = Object.create(null)
  for (let [k, v] of strMap) {
    obj[k] = v
  }
  return obj
}
const myMap = new Map()
myMap.set('yes', true).set('no', false)
console.log(setMapToObj(myMap))

// 对象 => Map
let obj = {
  'yes': true,
  'no': false
}
function setObjToMap(obj) {
  let strMap = new Map()
  for(let key in obj) {  // let key of Object.keys(obj)
    console.log(key)
    strMap.set(key, obj[key])
  }
  return strMap
}

console.log(setObjToMap(obj))
