const { merge } = require('webpack-merge');
const common = require('./webpack.common.config.js');
const path = require('path');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist'),
    clean: true,
    publicPath: './',
  },
  devServer: {
    port: '8000',
    // host: "0.0.0.0",
    historyApiFallback: true,
    inline: true,
    publicPath: '../dist/',
    contentBase: path.join(__dirname, '../dist'),
  },
});
