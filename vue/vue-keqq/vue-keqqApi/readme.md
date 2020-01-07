npm i -g koa-generator 脚手架
koa2 noot_book -e --ejs 用脚手架创建一个项目名字为noot_book

npm i koa2-cors mysql pug -S
npm i nodemon -D
后端启动
npm i
npm start

# mysql
mysql -u root -p // 进行数据库登录
show databases;
create database nodesql; // 创建数据库,名为nodesql
use nodesql;
show tables;
// 创建表 
CREATE TABLE Users
(
userid INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
username varchar(255) NOT NULL UNIQUE,
userpwd varchar(32) NOT NULL default 'visitor',
nickname varchar(255) NOT NULL default '123456'
);
CREATE TABLE Comments
(
cmeid INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
c_time varchar(255) NOT NULL,
m_time varchar(255) NOT NULL,
comment varchar(255) NOT NULL,
nickname varchar(255) NOT NULL,
useId INT UNSIGNED NOT NULL
);
alter table Comments add foreign key(useId) references Users(userid); //链接2表
alter table comments add column courseId varchar(255) NOT NULL; // 往表中添加一列
desc users; // 查看表结构
CREATE TABLE Courseinfo
(
courseId varchar(255) NOT NULL PRIMARY KEY,
courseTitle varchar(255),
followCount int(12),
price int(12),

);

source E:\javascript_fullstack\vue\vue-nootbook\test.sql // 外部引入数据库
set names utf8; // 引入数据库文件只有部分引入