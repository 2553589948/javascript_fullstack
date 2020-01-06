const Koa = require('koa')
const KoaStatic = require('koa-static') // 映射静态资源
var Router = require('koa-router')

var router = new Router()

const app = new Koa()

app.use(KoaStatic(__dirname + '/static'))

let sessionTable = []
router.get('/login', (ctx, next) => {
  // 后端通过Set-Cookie设置响应头
  // 验证通过 存住用户的登录状态 session(后端的)
  sessionTable = [{
    sessionId: 0001,
    uid: 001,
    islogin: true
  }]
  ctx.cookies.set('sessionId', 0001, {
    maxAge: 1000 * 60
  })
  ctx.body = {
    code: 0
  }
})

router.get('/islogin', async (ctx, next) => {
  // 通过cookie核对是否登录 同源的话cookie会自动附加到请求头里面
  const sid = ctx.cookies.get('sessionId')
  const session = sessionTable.find(s => s.sessionId == sid)
  if (session) {
    const uid = session.uid
    ctx.body = {
      code: 200,
      uid
    }
  } else {
    ctx.body = {
      code: 1,
      msg: '未登录'
    }
  }
})
 
app
  .use(router.routes())
  .use(router.allowedMethods())


app.listen(8000, () => {
  console.log('server is running at port 8000...')
})