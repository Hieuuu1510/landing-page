/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
        fontFamily: {
            calistoga: ['var(--font-calistoga)'],
            inter: ['var(--font-inter)'],
        }
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1366px',
      '3xl': '1600px',
    },
  },
  plugins: [],
};
