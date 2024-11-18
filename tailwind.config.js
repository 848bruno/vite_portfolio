/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        'fade-in-delay': 'fadeIn 1s ease-out 0.3s',
        'fade-in-delay-2': 'fadeIn 1s ease-out 0.6s',
      },
    },
  },
  plugins: [],
};