/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'D93A00': '#D93A00',
        '962900': '#962900'
      },
      maxHeight: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
}

