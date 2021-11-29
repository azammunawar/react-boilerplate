const { merge } = require("webpack-merge");
const common = require("./webpack.common.config");
const path = require("path");

module.exports = merge(common, {
  mode: "production",
  devServer: {
    port: "80",
    host: "0.0.0.0",
    historyApiFallback: true,
    inline: true,
    publicPath: "dist/",
    contentBase: path.join(__dirname, "dist"),
  },
});
