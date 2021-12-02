const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      dev: ['Ubuntu Mono', 'monospace'],
    },
    colors: {
      gray: colors.trueGray,
      green: colors.green,
    },
    extend: {
      spacing: {
        'header-height': '80px;',
        'mobile-header-height': '3.5rem',
        'dashboard-height': 'calc(100vh - 80px)',
        'mobile-dashboard-height': 'calc(100vh - 3.5rem)',
        'sidebar-width': '250px;',
      },
      primary: {
        bright: 'var(--color-primary-bright)',
        pale: 'var(--color-primary-pale)',
        light: 'var(--color-primary-light)',
        DEFAULT: 'var(--color-primary)',
      },
      rotate: {
        270: '270deg',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
