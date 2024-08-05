const path  = require('path');
const HtmlWebpackPlugins = require('html-webpack-plugin');

module.exports = {
  mode:'development',
  entry:'./src/index.js',
  output:{
    filename:'[name].bundle.js',
    path:path.resolve(__dirname,'dist'),
    clean:true,
  },
  module:{
    rules:[
      {
        test:/\.js$/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test:/\.(svg|jpg|png)$/i,
        type: 'asset/resource',
      },
      {
        test:/\.css$/i,
        use:['style-loader','css-loader'],
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