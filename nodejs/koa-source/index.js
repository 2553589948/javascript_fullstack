// 原生node
// let http = require('http')

// let server = http.createServer((req, res) => {
//   res.end('hello world')
// })

// server.listen(3001, () => {
//   console.log('server is running...')
// })

// koa  (node的框架之一)
// const Koa = require('koa')
// const app = new Koa()

// app.use((ctx, next) => {
//   ctx.body = 'hello world!'
// })

// app.listen(3001, () => {
//   console.log('server is running...')
// })

let myKoa = require('./application')
let app = new myKoa()
app.use((ctx, next) => {
  // console.log(ctx.req.url)
  // console.log(ctx.request.req.url)
  // console.log(ctx.response.req.url)
  // console.log(ctx.request.url)
  // console.log(ctx.response.url)
  // console.log(ctx.url)
  // console.log(ctx.path)
  ctx.body = {
    name: 'kyle',
    sex: 'boy'
  }
  console.log(ctx.body)
  next()
})

app.use((ctx, next) => {
  console.log(1)
  next()
  console.log(2)
})

app.use((ctx, next) => {
  console.log(3)
  ctx.body = 'hello koa!'
  next()
  console.log(4)
})


app.listen(3001)