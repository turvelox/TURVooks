module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'md': {'max': '740px'},
      // => @media (max-width: 740px) { ... }
    },
    extend: {
      keyframes: {
        drop: {
          '0%': { top: '-50px' },
          '100%': { top: '600px' }
        }
      },
      animation: {
        drop: 'drop 4s infinite'
      }
    },
  },
  plugins: [],
}
