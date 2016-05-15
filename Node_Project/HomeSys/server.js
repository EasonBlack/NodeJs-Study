var express = require('express');

var app = express();

app.listen(2003, function () {
    console.log('connect :2003 success!');
});

require('./config/express')(app,express);
require('./config/routes')(app);
require('./config/mongo');