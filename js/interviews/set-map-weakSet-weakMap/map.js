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

// 实际上不仅仅是数组,任何具有迭代器的接口，只要是每一个成员都是双元素数组的数据结构,都可以作为Map的参数，所以Set、Map都可以用来生成新的Map

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