//old color: 900:'#62337E', 800:'#7E42A2',
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        darkPurple:{
          900:'#62337E',
          800:'#7E42A2',
        },
        darkerPurple:{
          900:'#432356',
          800:'#5F327A',
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}