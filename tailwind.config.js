/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2D5A27', // Deep Forest Green
        secondary: '#FFB800', // Zesty Orange
        background: '#F9FBF9', // Off-White/Mint Tint
        accent: '#E27396', // Dragonfruit Pink
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
