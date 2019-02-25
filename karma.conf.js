// Karma configuration
// Generated on Tue Jan 30 2018 13:49:09 GMT-0500 (STD)

/* Use puppeteer instead of dealing with chrome binaries */


var webpackConf = require('./webpack.config.js'); // just use default laravel mix config
delete webpackConf.entry

module.exports = function(config) {
  config.set({

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    port: 9876, // web server port

    colors: true, // enable / disable colors in the output (reporters and logs)

    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    autoWatch: true, // enable / disable watching files & then run tests

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    // browsers: ['Firefox'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    webpack: webpackConf, // Pass your webpack.config.js file's content
        
    webpackMiddleware: {
        noInfo: true,
        stats: 'errors-only'
    },

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './js',

    // list of files / patterns to load in the browser
    files: [
      {pattern: '**/*.spec.js', watched: true},
    ],

    // list of files / patterns to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'main.js': ['webpack', 'babel'],
        '**/*.spec.js': ['babel', 'webpack']
    },
  })
}
