var express = require('express');


var app = express();

require('./express')(app);
require('./route')(app);

app.listen(3001, function () {
    console.log('connect success!');
});
