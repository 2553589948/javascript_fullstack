// function cloneShallow(source) {  //浅拷贝方法
//   var target = {}
//   for (var key in source) {
//     //只能拷贝自己本身拥有的,继承的不行
//     if (Object.prototype.hasOwnProperty.call(source, key)) {           
//       target[key] = source[key]
//     }
//   }
//   return target
// }
// let a = {
//   name: 'wn',
//   book: {
//     title: 'you are',
//     price: '45'
//   }
// }
// let b = cloneShallow(a)
// a.name = '蜗牛'
// a.book.price = '55'
// console.log(b)


// function cloneDeep(source) {  //深拷贝方法
//   if (typeof source !== 'object') {
//     return source
//   }
//   var target = Array.isArray(source) ? [] : {}
//   for (var key in source) {
//     //只能拷贝自己本身拥有的,继承的不行
//     if (Object.prototype.hasOwnProperty.call(source, key)) {
//       if (typeof source[key] === 'object') {
//         // instanceof判断复杂数据类型 typeof 判断基础数据类型(判断复杂数据类型都是对象)
//         target[key] = cloneDeep(source[key])
//       } else {
//         target[key] = source[key]
//       }           
//     }
//   }
//   return target
// }
// let a = {           //深拷贝(对象)
//   name: 'wn',
//   book: {
//     title: 'you are',
//     price: '45'
//   }
// }
// let b = cloneDeep(a)
// a.name = '蜗牛'
// a.book.price = '55'
// console.log(b)

// let a = [0, '1', [2, 3]]  //深拷贝(数组)
// let b = cloneDeep(a)
// a[0] = 9
// a[2][0] = 4
// console.log(b)


function cloneDeep2(x) { //用栈实现深拷贝
  const root = {}
  //栈
  const loopList = [
    {
      parent: root,
      key: undefined,
      data: x
    }
  ]

  while (loopList.length) {
    // 广度优先
    const node = loopList.pop()  //pop()尾部出栈方法
    const parent = node.parent
    const key = node.key
    const data = node.data

    let res = parent
    //初始化赋值目标，key为undefined的话拷贝到父元素，否则拷贝到子元素
    if (typeof key !== 'undefined') {
      res = parent[key] = {}
    }
    for (let k in data) {
      if (data.hasOwnProperty(k)) {
        if (typeof data[k] === 'object') {
          //进行下一次循环
          loopList.push({
            parent: res,
            key: k,
            data: data[k]
          })
        } else {
          res[k] = data[k]
        }
      }
    }
  }
  return root
}

let a = {
  name: 'wn',
  book: {
    title: 'you are',
    price: '45'
  }
}
let b = cloneDeep2(a)
a.name = 'www'
a.book.price = '55'
console.log(b)