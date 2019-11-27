const Koa = require('koa')
const KoaRouter = require('koa-router')
const KoaStatic = require('koa-static')
const KoaCors = require('koa-cors')
const KoaBody = require('koa-body')
const path = require('path')

const app = new Koa() // 生成一个koa服务
const router = new KoaRouter() // 生成一个路由

// 单个路由的中间件 koa-body(基于formidable封装的)解析前端传过来的文件
router.post('/upload', KoaBody({
  multipart: true,
  formidable: {
    uploadDir: path.join(__dirname, '/static/'),
    keepExtensions: true, // 图片后缀
    hash: true // 保证文件的唯一性(MD5, sha256)
  }
}), async (ctx) => {
  /* ctx = {request, response}  .files是koa-body加上去的*/
  const diskPath = ctx.request.files.avatar.path
  let fileName = path.basename(diskPath) // 取图片名字
  ctx.body = {
    code: 200,
    url: `http://localhost:3000/${fileName}`
  }
})

app.use(KoaCors()) // 先解决跨域问题
// 引入外部中间件全局中间件
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
  // console.log('server is rinning')
})