npm i webpack webpack-cli --save-dev
npm i lodash --save-dev
npm install style-loader css-loader --save-dev
npm i sass-loader node-sass --save-dev
npm i postcss-loader autoprefixer --save-dev  <!-- postcss-loader给兼容性不好的css样式加前缀  autoprefixer进行浏览器的部分兼容补全-->

"browsersList": [ 
    "> 1%", //全球至少1%的人在用
    "last 2 version", //兼容以前的两个版本
    "not ie <= 8"
  ]

# 抽取样式将css单独打包
npm i mini-css-extract-plugin --save-dev

# 压缩打包
- 压缩css(optimize-css-assets-webpack-plugin)
- 压缩js(uglifyjs-webpack-plugin)

# 为css js文件添加hash值,防止缓存

# html打包
- html-webpack-plugin

# 清理目录
- clean-webpack-plugin

# webpack处理图片和优化
- file-loader 图片让webpack承认
- cnpm i image-webpack-loader 优化图片体积大小

# 运行
npx webpack

- 'style-loader' 打包以后让css文件能在html中生效
- 'css-loader' 打包以后让css文件能在js中引入

# dist 存放打包之后的文件

# src 存放入口文件

# webpack.config.js  //webpack的配置文件

# webpack中的(module)用来决定如何处理项目中的不同类型模块
# webpack模块支持语法
  es6 import语句
  Commonjs require() 语句
  AMD define 和 require()语句
  css/sass/less文件中的@import语句
  样式(url(...)) 或者html文件(<img src="...">)中的图片链接