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
        'split-half-v-i': 'linear-gradient(to top, #ffffff 50% , #efefef 50%);',
        'split-half-h-i': 'linear-gradient(to left, #ffffff 50% , #efefef 50%);',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
