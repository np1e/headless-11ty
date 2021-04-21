const path = require("path");
const webpack = require("webpack");
const webpackBaseConfig = require("./webpack.config.js");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackAssetsManifest = require('webpack-assets-manifest');

module.exports = merge(webpackBaseConfig, {
  mode: "production",
  output: {
    filename: "assets/js/[name].[hash].js",
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
        filename: 'assets/css/[name].[chunkhash].css'
      }),
    new WebpackAssetsManifest({
      output: path.resolve(process.cwd(), "src/_data/assets.json"),
			publicPath: "/",
			writeToDisk: true,
			apply(manifest) {
				manifest.set("year", new Date().getFullYear());
			},
    }),
  ],
});