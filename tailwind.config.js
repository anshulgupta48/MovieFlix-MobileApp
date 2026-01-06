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
        'nebula-ink': '#0F0D23',
        'midnight-plum': '#221F3D',

        // Text-Colors
        'deep-void': '#151312',
        'lunar-glow': '#FFFFFF',
        'silver-haze': '#9CA4AB',
        'moonlight-gray': '#A8B5DB',
        'quasar-silver': '#D6C7FF',
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