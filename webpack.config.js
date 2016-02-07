const autoprefixer = require('autoprefixer')
const precss = require('precss')

module.exports = {
  entry: './src/Rtab.js',
  output: {
    filename: './dist/react-rtab.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel', exclude: /node_modules/, include: /src/},
      {test: /\.css$/, loader: 'style-loader!css-loader!postcss-loader'},
    ]
  },
  resolve: {
    extensions: ['', '.js']
  },
  postcss: function () {
    return [autoprefixer, precss];
  }
};
