const fs = require('fs')

fs.readFile('./index.html', (err,data) => {
    // data放到内存里,全部读完才能写入
    fs.writeFile('./index-copy.html', data, (err, res) => {
        if(!err) {
            console.log('writed!')
        }
    })
})

//stream  边读边写入
fs.createReadStream('./music.js').pipe(
    fs.WriteStream('./music-copy.js')
)