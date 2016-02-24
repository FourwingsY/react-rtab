const autoprefixer = require('autoprefixer')
const precss = require('precss')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const fs = require('fs')

var entries = {'react-rtab': './src/index.js'}
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
    filename: 'react-rtab.js',
    path: './dist',
    library: true,
    libraryTarget: 'commonjs2'
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel-loader'},
      {test: /\.pcss$/, loader: ExtractTextPlugin.extract('style-loader','css-loader!postcss-loader')},
    ]
  },
  resolve: {
    extensions: ['', '.js', '.pcss']
  },
  plugins: [
    new ExtractTextPlugin("[name].css")
  ],
  externals: {
    react: "React",
    classnames: "classnames"
  },
  postcss: function () {
    return [autoprefixer, precss];
  }
};
