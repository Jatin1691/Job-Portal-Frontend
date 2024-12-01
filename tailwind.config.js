/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'azure-radiance': {
        '50': '#edfaff',
        '100': '#d6f2ff',
        '200': '#b5eaff',
        '300': '#83dfff',
        '400': '#48cbff',
        '500': '#1eadff',
        '600': '#068fff',
        '700': '#007bff',
        '800': '#085ec5',
        '900': '#0d519b',
        '950': '#0e315d',
    },
    'mine-shaft': {
        '50': '#f6f6f6',
        '100': '#e7e7e7',
        '200': '#d1d1d1',
        '300': '#b0b0b0',
        '400': '#888888',
        '500': '#6d6d6d',
        '600': '#5d5d5d',
        '700': '#4f4f4f',
        '800': '#454545',
        '900': '#3d3d3d',
        '950': '#2d2d2d',
    },
    
      }
    
    },
  },
  plugins: [],
}