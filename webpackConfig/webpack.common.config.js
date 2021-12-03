const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const LoadablePlugin = require("@loadable/webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: path.join(__dirname,  "../src/index.tsx"),
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
    alias: {
      routes: path.resolve(__dirname, "../src/routes"),
      pages: path.resolve(__dirname, "../src/pages"),
      store: path.resolve(__dirname, "../src/store"),
    },
  },
  cache: true,
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  optimization: {
    runtimeChunk: {
      name: "commons",
    },
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          sourceMap: false,
          // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
        },
      }),
    ],
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: "ts-loader" },
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            // either define it here or in .babelrc
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new LoadablePlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../index.html"),
    }),
    new CompressionPlugin(),
  ],
};
