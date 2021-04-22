const path = require("path");
const paths = require("./paths.js");
const WebpackAssetsManifest = require('webpack-assets-manifest');

module.exports = {
    entry: {
      main: [
        path.resolve(paths.srcAssets, 'js/main.js'),
        path.resolve(paths.srcAssets, 'scss/index.scss'),
      ],
    },
    output: {
      path: path.resolve(paths.dist),
      library: {
        name: 'main',
        type: 'var'
      }
    },
    plugins: [
      new WebpackAssetsManifest({
        output: path.resolve(paths.src, "_data/assets.json"),
        publicPath: "/",
        writeToDisk: true,
        apply(manifest) {
          manifest.set("year", new Date().getFullYear());
        },
      })
    ],
    module: {
      rules: [
        
      ]
    }
  }
