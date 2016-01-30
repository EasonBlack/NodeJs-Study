
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var dust = require('express-dustjs');
var cheerio  = require('cheerio');
var router = require('./routes');

var app = express();
app.listen(3000, function(){
    console.log('connect success!');
});

dust._.optimizers.format = function (ctx, node) {
    return node
}

// Define custom Dustjs helper
dust._.helpers.demo = function (chk, ctx, bodies, params) {
    return chk.w('demo')
}

// Use Dustjs as Express view engine
app.engine('dust', dust.engine({
    // Use dustjs-helpers
    useHelpers: true
}))
app.set('view engine', 'dust');
app.set('views', path.resolve(__dirname, './views'));

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.use(express.static(path.join(__dirname, '../../vendor')));
app.use('/',router.home);
