//node music.js 要搜索的内容
// console.log(process.argv)
const request = require('request')
const Event = require('events')
const inquirer = require('inquirer')  //列表选择工具
const fs = require('fs')
const ev = new Event()

function main(argv) {
    if(argv.length) {
        let search = argv[0]
        console.log(search)
        // 模块解耦
        ev.emit('search', search)
    }
}

ev.on('download', (id) => {
    request({
        url: `http://neteasecloudmusicapi.zhaoboy.com/song/url?id=${id[0]}`,
        method: 'GET',
        json: true
    }, (err, res) => {
        const body = res.body
        console.log('地址', body.data[0].url)
        if(body.data && body.data[0] && body.data[0].url) {
            //下载  pipe()管子是Nodejs里内置的方法,stream(流)里的方法
            request(body.data[0].url).pipe(
                fs.createWriteStream(`./${id[1]}.mp3`)
            )
        } else {
            console.log('没有找到这首歌,请重选')
        }
    })
})

//select
ev.on('select', (songLists) => {
    // expand下有checkBox,input   prompt上下选择回车确认
    inquirer.prompt([
        {
            type: 'list',
            name: 'songInfo',
            message: `共有${songLists.result.songCount}首歌,回车下载`,
            choices: songLists.result.songs.map(song => {
                return {
                    value: [song.id, song.name],
                    name: song.name + (
                        song.artists[0] ? song.artists[0].name : '')
                }
            })
        }
    ])
    .then( res => {
        console.log('选择了', res)  //res返回值是自己设置的value值
        const id = res.songInfo
        ev.emit('download', id)
    })
})

//搜索模块
ev.on('search', (search) => {
    search = encodeURIComponent(search)
    request({
        method: 'GET',
        json: true,
        url: `http://neteasecloudmusicapi.zhaoboy.com/search?keywords=${search}`
    }, (err, body) => {
        if(err) {
            console.log('搜索出错', err)
        } else {
            // console.log(body.body)
            ev.emit('select', body.body)
        }
    })
})

main(process.argv.slice(2))