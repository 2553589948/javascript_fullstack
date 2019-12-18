const wm = new WeakMap()
const key = {foo: 1}
wm.set(key, 2) // {foo: 1}: 2
console.log(wm)

const k1 = [1, 2, 3]
const k2 = [4, 5, 6]
const wm2 = new WeakMap([[k1, 'foo'], [k2, 'bar']]) //传参的方式可接收数组
console.log(wm2.get(k2))

const wm3 = new WeakMap()
// wm3.set(1, 2) // 因为1不是Object
// wm3.set(null, 3) // null也不行
console.log(wm3.get(1))
console.log(wm3.get(null))


// weakMap的set方法只接受对象(null除外)作为键名(key值),不接受其他类型的值作为键名


// const e1 = document.getElementById('foo')
// const e2 = document.getElementById('bar')
// const arr = [
//   [e1, 'foo元素'],
//   [e2, 'bar元素']
// ]

// 当你不需要e1和e2的时候,必须手动删除
// arr[0] = null
// arr[1] = null

// const wm5 = new WeakMap()
// const ele = document.getElementById('test')
// wm5.set(ele, 'some information')
// wm5.get(ele) // 用完之后垃圾回收机制会自动清除,释放内存

const wm6 = new WeakMap()
let key1 = {}
let obj = {foo: 2}

wm6.set(key, obj)
console.log(wm6.get(key))
obj = null
console.log(wm6.get(key))
// WeakMap弱引用的只是键名,不是键值(value值)


const wm7 = new WeakMap()
console.log(wm7.size)
// weakMap没有size forEach clear方法

// 应用场景 不用了就不会占用内存
let myele = document.getElementById('logo')
let myWeakMap = new WeakMap()

myWeakMap.set(myele, {timesClicked: 0})
myele.addEventListener('click', function() {
  let logoData = myWeakMap.get(myele)
  logoData.timesClicked++
})