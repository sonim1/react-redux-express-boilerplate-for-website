const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                exclude: /(node_module)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }, {
                test: /\.jsx$/,
                loaders: ['babel-loader']
            }, {
                test: /\.html$/,
                loader: "file?name=[name].[ext]"
            }
        ],
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /(node_modules)/,
                include: /src/,
                loader: 'eslint-loader'
            }
        ]
    },
    plugins: [new webpack.LoaderOptionsPlugin({
            options: {
                eslint: {
                    configFile: path.join(__dirname, './.eslintrc')
                }
            }
        })],
    watch: true
}
