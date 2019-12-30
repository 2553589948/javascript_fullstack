let http = require('http')
let EventEmitter = require('events') // 原生node的event涉及队列
let context = require('./context')
let request = require('./request')
let response = require('./response')
let Stream = require('stream') // node自带

class Koa extends EventEmitter {
  constructor () {
    super() // 用来继承EventEmitter中的方法
    // this.fn // 一个函数
    this.middlewares = [] // 存放中间件(多个函数)的数组
    this.context = context
    this.request = request
    this.response = response
  }

  use (fn) {
    // this.fn = fn
    this.middlewares.push(fn)
  }

  compose(middlewares, ctx) { // 接收中间件数组,以保证数组内的函数依次执行  将ctx对象作为参数
    function dispatch(index) { // 利用递归函数将各个中间件串联起来依次调用
      if (index === middlewares.length) return Promise.resolve() // 最后一个next不执行
      let middleware = middlewares[index]
      return Promise.resolve(middleware(ctx, () => dispatch(index + 1))) // 用Promise.resolve包裹中间件
    }
    return dispatch(0)
  }

  createContext (req, res) {
    const ctx = Object.create(this.context) // 让ctx的隐式原型(__proto__)有this.context对象的属性和方法 往ctx上增加属性和方法不会影响this.context对象(深复制)
    const request = ctx.request = Object.create(this.request)
    const response = ctx.response = Object.create(this.response)
    // 交叉赋值
    ctx.req = request.req = response.req = req
    ctx.res = request.res = response.res = res
    request.ctx = response.ctx
    request.response = response
    response.request = request

    return ctx
  }

  handleRequest(req, res) { // 创建一个处理请求的函数
    res.statusCode = 404
    let ctx = this.createContext(req, res) // 创建了ctx
    // this.fn(ctx)
    let fn = this.compose(this.middlewares, ctx)
    fn.then(() => {
      if (typeof ctx.body == 'object') {
        res.setHeader('Content-Type', 'application/json;charset=utf8')
        res.end(JSON.stringify(ctx.body))
      } else if (ctx.body instanceof Stream) {
        ctx.body.pipe(res) // 处理流类型
      } else if (typeof ctx.body === 'string' || Buffer.isBuffer(ctx.body)) { // Buffer字节
        res.setHeader('Content-Type', 'text/html;charset=utf8')
        res.end(ctx.body)
      } else {
        res.end('Not found')
      }
    }).catch(err => {
      this.emit('error', err) // 继承自原生node的event中的emit方法
      res.statusCode = 500
      res.end('server error')
    })
    // res.end(ctx.body)
  }

  listen (...args) {
    let server = http.createServer(this.handleRequest.bind(this))
    server.listen(...args)
  }
}

module.exports = Koa