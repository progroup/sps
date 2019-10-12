/* eslint-env node */
/* eslint-disable no-console, no-sync, array-bracket-newline, no-process-env */

const autoprefixer = require('autoprefixer');
const calc = require('postcss-calc');
const extend = require('extend');
const fs = require('fs');
const glob = require('glob');
const mix = require('laravel-mix');
const path = require('path');

/* -------------------------------------------------------------------------- */

const ENV = process.env.NODE_ENV;

/* Load user config if exists */

const defaultConfig = JSON.parse(fs.readFileSync('./config.default.json'));

let config = {};

if (fs.existsSync(path.resolve(__dirname, './config.json'))) {
  config = extend(defaultConfig, JSON.parse(fs.readFileSync('./config.json'))); // eslint-disable-line global-require
} else {
  config = defaultConfig;
}

mix.options({
  autoprefixer: false,
  postCss: [
    autoprefixer({
      grid: false,
    }),
  ],
});

/* -------------------------------------------------------------------------- */
mix.js('client/polyfills/respimage.js', 'js/polyfills');
mix.js('client/polyfills/promise.js', 'js/polyfills');

const templateJS = glob.sync('./client/templates/*.js');
for (let i = 0, l = templateJS.length; i < l; i++) {
  mix.js(templateJS[i], 'js');
}

const templateCSS = glob.sync('./client/templates/*.scss');
for (let i = 0, l = templateCSS.length; i < l; i++) {
  mix.postCss(templateCSS[i], 'css');
}
/* -------------------------------------------------------------------------- */

mix.browserSync({
  proxy: {
    target: config.host,
  },
  files: [
    'www/assets/css/*.css',
    'www/assets/css/templates/*.css',
    'www/assets/js/*.js',
    'site/snippets/**/*.php',
    'site/templates/**/*.php',
    'www/content/**/*',
  ],
  open: false,
  ghostMode: false,
});

mix.sourceMaps();
mix.disableNotifications();
mix.setPublicPath('www/assets');
mix.setResourceRoot('/assets/');

mix.webpackConfig({
  output: {
    publicPath: '/assets/',
    chunkFilename: 'js/bundle-[name].js?id=[chunkhash]',
  },
  plugins: [
  ],
  stats: {
    assets: false,
    chunks: false,
    hash: false,
  },
});

mix.version();
