const Koa = require('koa')
const KoaRouter = require('koa-router')
const fs = require('fs')

const app = new Koa() // 生成一个koa的服务
const router = new KoaRouter({prefix: '/api'}) // prefix自定义一个路由的前缀

// app.use加载一个中间件,请求(request)与响应(response)之间要经过中间件(middleWare一个或多个)  ctx: {requset, response}对象
// app.use(async (ctx) => { // 自定义中间件
//   ctx.body = {
//     code: 200,
//     msg: 'ok'
//   }
// })

// router.get('/user', async (ctx) => { // 自定义路由
//   let userInfo = fs.readFileSync('./api/user.json')
//   .toString()
//   ctx.body = {
//     data: JSON.parse(userInfo),
//     code: 200
//   }
// })

app.use(router.routes()).use(router.allowedMethods()) // 引入外部中间件

const glob = require('glob') // 读取一个文件自动生成路由
const path = require('path') // path.resolve拼接路径解析路径
glob.sync(path.resolve('./api', '*.json')).forEach((item, i) => {
  console.log('item', item)
  let apiJsonPath = item && item.split('/api')[1]
  let apiPath = apiJsonPath.replace('.json', '')
  router.get(apiPath, async (ctx) => {
    let fileData = fs.readFileSync(item).toString()
    ctx.body = {
      data: JSON.parse(fileData),
      code: 200
    }
  })
})

app.listen(3000, () => {
  console.log('server is rinning http://localhost:3000')
})