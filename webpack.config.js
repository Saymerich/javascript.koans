var path = require('path');

module.exports = {
  entry: {
    '00_about_asserts': './test/00_about_asserts.spec.js'
  },
  output: {
    filename: '[name].spec.js',
    path: path.join(__dirname, 'test/dist')
  },
  module: {
    loaders: [{
      test: /\.js$/, loader: 'babel-loader',  exclude: /node_module/
    }]
  }
};
