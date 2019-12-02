const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
  // console.log(req.url)
  // 图片很多
  if (req.url === '/logo.png') {
    return ''
  }
  fs.createReadStream('./index.html').pipe(res)
}).listen(8888, () => {
  console.log('http://localhost:8888')
})