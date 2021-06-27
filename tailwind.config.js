module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class' or 'false
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
