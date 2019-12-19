let selesOffices = {} //售楼部
selesOffices.books = [] // 缓存列表 花名册,存放订阅者的回调函数

selesOffices.listen = function(fn) { // 增加订阅者的方法(记录订阅者的信息)
  this.books.push(fn) // 订阅的信息添加到缓存列表
}

selesOffices.trigger = function() {
  // 发布消息
  // for (let i = 0, fn; (fn = selesOffices.books[i++]);) {
  //   fn.apply(this, args)
  // }
  for (let i = 0; i < selesOffices.books.length; i++) {
    let fn = selesOffices.books[i]
    fn.apply(this, arguments)
  }
}

selesOffices.listen(function(price, squareMeter) { // 订阅
  // 订阅者(购买者a)
  console.log(`价格是: ${price}`)
  console.log(`面积是: ${squareMeter}`)
})

selesOffices.listen(function(price, squareMeter) { // 订阅
  // 订阅者(购买者b)
  console.log(`价格是: ${price}`)
  console.log(`面积是: ${squareMeter}`)
})

selesOffices.trigger(20000, 100)