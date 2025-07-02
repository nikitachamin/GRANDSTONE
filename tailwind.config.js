/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,html,vue}', // путь к твоим файлам
  ],
  safelist: ['text-primary', 'text-primary-dark', 'text-primary-light', 'f9'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#000',
          dark: '#1e40af',
          light: '#93c5fd',
        },
        f9: '#F9F9F9',
      },
    },
  },
  plugins: [],
};
