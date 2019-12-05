const router = require('koa-router')()
const userServies = require('../controllers/mySqlConfig')
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
    console.log('打印结果:', + JSON.stringify(res))
    ctx.body = res
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
        id: res[0].id,
        nickname: res[0].nickname,
        username: res[0].username
      }
      ctx.body = {
        code: '200',
        data: result,
        mess: '登录成功'
      }
    } else {
      r = 'error';
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
        code: '80003',
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

//根据分类名称查找对应的笔记列表
router.post('/findNoteListBytype', async(ctx, next) => {
  let note_type = ctx.request.body.note_type
  await userServies.findNoteListByType(note_type)
  .then(async (res) => {
    let r = ''
    if (res.length) {
      r = 'ok'
      ctx.body = {
        code: '200',
        data: res,
        mess: '查到成功'
      }
    } else {
      r = 'error'
      ctx.body = {
        code: '404',
        data: r,
        mess: '查到失败'
      }
    }
  }).catch((err) => {
    ctx.body = {
      code: '500',
      data: err
    }
  })
})

module.exports = router
