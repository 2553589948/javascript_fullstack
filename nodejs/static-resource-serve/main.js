const fs = require('fs')
const http = require('http')
const path = require('path')

http.createServer((req, res) => {
  const filePath = path.join(__dirname, req.url)
  console.log(filePath)
  fs.stat(filePath, (err, stats) => { //stat()获取文件的信息(比如属性大小)
    console.log(stats)
    if(err) {
      res.statusCode = 404
      res.end(`${filePath}: 404`)
      return
    }
    if(stats.isFile()) { //如果是文件夹
      res.statusCode = 200
      fs.createReadStream(filePath).pipe(res)
    } else if(stats.isDirectory()) { //如果是文件夹
      fs.readdir(filePath, (err, files) => {
        let filesLink = files.map(file => {
          return `<a href="${req.url === '/' ? '' : req.url + '/'}${file}">${file}</a><br/>`
        }).join('')
        res.end(filesLink)
        // res.end(files.join('|'))
      })
    }
  })
}).listen(9999, () => {
  console.log('http://localhost:9999')
})