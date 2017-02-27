import express from 'express';
import path from 'path';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

const app = express();
const port = 3000;
const devPort = 3001;

if (process.env.NODE_ENV === 'development') {
    console.log('server is running webpack.dev.config');
    const config = require('../webpack.dev.config.js');
    const compiler = webpack(config);
    const devServer = new WebpackDevServer(compiler, config.devServer);
    devServer.listen(devPort, () => {
        console.log('[JB] -> development - app.linten start dev port:', devPort);
    });
}
console.log('경로가 뭐야 : ', path.join(__dirname, '/../public'));

app.use('/static', express.static(path.join(__dirname, '/../public')));

app.set('public', path.join(__dirname, '/../public'));

app.engine('html', require('pug').renderFile);

app.set('view engine', 'pug');

app.get('*', (req, res) => {
    res.render('index.html');
});

app.listen(3000, () => {
    console.log('[JB] -> app.linten start port:', port);
});
