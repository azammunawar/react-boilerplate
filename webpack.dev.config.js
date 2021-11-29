const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.config");
const { EnvironmentPlugin } = require("webpack");

module.exports = merge(common, {
  devtool: "eval-source-map",
  mode: "development",
  devServer: {
    port: "8000",
    historyApiFallback: true,
  },
});
