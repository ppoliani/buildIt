var path = require('path');
var webpack = require('webpack');

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: './',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha', 'sinon-chai'],


        // list of files / patterns to load in the browser
        files: [
            'specs/index.ts',
            'specs/**/*spec.ts',
            'specs/**/*spec.tsx'
        ],


        // list of files to exclude
        exclude: [
        ],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'specs/index.ts': ['webpack'],
            'specs/**/*spec.ts': ['webpack'],
            'specs/**/*spec.tsx': ['webpack']
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        webpack: {
            entry: {
                vendor: [
                    'classnames',
                    'core-js',
                    'nprogress-npm',
                    'moment',
                    'react',
                    'react-dom',
                    'whatwg-fetch'
                ]
            },

            externals: {
                'jsdom': 'window',
                'cheerio': 'window',
                'react/lib/ExecutionEnvironment': true
            },

            resolve: {
                alias: {
                    'sinon': 'sinon/pkg/sinon'
                },

                extensions: ['', '.ts', '.tsx', '.js']
            },

            debug: true,

            module: {
                noParse: [
                    /node_modules\/sinon\//
                ],

                loaders: [
                    {
                        test: /\.[t, j]sx?$/,
                        exclude: /node_modules/,
                        loaders: ['ts']
                    }
                ]
            },

            plugins: [
                new webpack.IgnorePlugin(/ReactContext/),
                new webpack.DefinePlugin({
                    API_URL: JSON.stringify('http://api.openweathermap.org/data/2.5/forecast?q=London&mode=json&units=metric&appid=6f46853eca80bc07f3262d493ca931d3'),
                    ICON_URI: JSON.stringify('http://openweathermap.org/img/w/')
                })
            ],

            devtool: 'eval'
        },

        webpackServer: {
            stats: {
                // With console colors
                colors: true,
                // add the hash of the compilation
                hash: false,
                // add webpack version information
                version: false,
                // add timing information
                timings: true,
                // add assets information
                assets: false,
                // add chunk information
                chunks: false,
                // add built modules information to chunk information
                chunkModules: false,
                // add built modules information
                modules: false,
                // add also information about cached (not built) modules
                cached: false,
                // add information about the reasons why modules are included
                reasons: false,
                // add the source code of modules
                source: true,
                // add details to errors (like resolving log)
                errorDetails: true,
                // add the origins of chunks and chunk merging info
                chunkOrigins: true,
                // Add messages from child loaders
                children: false
            }
        },

        plugins: [
            require('karma-mocha'),
            require('karma-sinon-chai'),
            require('karma-chrome-launcher'),
            require('karma-webpack')
        ]
    });
};
