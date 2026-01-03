/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        'cosmic-black': '#030014',
        'astral-violet': '#AB8BFF',
        'slate-mist': '#2F2F3A',
        'lunar-glow': '#FFFFFF',
      },
      fontFamily: {
        'dmSans-regular': ['DMSans-Regular'],
        'dmSans-medium': ['DMSans-Medium'],
        'dmSans-semibold': ['DMSans-SemiBold'],
        'dmSans-bold': ['DMSans-Bold'],
      },
    },
  },
  plugins: [],
};