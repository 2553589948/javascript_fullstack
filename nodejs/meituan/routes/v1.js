// 输出一个路由对象
import express from 'express'
import Cities from '../controller/v1/cities'
const router = express.Router()
router.get('/suggestion', Cities.suggestion)

// router.get('/suggestion', async (req, res) => {
//   res.send({
//     status: 0,
//     message: '定位成功'
//   })
// })

export default router