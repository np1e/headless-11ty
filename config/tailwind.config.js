const paths = require('./paths.js');
const path = require('path');

module.exports = {
    purge: {
        content: [
            path.resolve(paths.src, '**/*.njk'), 
            path.resolve(paths.src, '**/*.js'), 
            path.resolve(paths.src, '**/*.html')
        ],
    },
    darkMode: false,
    theme: {
        fontFamily: {
            'primary': 'var(--font-family-primary)',
            'secondary': 'var(--font-family-secondary)'
        },
        borderColor: theme => ({
            ...theme('colors'),
            DEFAULT: theme('border', 'border'),
            'border': 'border'
        }),
        extend: {
            colors: {
                'bg-primary': 'var(--c-bg-primary)',
                'bg-secondary': 'var(--c-bg-secondary)',
                't-primary': 'var(--c-text-primary)',
                't-secondary': 'var(--c-text-secondary)',
                'link': 'var(--c-link-primary)',
                'border': 'var(--c-border-primary)'
            }
        },
    },
    variants: {},
    plugins: [],
}