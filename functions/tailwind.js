module.exports = {

  separator: '--',
  theme: {

    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1920px',
    },

    colors: {

      transparent: 'transparent',

      black: '#000',
      white: '#fff',
      
      pink: '#c243a4',

      gray: {
        100: '#f7fafc',
        200: '#edf2f7',
        300: '#e2e8f0',
        400: '#cbd5e0',
        500: '#a0aec0',
        600: '#718096',
        700: '#4a5568',
        800: '#2d3748',
        900: '#1a202c',
      },

    },

    extend: {},
  },
  variants: {},
  plugins: [

      require('tailwindcss-grid')({

        grids: [1, 2, 3, 5, 6, 8, 10, 12],
        gaps: {
          0: '0',
          1: '0.25rem',
          2: '0.5rem',
          3: '0.75rem',
          4: '1rem',
          8: '2rem',
        },
        autoMinWidths: {
          '16': '4rem',
          '24': '6rem',
        },
        variants: ['responsive']
      })

      /*
      *  ------------------- USAGE -------------------
      * .grid for setting display: grid on an element
      * .grid-columns-{size} for specifying the number of columns in the grid
      * .col-span-{columns} for specifying how many columns a cell should span
      * .grid-gap-{size} for specifying the size of the gap between columns/rows, if the name ends with -x or -y grid-[column/row]-gap will be used
      * .grid-automin-{size} for applying the minimum width of the columns using auto-fit and minmax (the max is 1fr)
      * .col-start-{line} and .col-end-{line} for specifying a cell's start and end grid lines explicitly (useful for reordering cells or leaving gaps)
      * .row-span-{columns} for specifying how many rows a cell should span
      * .row-start-{line} and .row-end-{line}, for specifying a cell's start and end grid lines explicitly (useful for reordering cells or leaving gaps)
      * .grid-dense applies grid-auto-flow: dense
      *
      * */

  ],
}
