const path = require("path");
const webpack = require("webpack");
const webpackBaseConfig = require("./webpack.config.js");
const chokidar = require("chokidar");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackAssetsManifest = require('webpack-assets-manifest');

module.exports = merge(webpackBaseConfig, {
  mode: "development",
  output: {
    filename: 'js/[name].js',
  },
  module: {
    rules: [
      {
        test: [/.css$|.scss$/],
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {}
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                config: path.resolve(__dirname, "postcss.config.js"),
                ident: "postcss",
                parser: "postcss-scss",
              }
            },
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
    new WebpackAssetsManifest({
      output: path.resolve(process.cwd(), "src/_data/assets.json"),
			publicPath: "/",
			writeToDisk: true,
			apply(manifest) {
				manifest.set("year", new Date().getFullYear());
			},
    }),
    new webpack.HotModuleReplacementPlugin({
      title: 'Hot Module Replacement',
    })
  ],
  devServer: {
    before(app, server) {
      chokidar.watch(["dist/**/*.html"], {
        alwaysStat: true,
        ignoreInitial: true
      }).on("all", function () {
        server.sockWrite(server.sockets, "content-changed");
      });
    },
    hot: true,
    overlay: true,
    contentBase: [path.resolve(process.cwd(), 'dist/'), path.resolve(process.cwd(), 'src/')],
    index: "index.html",
    host: "localhost",
    port: 8080,
    open: false,
  },
});