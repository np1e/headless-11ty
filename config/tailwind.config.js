module.exports = {
    purge: process.env.NODE_ENV === 'production' ? {
        enabled: true,
        content: ['src/**/*.njk', 'src/**/*.js', 'src/**/*.html'],
    } : {},
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