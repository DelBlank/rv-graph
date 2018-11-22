const path = require('path')
const root = __dirname
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: ['webpack-dev-server/client', path.resolve(root, 'demo/app.js')],
  output: {
    path: path.resolve(root, 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['babel-loader']
      },
      {
        test: /\.(less|css)$/,
        loaders: ['style-loader', 'css-loader', 'less-loader', 'postcss-loader']
      },
      {
        test: /\.thml?$/,
        loaders: 'html-loader'
      },
      {
        test: /\.(png|jpg|svg|woff|eot|ttf)$/,
        loaders: 'url-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.css']
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'build/'),
    compress: true,
    port: 8000,
    host: 'localhost',
    publicPath: '/'
  },
  watch: true,
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(root, 'demo/index.html')
    })
  ]
}
