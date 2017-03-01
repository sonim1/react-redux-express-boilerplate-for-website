const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

process.noDeprecation = true;

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
            }, {
                test: /\.js$/,
                exclude: /(node_module)/,
                use: 'babel-loader',
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
    // watch: true,
};
