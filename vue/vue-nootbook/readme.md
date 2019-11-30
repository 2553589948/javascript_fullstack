npm i -g koa-generator 脚手架
koa2 noot_book -e --ejs 用脚手架创建一个项目名字为noot_book

npm i koa2-cors mysql pug -S
npm i nodemon -D
后端启动
npm i
npm start
# fe
npm i amfe-flexible axios vant v-quill-editor -S
npm i less less-loader -D

# webpack.base.conf.js
{
  test: /\.less$/,
  loader: 'less-loader!style-loader!css-loader'
}
# defaultConfig.js
const config = {
  database: {
    DATABASE: 'test',
    USERNAME: 'root',
    PASSWORD: 'kyle',
    PORT: '3306',
    HOST: 'localhost'
  }
}
module.exports = config
# mySqlConfig.js
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
  query: function (sql, values) {
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
          }) //query()线程池自带的方法
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
module.exports = {
  getAllusers
}

# mysql
show databases;
create database nodesql;
use nodesql; 
source E:\javascript_fullstack\vue\vue-nootbook\test.sql
set names utf8; // 引入数据库文件只有部分引入