const router = require('koa-router')()
const userServies = require('../controllers/mySqlConfig')

router.prefix('/detail')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a detail response!'
})

// 获取文章详情
router.get('/getDetailData', async (ctx, next) => {
  const id = ctx.query.artid
  await userServies.getDetailData(id)
  .then(res => {
    if (res.length) {
      ctx.body = {
        code: 200,
        data: res[0]
      }
    } else {
      ctx.body = {
        code: 404,
        data: '获取失败'
      }
    }
  })
})

module.exports = router