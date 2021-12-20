const colors = require('tailwindcss/colors');
const withAnimations = require('animated-tailwindcss');

module.exports = withAnimations({
  purge: {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx,html}'],
    options: {
      keyframes: true,
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      dev: ['Ubuntu Mono', 'monospace'],
      header: ['Syncopate', 'sans-serif'],
    },
    colors: {
      gray: colors.trueGray,
      green: colors.lime,
      fuchsia: colors.fuchsia,
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
    extend: {
      grayscale: ['hover', 'focus', 'group-focus', 'group-hover'],
      scale: ['hover', 'focus', 'group-focus', 'group-hover'],
      contrast: ['hover', 'focus', 'group-focus', 'group-hover'],
    },
  },
  plugins: [],
}, { experimental: true });
