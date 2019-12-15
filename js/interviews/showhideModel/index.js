// var foo = {}
// var foo = new Object()
// var F = function() {}
// Object.prototype.a = 'valA'
// Function.prototype.b = 'valB'

// console.log(foo.a)
// console.log(foo.b)
// console.log(F.b)
// console.log(F.a)


// function Person(name) {
//   this.name = name
//   return {}
// }
// let p = new Person('wn')
// console.log(p)


// let arr = [] ===恒等于 let arr = new Array()
Array.prototype.method = function() {}
var myArray = [1, 2, 3, 4, 5, 6, 7]
myArray.name = 'wn'
for (let index in myArray) {
  console.log(index)
}
// for in
// 1.index是索引
// 2.遍历的顺序可能不是按照实际数组的内部顺序进行的
// 3.使用for in会遍历数组的所有可枚举属性,包括原型对象上的

// for of
// 1.遍历的是数组的元素
// 2.遍历不包括数组的原型对象上的属性和索引