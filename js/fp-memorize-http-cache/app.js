var Koa = require('koa');
var Router = require('koa-router');
const koaStatic = require('koa-static')
 
var app = new Koa();
var router = new Router();

// app.use(koaStatic(__dirname)) // 把磁盘上的文件路径映射为网络url app1.js ->映射为 localhost:9990/app1.js
 
router.get('/', (ctx, next) => {
  // ctx.router available
  ctx.body = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
    </head>
    <body>
      <div id="app"></div>
      <script src="/app1.js"></script>
    </body>
    </html>  
  `
});

router.get('/app1.js', async (ctx) => {
  console.log('app1.js请求')
  const fs = require('fs')
  const content = fs.readFileSync('./app1.js', 'utf8')
  const time = Date.now() + 1000 * 30
  ctx.set('cache-control', 'public,max-age=30') // 30s
  ctx.body = content
})
 
app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(9990, () => {
  console.log(9990)
})