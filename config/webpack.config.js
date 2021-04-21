const path = require("path");

module.exports = {
    entry: {
      main: [
        path.resolve(process.cwd(), 'src/assets/scss/index.scss'),
        path.resolve(process.cwd(), 'src/assets/js/main.js'),
      ],
    },
    output: {
      path: path.resolve(process.cwd(), 'dist/'),
      library: {
        name: 'main',
        type: 'var'
      }
    },
    plugins: [
      
    ],
    module: {
      rules: [
        
      ]
    }
  }