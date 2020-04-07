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

// 测试数据连接
let getArticleData = function () {
  let _sql = `select * from articles;`
  return allServices.query(_sql)
}
let getTopicData = function () {
  let _sql = `select * from topic;`
  return allServices.query(_sql)
}
let getRecommendData = function () {
  let _sql = `select * from recommend;`
  return allServices.query(_sql)
}

// 加载更多
let loadMore = function (size, page) {
  let _sql = `select * from articles limit ${size} offset ${(page - 1) * size};`
  return allServices.query(_sql)
}

// 获取文章详情
let getDetailData = function (id) {
  let _sql = `select * from article_detail where artid=${id};`
  return allServices.query(_sql)
}

module.exports = {
  getArticleData,
  getTopicData,
  getRecommendData,
  loadMore,
  getDetailData
}