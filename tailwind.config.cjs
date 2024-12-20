module.exports = {
  content: [
    './index.html', // Include HTML files
    './src/**/*.{js,jsx,ts,tsx}' // Include all JS/JSX/TS/TSX files in the src directory
  ],
  theme: {
    extend: {}
  },
  plugins: [require('daisyui')]
}
