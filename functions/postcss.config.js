module.exports = {
  plugins: [
      require('postcss-easy-import')(),
      require('tailwindcss')('./tailwind.js'),
      require('precss')(),
      require('postcss-custom-media')(),
      require('postcss-responsive-font')(),
  ]
};