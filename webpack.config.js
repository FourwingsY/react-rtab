const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'app.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel', exclude: /node_modules/, include: /app/}
    ]
  },
  resolve: {
    extensions: ['', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html',
      inject: 'body'
    })
  ]
};
