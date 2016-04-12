
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var dust = require('express-dustjs');
var router = require('./routes');


var webpack = require('webpack');
var config = require('./webpack.config.js');
var webpackDevMiddleware = require('webpack-dev-middleware');

var app = express();

var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    stats: {
        colors: true
    }
}));


app.listen(3000, function(){
    console.log('connect success!');
});


app.use(express.static(path.join(__dirname, 'build')));
app.use('/',router.home);