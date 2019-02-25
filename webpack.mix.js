const { mix } = require('laravel-mix');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const imageminMozjpeg = require('imagemin-mozjpeg');
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

mix.autoload({ jquery: ['$', 'window.jQuery', 'jQuery'] })
    .options({
        publicPath: 'dist/',
    });
mix.setResourceRoot('./');

mix.webpackConfig({
    plugins: [
        //Compress images
        new CopyWebpackPlugin([{
            from: 'images', // FROM
            to: 'images/', // TO
        }]),
        new ImageminPlugin({
            test: /\.(jpe?g|png|gif|svg)$/i,
            pngquant: {
                quality: '70-80'
            },
            plugins: [
                imageminMozjpeg({
                    quality: 90,
                })
            ]
        })
    ]
});

//mix.disableSuccessNotifications();

mix.js('js/main.js', 'main.js')
    .sass('styles/main.scss', 'main.css')
    .copy('html', 'dist')
    .sourceMaps()
    .browserSync({ notify: false });