const a = {
  b: 1
}

function fn () {
  console.log('a的值发生改变了', a.b)
}

function bindData () {
  Object.keys(a).map(key => {
    let v = a[key]
    Object.defineProperty(a, key, {
      get() { // 读取属性的时候会被调用
        console.log('正在读取a里面的值')
        return v
      },
      set(newVal) { // 写入属性时会被调用
        v = newVal
        fn()
      }
    }) // defineProperty()只能监听对象属性的变化,参数分别为对象,对象的属性,defineProperty()里自带的方法
  })
}

bindData()

a.b = 123

// console.log(a.b)