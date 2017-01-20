var express = require('express');

var app = express();
var port = 4111;
app.listen(port, function () {
    console.log(`${port} connect success!`);
});

require('./config/express')(app, express);
require('./config/routes')(app);
