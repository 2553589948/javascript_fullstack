const router = require('koa-router')()
const userServies= require('../controllers/mySqlConfig')
router.prefix('/users')  //路由前缀 / => /users

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

// 定义一个路由
router.get('/all', async function(ctx, next) {
  await  userServies.getAllusers().then((res) => {
    console.log('打印结果:', + JSON.stringify(res))
    ctx.body = res
  })
})

module.exports = router
