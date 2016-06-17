'use strict';

const webpack = require('webpack');
const WATCH = process.argv.indexOf('--watch') > -1;

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'test/entry.ts'
    ],

    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test/entry.ts': ['webpack', 'sourcemap']
    },

    webpack: {
      devtool: 'inline-source-map',
      resolve: {
        extensions: ['', '.ts', '.js']
      },
      module: {
        preLoaders: [{
          test: /\.ts$/, loader: 'tslint', exclude: /node_modules/
        }],
        loaders: [{
          test: /\.ts$/, loader: 'ts', exclude: /node_modules/
        }],
        postLoaders: [{
          test: /\.ts$/,
          exclude: /(test|node_modules)/,
          loader: 'istanbul-instrumenter'
        }]
      },
      tslint: {
        emitErrors: !WATCH,
        failOnHint: false
      },
      plugins: WATCH ? [] : [new webpack.NoErrorsPlugin()]
    },

    coverageReporter: {
      reporters: [{
        type: 'text-summary'
      }, {
        type: 'html'
      }]
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: WATCH,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: !WATCH
  });
};
