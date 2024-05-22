/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'banap-light': '#1ea81e',
        'banap-dark': '#1a5d1a',
      },
    },
    fontFamily: {
      sans: ['Montserrat', 'ui-sans-serif'],
    },
  },
  plugins: [],
}
