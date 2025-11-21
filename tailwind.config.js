/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'mosf-navy-dark': '#181546',
        'mosf-navy-light': '#272460',
        'mosf-gray': '#CCCCCB',
        'mosf-dark': '#1e2139', // Dark blue-gray background that complements navy
        'mosf-dark-alt': '#252a3d', // Slightly lighter variant for cards/sections
        'mosf-navy': {
          '50': '#f0f1f5',
          '100': '#e0e2eb',
          '200': '#c1c5d7',
          '300': '#a2a8c3',
          '400': '#838baf',
          '500': '#272460',
          '600': '#181546',
          '700': '#121038',
          '800': '#0c0b2a',
          '900': '#06061c',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

