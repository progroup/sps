const mix = require('laravel-mix')
const path = require('path')
const tailwindcss = require('tailwindcss')

mix.js('resources/js/main.js', 'public/js')
mix.postCss('resources/css/main.css', 'public/css', [
  tailwindcss('./tailwind.config.js'),
])

mix.webpackConfig({
  resolve: {
    alias: {
      '@': path.resolve('resources/js'),
    },
  },
})
