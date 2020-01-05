const router = require('koa-router')()
const userServies = require('../controllers/mySqlConfig')
const utils = require('../controllers/utils')
router.prefix('/users')  //路由前缀 / => /users

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

// 定义一个路由
router.get('/all', async function(ctx, next) {
  await userServies.getAllusers().then((res) => {
    // console.log('打印结果:', + JSON.stringify(res))
    ctx.body = res
  })
})

// 注册
router.post('/userRegister', async(ctx, next) => {
  var username = ctx.request.body.username // 取到前端传过来的数据
  var userpwd = ctx.request.body.userpwd
  var nickname = ctx.request.body.nickname
  if (!username || !userpwd || !nickname) {
    ctx.body = {
      code: '80000',
      mess: '账号密码昵称不能为空'
    }
  }
  let user = {
    username: username,
    userpwd: userpwd,
    nickname: nickname
  }

  await userServies.findUser(user.username)
  .then(async (res) => {
    // console.log(res)
    if (res.length) {
      try {
        throw Error('用户名已经存在')
      } catch (error) {
        console.log(error)
      }
      ctx.body = {
        code: '80008',
        data: 'err',
        mess: '用户名已经存在'
      }
    } else {
      await userServies.insertUser([user.username, user.userpwd, user.nickname])
      .then((res) => {
        console.log(res)
        let r = ''
        if (res.affectedRows !== 0) {
          r = 'ok'
          ctx.body = {
            code: '200',
            data: r,
            mess: '注册成功'
          }
        } else {
          r = 'error'
          ctx.body = {
            code: '500',
            data: r,
            mess: '注册失败'
          }
        }
      }).catch((err) => {
        ctx.body = {
          code: '500',
          data: err
        }
      })
    }
  })
})

// 登录
router.post('/userLogin', async(ctx, next) => {
  var _username = ctx.request.body.username // 取到前端传过来的数据
  var _userpwd = ctx.request.body.userpwd

  await userServies.userLogin(_username, _userpwd)
  .then((res) => {
    let r = ''
    console.log(res)
    if (res.length) {
      r = 'ok';
      let result = {
        nickname: res[0].nickname,
        username: res[0].username,
        id: res[0].userid
      }
      ctx.body = {
        code: '200',
        data: result,
        mess: '登录成功'
      }
    } else {
      r = 'error'
      ctx.body = {
        code: '404',
        data: r,
        mess: '账号或密码错误'
      }
    }
  })
  .catch((err) => {
    ctx.body = {
      code: '500',
      data: err
    }
  })
})

// 发表评论
router.post('/insertNote', async(ctx, next) => {
  let c_time = utils.getNowFormatDate()
  let m_time = utils.getNowFormatDate()

  let comment = ctx.request.body.note_content
  let userId = ctx.request.body.useId
  let nickname = ctx.request.body.nickname
  await userServies.insertNote([c_time,m_time,comment,userId,nickname])
  .then(async (res) => {
    console.log(res)
    let r = ''
    if (res.affectedRows !== 0) {
      r = 'ok',
      ctx.body = {
        code: '200',
        data: r,
        mess: '评论成功'
      }
    } else {
      r = 'error',
      ctx.body = {
        code: '404',
        data: r,
        mess: '评论失败'
      }
    } 
  }).catch((err) => {
      ctx.body = {
        code: '500',
        data: err
      }
  })
})

// 获取评论数据
router.post('/findComments', async(ctx, next) => {
  await userServies.getAllcomments().then((res) => {
    ctx.body = res
  }) 
})

module.exports = router
