npm i @babel/cli @babel/core @babel/preset-env @babel/plugin-syntax-dynamic-import @babel/register @babel/runtime
npm i @babel/plugin-transform-runtime
# node做后端开发
如何让es6模块来到node开发中
index.js(@babel/register) + app.js(模块化)

# 分层(分模块化)
router对象 -> controller(参数校验、计算等处理)
/controller目录
  /v1/cities.js


运行
npm run dev