--restful web
一切皆资源
DOM+CSS+JS
还需要url(Universal Resource Location统一资源定位符)
http://www.baidu.com/shopping/1/good/2

npm init -y   从前端加入后端
scripts 执行一些命令

npm i json-server  npm包
url上将我们的json文件向外暴露
json就是资源  restful是API设计规范
-语义化的url
:1314/posts GET请求 文章列表
:1314/posts/:id  根据id获取文章详情
GET url明文访问
POST 新增数据
PUT 修改数据  覆盖性修改
PATCH 修改数据  部分修改(将指定部分修改)
DELETE 删除数据


-- :8080 live-server web页面
   :1314 启用了后端API
   不同的端口代表了不同的服务
   前后端 全栈

npm init -y
npm i json-server
npm run
npm run dev