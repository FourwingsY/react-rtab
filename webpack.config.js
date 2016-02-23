const autoprefixer = require('autoprefixer')
const precss = require('precss')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const fs = require('fs')
const path = require('path')

var entries = {'bundle': './examples/index.js'}
fs.readdirSync("themes").forEach((fileName) => {
  var regex = /(.+)\.pcss$/
  if (regex.test(fileName)) {
    var name = regex.exec(fileName)[1]
    entries[name] = './themes/' + fileName
  }
})

module.exports = {
  entry: entries,
  output: {
    filename: '[name].js',
    path: './dist'
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
      {test: /\.p?css$/, loader: ExtractTextPlugin.extract('style-loader','css-loader!postcss-loader')},
    ]
  },
  resolve: {
    extensions: ['', '.js', '.css', '.pcss'],
    alias: {
      'react-rtab': path.join(__dirname, 'src')
    }
  },
  plugins: [
    new ExtractTextPlugin("[name].css")
  ],
  postcss: function () {
    return [autoprefixer, precss];
  }
};
