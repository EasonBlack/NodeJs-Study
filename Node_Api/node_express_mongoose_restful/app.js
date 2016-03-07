var express = require('express');
var mongoose = require('mongoose');

var app = express();

require('./express')(app);
require('./route')(app);

function connect () {
    return mongoose.connect('mongodb://localhost/test').connection;
}

function listen () {
    app.listen(3000, function () {
        console.log('connect success!');
    });
}

connect()
    .on('error', console.log)
    .on('disconnected', connect)
    .once('open', listen);
