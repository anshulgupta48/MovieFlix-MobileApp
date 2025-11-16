/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        // Core Backgrounds
        'cosmic-black': '#030014',
        'deep-void': '#121212',
        'obsidian-brown': '#151312',
        'slate-mist': '#2F2F3A',

        // Dark Purples
        'midnight-plum': '#221F3D',
        'nebula-ink': '#0F0D23',

        // Soft Light Tones
        'quasar-silver': '#D6C7FF',
        'moonlight-gray': '#A8B5DB',
        'silver-haze': '#9CA4AB',

        // Accents
        'astral-violet': '#AB8BFF',
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