const path  = require('path');
const HtmlWebpackPlugins = require('html-webpack-plugin');
const { title } = require('process');

module.exports = {
  mode:'development',
  entry:'./src/index.js',
  output:{
    filename:'[name].bundle.js',
    path:path.resolve(__dirname,'dist'),
  },
  module:{
    rules:[
      {
        test:'/\.js$/',
      },
    ],
  },

  plugins:[
    new HtmlWebpackPlugins({
      title:'todo',
      template:'./src/index.html',
    }),
  ],

  devServer:{
    static:'./dist',
  },
  devtool:'inline-source-map',
  optimization:{
    runtimeChunk: 'single',
  },
};