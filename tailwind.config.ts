import { heroui } from '@heroui/react';

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        // Custom 4K screen — kicks in at 2560px and above
        '3xl': '1440px',
        '4k': '2560px',
      },
    },
  },
  darkMode: 'class',
  plugins: [heroui()],
};

export default config;
