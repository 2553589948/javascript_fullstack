# BFF
Backend For Frontend
fe: api ->> Rd 前端向后端发请求
1. api -> userCenter
2. api -> orderCenter
为了解决请求不同的api带来的麻烦,用node整合一下不同的api
api ->> node ->> Rd

koa-cors解决跨域