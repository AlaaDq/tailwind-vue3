module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFBE00',
      },
      backgroundImage: {
        'split-half': 'linear-gradient(to bottom, #ffffff 50% , #c2c2c2 50%);',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
