var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'cheap-eval-source-map',
    entry: {
        app: './src/index.tsx',

        vendor: [
            'core-js',
            'nprogress-npm',
            'moment',
            'react',
            'react-dom',
            'whatwg-fetch'
        ],

        style: './css/app',

        'vendor-style': './css/vendor'
    },

    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].map',
        chunkFilename: '[id].chunk.js'
    },
    resolve: {
        extensions: ['', '.ts', '.tsx', '.js', '.scss'],
        modulesDirectories: ['node_modules']
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
        new ExtractTextPlugin('[name].css'),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'BuildIt - Weather Forecast',
            inject: 'body',
            chunksSortMode: 'dependency',
            template: 'index.html',
            filename: 'index.html'
        }),
        new webpack.DefinePlugin({
            API_URL: JSON.stringify('http://api.openweathermap.org/data/2.5/forecast?q=London,us&mode=json&units=metric&appid=6f46853eca80bc07f3262d493ca931d3'),
            ICON_URI: JSON.stringify('http://openweathermap.org/img/w/')
        })
    ],
    module: {
        loaders: [
            {
                test: /\.[t, j]sx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'ts'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css!sass')
            }
        ]
    },

    devServer: {
        port: 3000,
        host: 'localhost',
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        },
        outputPath: path.join(__dirname, 'dist')
    }
};
