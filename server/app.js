import express from 'express';
import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';

const app = express();
const port = 3000;
const devPort = 3001;


if(process.env.NODE_ENV == 'development') {
    console.log('Server is running on development mode');

    const config = require('../webpack.dev.config');
    let compiler = webpack(config);
    let devServer = new WebpackDevServer(compiler, config.devServer);
    devServer.listen(devPort, () => {
        console.log('webpack-dev-server is listening on port', devPort);
    });
}
app.use('/', express.static(__dirname + '/../public'));


const server = app.listen(port, () => {
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
