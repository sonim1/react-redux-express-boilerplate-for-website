const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

process.noDeprecation = true;

module.exports = {
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3001',
        'webpack/hot/only-dev-server',
        './src/index.js',
    ],
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
    },
    devServer: {
        hot: true,
        filename: 'bundle.js',
        publicPath: '/',
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, 'public'),
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
            },{
                test: /\.js$/,
                exclude: /(node_module)/,
                loader: 'babel-loader',
                query: {
                    babelrc: false,
                    presets: [["es2015", {"modules": false}], 'stage-0', 'react'],
                    plugins: ['react-hot-loader/babel'],
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
            }, {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                loader: 'file-loader',
                query: {
                    name: './fonts/glyphicons-halflings-regular.[ext]',
                },
            },
        ],
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.LoaderOptionsPlugin({
            options: {
                eslint: {
                    configFile: path.join(__dirname, './.eslintrc'),
                    ignoreFile: path.join(__dirname, './.eslintignore'),
                },
            },
        }),
        new ExtractTextPlugin('./css/[name].css'),
    ],
};
