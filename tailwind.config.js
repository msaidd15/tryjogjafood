/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Lora'],
        sans: ['Poppins'],
        padding: {
          root: '0',
        },
        margin: {
          root: '0',
        },
      },
    },
  },
  plugins: [],
};
