const HtmlWebpackPlugin = require('html-webpack-plugin')
const ProvidePlugin = require('webpack').ProvidePlugin
const autoprefixer = require('autoprefixer')
const precss = require('precss')
const fs = require('fs')
const path = require('path')

module.exports = {
  entry: fs.readdirSync(__dirname).reduce(function (entries, dir) {
    if (fs.statSync(path.join(__dirname, dir)).isDirectory())
      entries[dir] = path.join(__dirname, dir, 'app.js')
    return entries
  }, {}),

  output: {
    path: __dirname + '/__build__',
    filename: '[name].js',
    publicPath: '/__build__/'
  },

  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel', exclude: /node_modules/},
      {test: /\.css$/, loader: 'style-loader!css-loader!postcss-loader'},
    ]
  },

  resolve: {
    extensions: ['', '.js'],
    alias: {
      'react-rtab': path.join(__dirname, '..', 'src')
    }
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'examples/index.html',
      inject: 'body'
    })
  ],

  postcss: function () {
    return [autoprefixer, precss];
  },

  devServer: {
    contentBase: "./examples"
  },
  devtool: 'inline-source-map'
};
