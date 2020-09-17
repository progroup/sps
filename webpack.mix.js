const mix = require('laravel-mix')
const path = require('path')

mix
    .js('resources/js/sps.js', 'public/js')
    .sass('resources/sass/sps.scss', 'public/css')
    .webpackConfig({
        resolve: {
            alias: {
                '@': path.resolve('resources/js')
            }
        }
    })
