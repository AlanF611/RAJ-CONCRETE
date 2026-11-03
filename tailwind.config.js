/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0a0a0b',
          900: '#121214',
          800: '#1a1a1e',
          700: '#24242a',
        },
        charcoal: {
          950: '#161618',
          900: '#1d1d20',
          800: '#26262b',
          700: '#34343b',
          600: '#4a4a52',
          500: '#6b6b75',
          400: '#9a9aa3',
          300: '#c4c4cc',
          200: '#e2e2e7',
          100: '#f4f4f6',
        },
        concrete: {
          900: '#2b2b2f',
          800: '#3a3a40',
          700: '#4d4d54',
          600: '#64646c',
          500: '#7e7e86',
          400: '#9c9ca4',
          300: '#c0c0c7',
          200: '#dcdce1',
          100: '#ececef',
          50: '#f6f6f8',
        },
        accent: {
          DEFAULT: '#e8602e',
          50: '#fff3ee',
          100: '#ffe1d4',
          200: '#ffc3a8',
          300: '#ff9d70',
          400: '#fb7438',
          500: '#e8602e',
          600: '#c94a1f',
          700: '#a33818',
          800: '#7e2c14',
          900: '#5c200f',
        },
        amber: {
          DEFAULT: '#f5a623',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Archivo', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '10xl': ['8rem', { lineHeight: '0.9', letterSpacing: '-0.04em' }],
      },
      maxWidth: {
        '8xl': '88rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.8s ease forwards',
        'scale-in': 'scaleIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-right': 'slideRight 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        marquee: 'marquee 38s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(1.08)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
