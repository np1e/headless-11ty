const path = require("path");
const paths = require('./paths.js');
const webpackBaseConfig = require("./webpack.config.js");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(webpackBaseConfig,  {
  mode: "production",
  output: {
    filename: "assets/js/[name].[fullhash].js",
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
                config: path.resolve(paths.config, "postcss.config.js"),
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
        filename: 'assets/css/[name].[fullhash].css'
      }),
  ],
});