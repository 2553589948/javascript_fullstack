const router = require('koa-router')()
const userServies = require('../controllers/mySqlConfig')

router.prefix('/home')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a home response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a home/bar response'
})

router.get('/getHomeData', async (ctx, next) => {
  const page = ctx.query.page
  const size = 3
  await userServies.getArticleData()
  .then(async res => {
    const total = Math.ceil(res.length / 3)
    await userServies.loadMore(size, page)
    .then(async res => {
      const article = res
      await userServies.getTopicData()
      .then(async res => {
        const topic = res
        await userServies.getRecommendData()
        .then(res => {
          const recommend = res
          ctx.body = {
            code: 200,
            data: {
              articleList: article,
              totalPage: total,
              topicList: topic,
              recommendList: recommend
            }
          }
        })
      })
    })
  })
})

router.get('/getWriterList', async (ctx, next) => {
  const page = ctx.query.page
  const size = 5
  await userServies.getAllWriter()
  .then(async res => {
    const total = Math.ceil(res.length / size)
    await userServies.getWriterList(page, size)
    .then(res => {
      if (res.length) {
        ctx.body = {
          code: 200,
          data: {
            writerList: res,
            totalPage: total
          }
        }
      } else {
        ctx.body = {
          code: 404,
          data: '获取失败'
        }
      }
    })
  })
})

module.exports = router
