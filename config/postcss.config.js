const path = require('path')
const paths = require('./paths.js');

module.exports = {
    plugins: {
        'postcss-import': {},
        tailwindcss: {
            config: path.resolve(paths.config, 'tailwind.config.js')
        },
        autoprefixer: {},
    }
  }