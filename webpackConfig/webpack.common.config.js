const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const LoadablePlugin = require("@loadable/webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const webpack = require("webpack");
const WorkboxPlugin = require("workbox-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "../src/index.tsx"),
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx", ".jpg"],
    alias: {
      routes: path.resolve(__dirname, "../src/routes"),
      assets: path.resolve(__dirname, "../assets"),
      utils: path.resolve(__dirname, "../src/utils"),
      pages: path.resolve(__dirname, "../src/pages"),
      store: path.resolve(__dirname, "../src/store"),
      components: path.resolve(__dirname, "../src/components"),
    },
  },
  cache: true,
  performance: {
    hints: false,
    // maxEntrypointSize: 512000,
    // maxAssetSize: 512000,
  },
  optimization: {
    // splitChunks: {
    //   chunks: "all",
    // },
    // runtimeChunk: {
    //   name: "commons",
    // },
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
        test: /\.(png|jpg|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            // either define it here or in .babelrc
            presets: ["@babel/preset-env", "@babel/preset-react"],
            // plugins: ["dynamic-import-webpack"],
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
    // new LoadablePlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../index.html"),
    }),
    new WorkboxPlugin.GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true,
    }),
    new CompressionPlugin(),
  ],
};
