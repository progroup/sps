const mix = require('laravel-mix')
const path = require('path')

mix.js('resources/js/main.js', 'public/js').vue({version: 3})
mix.postCss('resources/js/assets/css/tailwind.css', 'public/css', [
  require('tailwindcss'),
])

mix.override(webpackConfig => {
  webpackConfig.resolve.modules = [
    'node_modules',
    __dirname + '/vendor/spatie/laravel-medialibrary-pro/resources/js',
  ]
})

mix.purgeCss({whitelistPatterns: [/^media-library/]})

mix.webpackConfig({
  resolve: {
    alias: {
      '~': path.resolve('resources/js'),
      '@': path.resolve('resources/js'),
    },
  },
})
