module.exports = {
  content: [
    './_layouts/**/*.html',
    './_includes/**/*.html',
    './*.html',
    './**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#3E442B',
          coral: '#f88379',
          gold: '#A07E18',
          mauve: '#7A5253',
          sage: '#56693A',
          taupe: '#D0CBC8',
          'taupe-light': '#E8E5E3',
        },
        body: '#253237',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Figtree', 'system-ui', 'sans-serif'],
      },
    },
  },
}
