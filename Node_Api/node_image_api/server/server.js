var express = require('express');

var app = express();

app.listen(2005, function () {
    console.log('connect :2005 success!');
});

require('./config/express')(app,express);
require('./config/routes')(app);