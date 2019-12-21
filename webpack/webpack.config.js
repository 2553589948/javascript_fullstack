const path = require('path')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'main.[hash].js',
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
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        include: [path.resolve(__dirname, 'src/')], // src下所有图片
        use: ['file-loader', {
          loader: 'image-webpack-loader',
          options: {
            mozjpeg: { progressive: true, quality: 65 },
            optipng: { enabled: false },
            pngquant: { quality: '65-90', speed: 4 },
            gifsicle: { interlaced: false },
            webp: { quality: 75 }
          }
        }]
      }
    ]
  },
  plugins: [
    new miniCssExtractPlugin({
      filename: '[name].[hash].css', // 最终输出的文件名
      chunkFilename: '[id].[hash].css'
    }),
    new OptimizeCssAssetsPlugin({}),
    new UglifyJsPlugin({
      cache: true, // js没有变化就不压缩
      parallel: true, // 是否启用并行压缩
      sourceMap: true
    }),
    new HtmlPlugin({
      title: 'kylestudy', // 生成的文件标题
      filename: 'main.html',
      minify: { // 压缩选项
        collapseWhitespace: true, // 移除空格
        removeComments: true, // 移除注释
        removeAttributeQuotes: true, // 移除双引号
      }
    }),
    new CleanWebpackPlugin() // 打包之前把上一次的打包文件清除
  ]
}