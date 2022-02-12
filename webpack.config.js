const path = require("path");//nodejs里面的基本包，用来处理路径
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

//__dirname表示文件相对于工程的路径
module.exports ={
  devtool: 'eval-source-map', // 帮助在页面上调试代码，在浏览器中以源文件形式调试代码
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  devServer: {
    port: 8000,
    open: true, //自动打开浏览器
    hot: true // 热更新
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isDev ? '"development"' : '"production"'
      }
    }),
    // make sure to include the plugin for the magic
    new VueLoaderPlugin(),
    new HtmlPlugin(),
    new webpack.HotModuleReplacementPlugin(), // 热加载使用插件
    new webpack.NoEmitOnErrorsPlugin() // 不显示不必要的错误信息
  ],
  mode:'none',
  module: {
    rules: [
      {//通过vue-loader来识别以vue结尾的文件,正则表达式中的点需要转义
        test: /\.vue$/, 
        loader: 'vue-loader'
      },
      {//通过vue-loader来识别以vue结尾的文件
       test: /\.css$/, 
       //css的处理方式不同，有嵌入在页面style标签里的，有从外部文件引入的，我们这里用use来声明
       use: [
         'style-loader',//接受潜在页面内部的style标签的文件。
         'css-loader'
       ]
      },
      {
        test: /\.styl$/, 
        use: [
          'style-loader',
          'css-loader',
          'stylus-loader'
        ]
      },
      { 
        test:/\.scss/,
        use:['style-loader','css-loader','sass-loader']
      },
      {//处理图片文件
        test: /\.(gif|jpg|jpeg|png|svg)$/ ,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024, //小图片转成base64
              name: '[name].[ext]'
            }
          }
        ]
      }
    ]
  }
}