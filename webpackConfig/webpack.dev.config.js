const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.config.js/index.js.js");
// const { EnvironmentPlugin } = require("webpack");

module.exports = merge(common, {
  devtool: "eval-source-map",
  mode: "development",
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "../dist"),
    clean: true,
  },
  devServer: {
    port: "8000",
    historyApiFallback: true,
  },
});
