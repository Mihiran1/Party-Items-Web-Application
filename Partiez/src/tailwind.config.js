/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './index.html',           // Main HTML file
      './src/**/*.{js,ts,jsx,tsx}', // All JS/TS/JSX/TSX files in the src folder (React/Vite/Next.js, etc.)
    ],
    theme: {
      extend: {},
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
    plugins: [],
  }
  