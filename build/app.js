'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _webpackDevServer = require('webpack-dev-server');

var _webpackDevServer2 = _interopRequireDefault(_webpackDevServer);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = 3000;
var devPort = 3001;

if (process.env.NODE_ENV == 'development') {
    console.log('Server is running on development mode');

    var config = require('../webpack.dev.config');
    var compiler = (0, _webpack2.default)(config);
    var devServer = new _webpackDevServer2.default(compiler, config.devServer);
    devServer.listen(devPort, function () {
        console.log('webpack-dev-server is listening on port', devPort);
    });
}
app.use('/', _express2.default.static(__dirname + '/../public'));

var server = app.listen(port, function () {
    console.log('Express listening on port', port);
});

// import express from 'express';
// import path from 'path';
// import webpack from 'webpack';
// import WebpackDevServer from 'webpack-dev-server';
// const devMiddleware = require('webpack-dev-middleware');
// const hotMiddleware = require('webpack-hot-middleware');
// const historyMiddleware = require('connect-history-api-fallback');
//
// const app = express();
// const port = 3000;
// const devPort = 3001;
//
// if (process.env.NODE_ENV === 'development') {
//     console.log('server is running webpack.dev.config');
//     const config = require('../webpack.dev.config.js');
//     const compiler = webpack(config);
//
//     app.use(historyMiddleware());
//     app.use(hotMiddleware(compiler));
//     app.use(devMiddleware(compiler, {
//       noInfo: true,
//       publicPath: config.output.publicPath
//     }));
//
//     const devServer = new WebpackDevServer(compiler, config.devServer);
//
//     devServer.listen(devPort, () => {
//         console.log('[JB] -> development - app.linten start dev port:', devPort);
//     });
// }
// console.log('경로가 뭐야 : ', path.join(__dirname, '/../public'));
//
// app.use('/static', express.static(path.join(__dirname, '/../public')));
//
// app.set('public', path.join(__dirname, '/../public'));
//
// app.engine('html', require('pug').renderFile);
//
// app.set('view engine', 'pug');
//
// app.get('*', express.static(__dirname + '/../public'));
//
//
// app.listen(3000, () => {
//     console.log('[JB] -> app.linten start port:', port);
// });