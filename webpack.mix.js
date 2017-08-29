let mix = require('laravel-mix')

// mix.config.uglify.compress.drop_console = false;
// mix.config.postCss = require("./postcss.config").plugins;

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.config.postCss = [
    require('postcss-easy-import')(),
    require('postcss-cssnext')({
        features: {
            // Mix takes care of this for us.
            autoprefixer: false
        }
    })
]

mix.js('resources/assets/js/app.js', 'public/js')
    .js('resources/assets/js/docs.js', 'public/js')
    .postCss('resources/assets/css/docs.css', 'public/css')
    .sass('resources/assets/sass/app.scss', 'public/css')
