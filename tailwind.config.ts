import { heroui } from '@heroui/react';

/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        // Custom 4K screen — kicks in at 2560px and above
        '4k': '2560px',
      },
    },
  },
  darkMode: 'class',
  plugins: [heroui()],
};

export default config;
