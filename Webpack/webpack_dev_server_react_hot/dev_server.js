var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.dev');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true, // is this is the same as specifying --inline --hot?
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000 // is this the same as specifying --watch-poll?
    }

}).listen(3000, 'localhost', function (err, result) {
        if (err) {
            return console.log(err);
        }
        console.log('Listening at http://localhost:3000/');
    });