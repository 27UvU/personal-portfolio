/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#165DFF',
        secondary: '#F5F7FA',
        dark: '#333333',
        light: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}