const path = require('path')
const miniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      // {
      //   test: /\.css$/, //匹配文件
      //   use: ['style-loader', 'css-loader'] //指明使用什么加载器
      // },
      // {
      //   test: /\.scss$/, //匹配文件
      //   use: ['style-loader', 'css-loader', 'sass-loader'] //指明使用什么加载器
      // },
      {
        test: /\.(sc|c|sa|le)ss$/,
        use: [
          // 'style-loader',
          miniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {sourceMap: true} // 在浏览器中能看到css样式来自哪个文件,方便调试
          },
          {
            loader: 'sass-loader',
            options: {sourceMap: true}
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss', // 一种加css前缀的库
              sourceMap: true,
              plugins: loader => [
                require('autoprefixer')(),
                // 这里还能引入更多别的插件
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new miniCssExtractPlugin({
      filename: '[name].css', // 最终输出的文件名
      chunkFilename: '[id].css'
    })
  ]
}