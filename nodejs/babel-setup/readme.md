npm i @babel/plugin-transform-arrow-functions -D // 转换箭头函数插件

npm i @babel/core @babel/cli -D // 核心库和命令库 使用babel必须的依赖
当命令库没有全局安装时,只在当前文件夹下安装时,可在package.json中配置自定义命令,如
"scripts": {
  "complier": "babel src --out-dir dist" // 使用babel命令库:将src转换为dist
},

npm i @babel/preset-env -D
.browserslistrc 浏览器的配置文件

npm i @babel/plugin-transform-runtime -D // 实时编译,去重,把相同的函数、库、方法提取出来放在公共的地方

对于Set Promise这种es6最新的方法babel貌似处理不了,如何解决？
npm i @babel/polyfill -D // 原生实现,因为浏览器不支持新方法,只好原生实现,是第三方的包,在需要的地方引入,原生实现的方法都放在这个包里,但引入整个包貌似有点不太恰当,更好的解决方式？
在.babelrc中presets中配置,以实现按需引入,想使用什么方法引入什么方法
{
  "useBuiltIns": "usage",
  "corejs": 3
}

# babel的配置文件.babelrc
基本是一个插件对应一个语法