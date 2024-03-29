const withMT = require('@material-tailwind/react/utils/withMT');
/** @type {import('tailwindcss').Config} */

module.exports = withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      'gray-1': '#13171B',
      'gray-2': '#20252B',
      'gray-3': '#323741',
      'gray-text': '#ABB8C3',
      'violet-1': '#9B51E0',
      'violet-2': '#8d3ada',
      red: '#ff0000',
      white: '#FFFFFF',
      black: '#000000',
    },
    extend: {},
  },
  plugins: [],
});
