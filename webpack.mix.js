const mix = require('laravel-mix')
const tailwindcss = require('tailwindcss')
const path = require('path')
// mix.config.uglify.compress.drop_console = false;
// mix.config.postCss = require("./postcss.config").plugins; TODO: Test this when I need to customize PostCSS

mix.less('resources/assets/less/tailwind.less', 'public/css').options({
    postCss: [tailwindcss('./tailwind.js')]
})

mix.config.postCss = [
    require('postcss-easy-import')(),
    require('postcss-slds-prefix')('vui'),
    require('postcss-cssnext')({
        features: {
            // Mix takes care of this for us.
            autoprefixer: false
        }
    })
]

mix
    .js('resources/assets/js/docs.js', 'public/js')
    .js('resources/assets/js/sps.js', 'public/js')
    .js('resources/assets/js/app.js', 'public/js')
    .postCss('resources/assets/css/docs.css', 'public/css')
    .sass('resources/assets/sass/app.sass', 'public/css')
    .sass('resources/assets/sass/sps.scss', 'public/css')
    .webpackConfig({
        resolve: {
            alias: {
                '@': path.resolve('resources/assets/js')
            }
        }
    })
