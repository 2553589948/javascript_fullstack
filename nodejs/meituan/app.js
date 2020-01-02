// 模块化 require和module.exports使用的是commonjs模块化机制方案 import是es6模块化方案(node不完全支持)
// const express = require('express')

// node使用es6模块化
import express, { Router } from 'express'
import router from './routes/index.js'
const app = express()
// app.listen(config.port)
app.listen(3000)
router(app)
module.exports = app