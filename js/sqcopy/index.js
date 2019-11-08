// let a = 'wn'
// let b = a
// a = '蜗牛'
// console.log(b)  //wn  深拷贝

// let a = {
//   name: 'wn',
//   book: {
//     title: 'you are',
//     price: '45'
//   }
// }
// let b = a
// a.name = '蜗牛'
// a.book.price = '55'
// console.log(b)  // 浅拷贝

// let a = {
//   name: 'wn',
//   book: {
//     title: 'you are',
//     price: '45'
//   }
// }
// let b = Object.assign({}, a)
// let b = {...a}  //解构
// a.name = '蜗牛'
// a.book.price = '55'
// console.log(b)   //Object.assign()、{...a}、slice()是深拷贝还是浅拷贝取决于数据类型(基础数据类型:深拷贝,引用类型:浅拷贝)

// let a = [0, '1', [2, 3]]
// let b = a.slice(1)
// a[1] = '22'
// a[2][0] = 4
// console.log(b)

let a = {
  name: 'wn',
  book: {
    title: 'you are',
    price: '45'
  }
}
let b = JSON.parse(JSON.stringify(a))  // 深拷贝
console.log(b)
a.name = '蜗牛'
a.book.price = '55'
console.log(b)