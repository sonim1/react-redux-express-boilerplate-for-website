const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/public'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /(node_modules)/,
                include: /src/,
                loader: 'eslint-loader',
            },
            {
                test: /\.js$/,
                exclude: /(node_module)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react', 'stage-0'],
                },
            }, {
                test: /\.html$/,
                loader: 'file?name=[name].[ext]',
            }, {
                test: /\.(css|scss)$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader'],
                }),
            },
        ],
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                eslint: {
                    configFile: path.join(__dirname, './.eslintrc'),
                },
            },
        }),
        new ExtractTextPlugin('./css/[name].css'),
    ],
    watch: true,
};
