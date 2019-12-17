// const ws = new WeakSet()
// ws.add({a: 1})  // weakSet能存对象
// ws.add(1) weakSet没有add方法 Symbol()也会失效

const b = [[1, 2], [3, 4]]
const ws = new WeakSet(b) // weakSet可以接受一个数组或者类数组作为参数，该数组的所有成员，都会自动成为weakSet实例对象的成员
console.log(ws)

const c = [5, 6]
// const ws1 = new WeakSet(c)
// console.log(ws1) // 但是，传进来的数组的成员只能是对象

const ws2 = new WeakSet()
const obj = {}
const foo = {}

// ws2.add(window)
ws2.add(obj) // weakSet有add,has,delete方法
ws2.has(obj)
ws2.delete(obj)

console.log(ws2.has(obj))

ws2.add(foo)
console.log(ws2.size) //weakSet没有size属性,所以它也不能被遍历

const foos = new WeakSet()
// foos对实例的引用，不会被记入到内存回收机制当中，所以删除实例的时候不用考虑foos,也不会出现内存泄漏
class Foo {
  constructor() {
    foos.add(this)
  }
  method () {
    if (!foos.has(this)) {
      throw new TypeError('error')
    }
  }
}
let faa = new Foo()
// 保证Foo的实例方法只能在Foo的实例上调用
