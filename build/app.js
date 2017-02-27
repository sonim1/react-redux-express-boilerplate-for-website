'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackDevServer = require('webpack-dev-server');

var _webpackDevServer2 = _interopRequireDefault(_webpackDevServer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = 3000;
var devPort = 3001;

if (process.env.NODE_ENV === 'development') {
    console.log('server is running webpack.dev.config');
    var config = require('../webpack.dev.config.js');
    var compiler = (0, _webpack2.default)(config);
    var devServer = new _webpackDevServer2.default(compiler, config.devServer);
    devServer.listen(devPort, function () {
        console.log('[JB] -> development - app.linten start dev port:', devPort);
    });
}
console.log('경로가 뭐야 : ', _path2.default.join(__dirname, '/../public'));

app.use('/static', _express2.default.static(_path2.default.join(__dirname, '/../public')));

app.set('public', _path2.default.join(__dirname, '/../public'));

app.engine('html', require('pug').renderFile);

app.set('view engine', 'pug');

app.get('*', function (req, res) {
    res.render('index.html');
});

app.listen(3000, function () {
    console.log('[JB] -> app.linten start port:', port);
});