module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFBE00',
      },
      backgroundImage: {
        'split-half-v': 'linear-gradient(to bottom, #ffffff 50% , #efefef 50%);',
        'split-half-h': 'linear-gradient(to right, #ffffff 50% , #efefef 50%);',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
