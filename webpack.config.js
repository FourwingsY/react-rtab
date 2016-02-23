const autoprefixer = require('autoprefixer')
const precss = require('precss')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const fs = require('fs')
const path = require('path')

module.exports = {
  entry: {
    bundle: './examples/index.js'
  },
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
