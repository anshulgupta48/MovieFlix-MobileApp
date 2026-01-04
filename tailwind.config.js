/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        // Background-Colors
        'cosmic-black': '#030014',
        'astral-violet': '#AB8BFF',
        'slate-mist': '#2F2F3A',

        // Text-Colors
        'deep-void': '#151312',
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