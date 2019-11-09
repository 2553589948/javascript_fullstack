const http = require('http')

http.createServer((req, res) => {
  console.log(req.url, req.method)
  res.writeHead(200, {  //响应头
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',  //解决跨域问题(跨域资源共享))
    'Access-Control-Allow-Headers': 'x-auth, content-type',
    'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',//请求方式
    'Access-Control-Allow-Credentials': true //允许cookie传输的
  })
  // res.end(JSON.stringify({
  //   bookName: 'php'
  // }))

  res.end(`
  getBook(${JSON.stringify({bookName: 'php'})})
  `)
})
.listen(3000, () => {
  console.log('server is running')
})