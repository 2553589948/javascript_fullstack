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

// 获取推荐课程
router.post('/getAboutCourse', async(ctx, next) => {
  let courseId = ctx.request.body.id
  let page = ctx.request.body.page
  let size = 2
  await userServies.getCourseInfo(courseId)
  .then(async (res) => {
    console.log(res[0].categoryId)
    if (res.length != 0) {
      let categoryId = res[0].categoryId
      await userServies.getTotal(categoryId)
      .then(async (res) => {
        const total = Math.ceil(res.length / 2)
        await userServies.refreshCourse(size, page, categoryId)
        .then(res => {
          console.log(res)
          if (res.length) {
            ctx.body = {
              data: res,
              total: total,
              code: 200
            }
          } else {
            ctx.body = {
              data: false,
              code: 404
            }
          }
        })
      })
    } else {
      ctx.body = {
        data: '查询失败',
        code: 404
      }
    }
  }).catch((error) => {
    ctx.body = {
      code: '80008',
      data: 'Not Found 404'
    }
  })
})

// 获取点赞相关信息
router.post('/getSupportInfo', async (ctx, next) => {
  let useId = ctx.request.body.useId
  let courseId = ctx.request.body.courseId
  let supportComments = []
  await userServies.getSupportInfo(useId)
  .then(async (res) => {
    console.log(res)
    if (res.length > 0) {
      for (let i = 0; i < res.length; i++) {
        let cmeid = res[i].cmeid
        await userServies.getOneComment(cmeid)
        .then(res => {
          if (res.length > 0) {
            let addComments = Object.assign(res[0], {isSupport: true})
            supportComments.push(addComments)
          }
        })
      }
      // console.log(res)
      // [
      //   RowDataPacket { id: 3, useId: 1, cmeid: 15, courseId: '1001-1001' },
      //   RowDataPacket { id: 4, useId: 1, cmeid: 14, courseId: '1001-1001' }
      // ]
    }
  })
  await userServies.getAllcomments(courseId)
  .then(res => {
    if (res.length > 0) {
      let newComments = res.concat(supportComments)
      ctx.body = {
        data: newComments
      }
    }  
  })
})

// 点赞
router.post('/supportAction', async (ctx, next) => {
  const {courseId, useId, cmeid, supportCount} = ctx.request.body
  console.log(useId, cmeid, supportCount, courseId)
  await userServies.findIsSupport(useId, cmeid)
  .then(async (res) => {
    if (res.length == 0) {
      await userServies.insertSupport([useId, cmeid, courseId])
      .then(res => {
        if (res.affectedRows !== 0) {
          ctx.body = {
            code: 200,
            data: 'supported'
          }
        } else {
          ctx.body = {
            code: 404,
            data: 'unsupport'
          }
        }
      }).catch((err) => {
          ctx.body = {
            code: 500,
            data: err
          }
      })
      // 点赞数量+1
      await userServies.updateSupportCount(supportCount, cmeid)
      .then(res => {
        console.log(res)
      })
    } else {
      await userServies.deleteSupport(useId, cmeid)
      .then(res => {
        if (res.affectedRows > 0) {
          ctx.body = {
            data: 'cancel support'
          }
        }
      })
      // 点赞数量-1
      await userServies.updateSupportCount(supportCount, cmeid)
      .then(res => {
        console.log(res)
      })
    }
  })
})

// 评论按热度排
router.post('/getByHotComment', async (ctx, next) => {
  let courseId = ctx.request.body.courseId
  await userServies.getByHotComment(courseId)
  .then(res => {
    if (res.length) {
      ctx.body = {
        code: 200,
        data: res
      }
    } else {
      ctx.body = {
        code: 404,
        data: '未找到'
      }
    }
  })
})

// 搜索
router.post('/search', async(ctx, next) => {
  let keyword = ctx.request.body.keyword
  console.log(keyword)
  await userServies.searchTips(keyword)
  .then(res => {
    console.log(res)
    let r = ''
    if (res.length) {
      r = 'ok',
      ctx.body = {
        code: 200,
        keywords: res,
        mess: '查找成功'
      }
    } else {
      r = 'error'
      ctx.body = {
        code: '404',
        // data: r,
        mess: '查找失败'
      }
    }
  }).catch((error) => {
    ctx.body = {
      code: '80008',
      data: error
    }
  })
})

// 获取历史记录
router.post('/gethistory', async(ctx, next) => {
  await userServies.getHistory()
  .then(res => {
    // console.log(res)
    ctx.body = {
      historyData: res
    }
  })
})

// 添加历史记录
router.post('/addhistory', async(ctx, next) => {
  let keyword = ctx.request.body.keyword
  await userServies.findHistory(keyword)
  .then(async(res) => {
    console.log(res)
    if (res.length == 0) {
      await userServies.addHistory(keyword)
      .then(res => {
        if (res) {
          ctx.body = {
            data: 'success'
          }
        } else {
          ctx.body = {
            data: 'fail'
          }
        }
      })
    } else {
      // await userServies.addedFirst(keyword)
      // .then(res => {
      //   console.log(res)
      //   if (res) {
      //     ctx.body = {
      //       data: '已经有记录了'
      //     }
      //   } else {
      //     ctx.body = {
      //       data: 'fail'
      //     }
      //   }
      // })
      ctx.body = {
        data: '已经有记录了'
      }
    }
  })
})

// 删除单条历史记录
router.post('/delhistory', async(ctx, next) => {
  let keyword = ctx.request.body.keyword
  await userServies.delHistory(keyword)
  .then(res => {
    console.log(res)
    if (res) {
      ctx.body = {
        'data': '删除成功'
      }
    } else {
      ctx.body = {
        'data': null
      }
    }
  })
})

// 删除全部历史记录
router.post('/clearhistory', async(ctx, next) => {
  await userServies.clearHistory()
  .then(res => {
    console.log(res)
    if (res) {
      ctx.body = {
        'data': '删除成功'
      }
    } else {
      ctx.body = {
        'data': null
      }
    }
  })
})

// 添加到课程表
router.post('/addCourse', async(ctx, next) => {
  let courseId = ctx.request.body.courseId
  let userId = ctx.request.body.useId
  let courseTitle = ctx.request.body.courseTitle
  await userServies.findCourse(courseId, userId)
  .then(async (res) => {
    console.log(res)
    if (res.length == 0) {
      await userServies.insertCourse([userId, courseId, courseTitle])
      .then(res => {
        if (res) {
          ctx.body = {
            code: 200,
            data: 'success'
          }
        } else {
          ctx.body = {
            code: 404,
            data: 'fail'
          }
        }
      })
    } else {
      ctx.body = {
        code: 80088,
        data: '已经添加了'
      }
    }
  })
  
})

// 获取课程表
router.post('/getCourseList', async(ctx, next) => {
  let userid = ctx.request.body.useId
  await userServies.getCourseList(userid)
  .then(res => {
    console.log(res)
    ctx.body = {
      listData: res
    }
  })
})

// 删除选中课程
router.post('/delCourse', async(ctx, next) => {
  let userid = ctx.request.body.useId
  let courseId = ctx.request.body.courseId
  // console.log(courseId)
  await userServies.deleteCourse(userid, courseId)
  .then(res => {
    console.log(res)
    if (res.affectedRows > 0) {
      ctx.body = {
        data: '删除成功'
      }
    } else {
      ctx.body = {
        data: '删除失败'
      }
    }
  })
})

// 发表评论
router.post('/insertNote', async(ctx, next) => {
  let c_time = utils.getNowFormatDate()
  let m_time = utils.getNowFormatDate()

  let courseId = ctx.request.body.courseId
  let comment = ctx.request.body.note_content
  let userId = ctx.request.body.useId
  let nickname = ctx.request.body.nickname
  await userServies.insertNote([c_time,m_time,comment,userId,nickname,courseId])
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
  let courseId = ctx.request.body.id
  await userServies.getAllcomments(courseId)
  .then((res) => {
    ctx.body = res
  }) 
})

// 获取课程详情
router.post('/findCourseInfo', async(ctx, next) => {
  let courseId = ctx.request.body.id
  await userServies.getCourseInfo(courseId)
  .then(async (res) => {
    let r = ''
    if (res.length) {
      r = 'ok',
      ctx.body = {
        code: '200',
        data: res[0],
        mess: '查找成功'
      }
    } else {
      r = 'error'
      ctx.body = {
        code: '404',
        // data: r,
        mess: '查询失败'
      }
    }
  }).catch((error) => {
    ctx.body = {
      code: '80008',
      data: error
    }
  })
})

// 获取老师信息
router.post('/findTeacherInfo', async(ctx, next) => {
  let courseId = ctx.request.body.id
  await userServies.getTeacherInfo(courseId)
  .then(async (res) => {
    let r = ''
    if (res.length) {
      r = 'ok',
      ctx.body = {
        code: '200',
        data: res,
        mess: '查找成功'
      }
    } else {
      r = 'error'
      ctx.body = {
        code: '404',
        // data: r,
        mess: '查询失败'
      }
    }
  }).catch((error) => {
    ctx.body = {
      code: '80008',
      data: error
    }
  })
})

// 获取课程目录
router.post('/findCourseEntries', async(ctx, next) => {
  let courseId = ctx.request.body.id
  await userServies.getCourseEntries(courseId)
  .then(async (res) => {
    let r = ''
    if (res.length) {
      r = 'ok',
      ctx.body = {
        code: '200',
        data: res,
        mess: '查找成功'
      }
    } else {
      r = 'error'
      ctx.body = {
        code: '404',
        // data: r,
        mess: '查询失败'
      }
    }
  }).catch((error) => {
    ctx.body = {
      code: '80008',
      data: error
    }
  })
})

module.exports = router
