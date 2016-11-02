var path = require('path');

module.exports = {
  entry: {
    '00_about_asserts': './test/00_about_asserts.spec.js',
    '01_about_operators.spec.js': './test/01_about_operators.spec.js',
    '02_about_equality': './test/02_about_equality.spec.js',
    '04_about_assignment': './test/04_about_assignment.spec.js',
    '06_about_strings': './test/06_about_strings.spec.js',
    '08_about_objects': './test/08_about_objects.spec.js',
    '10_about_reflection': './test/10_about_reflection.spec.js',
    '12_about_prototypal_inheritance': './test/12_about_prototypal_inheritance.spec.js',
    '14_about_this': './test/14_about_this.spec.js',
    '16_about_regular_expressions': './test/16_about_regular_expressions.spec.js',
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
