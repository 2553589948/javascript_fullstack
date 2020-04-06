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
  await userServies.getArticleData()
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
            topicList: topic,
            recommendList: recommend
          }
        }
      })
    })
  })
})

module.exports = router
