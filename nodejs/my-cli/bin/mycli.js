#!/usr/bin/env node
// shebang 以#!开头,后面接 用于启动该文件的一个环境(如node py Go)
const commander = require('commander')

commander.version('1.0.0')
.usage('<command> [项目名称]')
.command('init', 'init project') // 创建子命令
.command('hello', 'hello')
.parse(process.argv) // 获取进程参数