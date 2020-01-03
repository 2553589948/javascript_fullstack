# webpack 1.0

# webpack 2.0
拆分文件体积
配置很多

# 另一个打包工具rollup:(tree-shaking)各种工具类库,比如vue的打包

# webpack 3.0

与之同期的打包工具parcel:(0配置)

# webpack 4.0:(0配置)
国内打包工具(fis百度的产品)

# tree-shaking
剔除无用代码
生效条件：1. 导入导出必须使用es module(import export),小心一些第三方模块导出可能用的是commonJS规范

# webpack mode
development
production
webpack根据以上的两个模式,内置了一些默认的配置

production：自动开启tree-shaking功能

mode 的指定
"scripts": {
  "dev": "webpack --mode production"
}

# es module & commonJS
es6 module化方案:在js编译的时候,就知道引入了哪些模块(tree-shaking生效的关键),不能够出现在任何逻辑判断里面(静态引入)
注：es6以后版本支持动态引入import()
commonJS:只有在js执行的时候才知道引入了哪些模块(动态引入)能出现在任何逻辑判断里面
