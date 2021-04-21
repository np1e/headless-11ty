const path = require('path')

// TODO add purgecss

module.exports = {
    plugins: {
        'postcss-import': {},
        tailwindcss: {
            config: path.resolve(__dirname, 'tailwind.config.js')
        },
        autoprefixer: {},
    }
  }