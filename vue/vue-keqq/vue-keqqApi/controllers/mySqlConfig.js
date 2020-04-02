var mysql = require('mysql')
var config = require('./defaultConfig')

// 创建线程池
var pool = mysql.createPool({
  host: config.database.HOST,
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  port: config.database.PORT
})
// 统一连接数据库的方法
let allServices = {
  query: function (sql, values) { //query()线程池自带的方法
    return new Promise((resolve, reject) => {
      pool.getConnection(function (err, connection) {
        if (err) {
          reject(err)
        } else {
          connection.query(sql, values, (err, rows) => {
            if (err) {
              reject(err)
            } else {
              resolve(rows)
            }
            connection.release()
          })
        }
      })
    })
  }
}
// 读取所有users表数据,测试数据连接
let getAllusers = function () {
  let _sql = `select * from users;`
  return allServices.query(_sql)
}

// 用户登录
let userLogin = function (username, userpwd) {
  let _sql = `select * from users where username="${username}" and userpwd="${userpwd}";`
  return allServices.query(_sql)
}

// 查找用户
let findUser = function (username) {
  let _sql = `select * from users where username="${username}";`
  return allServices.query(_sql)
}

// 用户注册
let insertUser = function (value) {
  let _sql = `insert into users set username=?,userpwd=?,nickname=?;`
  return allServices.query(_sql, value)
}

// 根据课程id查找所有comments表数据
let getAllcomments = function (courseId) {
  let _sql = `select * from comments where courseId="${courseId}";`
  return allServices.query(_sql)
}

// 根据课程id查找课程详情
let getCourseInfo = function (courseId) {
  let _sql = `select * from courseinfo where courseId="${courseId}";`
  return allServices.query(_sql)
}

// 根据课程id查找老师信息
let getTeacherInfo = function (courseId) {
  let _sql = `select * from teachers where courseId="${courseId}";`
  return allServices.query(_sql)
}

// 计算相关课程的数量
let getTotal = function (categoryId) {
  let _sql = `select courseId,courseTitle from courseinfo where categoryId="${categoryId}";`
  return allServices.query(_sql)
}

// 换一批
let refreshCourse = function (size, page, categoryId) {
  let _sql = `select courseId,courseTitle,courPrice,coursePic from courseinfo where categoryId="${categoryId}" limit ${size} offset ${(page - 1) * size};`
  return allServices.query(_sql)
}

// 搜索提示
let searchTips = function (keyword) {
  let _sql = `select keyword,courseId from courseinfo where keyword like '%${keyword}%' limit 5;`
  return allServices.query(_sql)
}

// 获取历史记录
let getHistory = function () {
  let _sql = `select * from search_history;`
  return allServices.query(_sql)
}

// 查找历史记录(去重)
let findHistory = function (keyword) {
  let _sql = `select * from search_history where keyword="${keyword}";`
  return allServices.query(_sql)
}

// 添加历史记录
let addHistory = function (keyword) {
  let _sql = `insert into search_history set keyword=?;`
  return allServices.query(_sql, keyword)
}

// 添加历史记录到最前
let addedFirst = function (keyword) {
  let _sql = `update search_history set keyword="${keyword}" where id=1;`
  return allServices.query(_sql, keyword)
}

// 删除单条历史记录
let delHistory = function (keyword) {
  let _sql = `delete from search_history where keyword="${keyword}";`
  return allServices.query(_sql)
}

// 删除全部历史记录
let clearHistory = function () {
  let _sql = `delete from search_history;`
  return allServices.query(_sql)
}

// 查找课程是否被用户已添加
let findCourse = function (courseId, userId) {
  let _sql = `select * from course_table where courseId="${courseId}" and userid="${userId}";`
  return allServices.query(_sql)
}

// 添加课程
let insertCourse = function (options) {
  let _sql = `insert into course_table set userid=?,courseId=?,courseTitle=?;`
  return allServices.query(_sql, options)
}

// 根据userid查找课程表
let getCourseList = function (userid) {
  let _sql = `select * from course_table where userid="${userid}";`
  return allServices.query(_sql)
}

// 删除选中课程
let deleteCourse = function (userid, courseId) {
  let _sql = `delete from course_table where userid="${userid}" and courseId in (${courseId});`
  return allServices.query(_sql)
}

// 根据课程id查找课程目录
let getCourseEntries = function (courseId) {
  let _sql = `select * from entries where courseId="${courseId}";`
  return allServices.query(_sql)
}

// 发表评论
let insertNote = function (options) {
  let _sql = `insert into comments set c_time=?,m_time=?,comment=?,useId=?,nickname=?,courseId=?;`
  return allServices.query(_sql, options)
}

// 获取点赞相关信息
let getSupportInfo = function (useId) {
  let _sql = `select * from support where useId="${useId}";`
  return allServices.query(_sql)
}

// 获取单条评论
let getOneComment = function (cmeid) {
  let _sql = `select * from comments where cmeid="${cmeid}";`
  return allServices.query(_sql)
}

// 此评论是否被该用户点赞过
let findIsSupport = function (useId, cmeid) {
  let _sql = `select * from support where useId="${useId}" and cmeid="${cmeid}";`
  return allServices.query(_sql)
}

// 点赞
let insertSupport = function (options) {
  let _sql = `insert into support set useId=?,cmeid=?,courseId=?;`
  return allServices.query(_sql, options)
}

// 取消点赞
let deleteSupport = function (useId, cmeid) {
  let _sql = `delete from support where useId="${useId}" and cmeid="${cmeid}";`
  return allServices.query(_sql)
}

// 点赞数量
let updateSupportCount = function (supportCount, cmeid) {
  let _sql = `update comments set supportCount=${supportCount} where cmeid="${cmeid}";`
  return allServices.query(_sql)
}

// 评论按热度排
let getByHotComment = function (courseId) {
  let _sql = `select * from comments where courseId="${courseId}" order by supportCount desc;`
  return allServices.query(_sql)
}

module.exports = {
  getAllusers,
  userLogin,
  findUser,
  insertUser,
  insertNote,
  getAllcomments,
  getCourseInfo,
  getTeacherInfo,
  getCourseEntries,
  searchTips,
  getHistory,
  findHistory,
  addHistory,
  addedFirst,
  delHistory,
  clearHistory,
  findCourse,
  insertCourse,
  getCourseList,
  deleteCourse,
  getTotal,
  refreshCourse,
  findIsSupport,
  insertSupport,
  deleteSupport,
  updateSupportCount,
  getSupportInfo,
  getOneComment,
  getByHotComment
}