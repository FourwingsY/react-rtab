const ProvidePlugin = require('webpack').ProvidePlugin
const autoprefixer = require('autoprefixer')
const precss = require('precss')
const fs = require('fs')
const path = require('path')

module.exports = {
  entry: "./examples",

  output: {
    filename: './bundle.js'
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
      'react-rtab': path.join(__dirname, 'src')
    }
  },
  postcss: function () {
    return [autoprefixer, precss];
  },
  devtool: 'inline-source-map'
};
