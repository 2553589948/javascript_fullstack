#!/usr/bin/env node
const commander = require('commander')
const path = require('path')
const fs = require('fs')
const ora = require('ora') // 加载图标的库
const glob = require('glob')
const downloadRepo = require('download-git-repo') // 下载工具
const inquirer = require('inquirer')
const metalSmith = require('metalsmith') // 静态站点生成(比如readme.md -> html,css,js) 还可以拷贝文件
const handlebars = require('handlebars')

const args = commander.parse(process.argv).args // 把取到的参数放入args
let projectName = args[0]
let list = glob.sync('*')
if (list.length) {
  if (list.filter(fileName => {
    console.log(fileName)
    return fileName === projectName
  }).length !== 0) {
    console.log(`项目已经存在${projectName}`)
    return
  }
}

go()
function go() {
  const loading = ora('正在下载项目').start()
  download()
  .then(() => {
    loading.succeed()
    return inquirer.prompt([ //一问一答  type默认输入框
      {
        name: 'projectName',
        message: '项目名称',
        default: projectName
      },
      {
        name: 'css',
        message: '使用css预处理器',
        choices: ['less', 'stylus'],
        default: 'less',
        type: 'list'
      },
      {
        name: 'router',
        message: '使用router',
        type: 'confirm'
      }
    ])
  })
  .then(meta => {
    console.log(meta) // 生成的配置信息
    return new Promise((resolve, reject) => {
      // cwd: current work dir
      metalSmith(process.cwd())
      .metadata(meta)
      .clean(false)
      .source(`${projectName}/.temp`)
      .destination(`${projectName}`)
      .use((file, metals, done) => { // 使用中间件
        console.log(file) // 读取编译前的文件内容
        const fileNames = Object.keys(file)
        fileNames.forEach(fname => {
          const content = file[fname].contents.toString()
          const compiledContent = handlebars.compile(content)(meta) // 进行编译
          file[fname].contents = Buffer.from(compiledContent) // 把原有内容替换掉
        })
        done()
      })
      .build((err) => {
        if (!err) {
          resolve()
        } else {
          reject()
        }
      })
    })
  })
  .catch(() => {
    loading.fail()
  })
}

function download() {
  return new Promise((resolve, reject) => {
    downloadRepo('direct:https://github.com/MengZhaoFly/my-cli-test.git',
    `${projectName}/.temp`, { clone: true }, (err) => {
      if (err) {
        console.log(err)
        reject(err)
      } else {
        resolve(`${projectName}/.temp`);
      }
    }
    )
  })
}
