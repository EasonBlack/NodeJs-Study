var express = require('express');
var path = require('path');
var expressLess = require('express-less');

var app = express();
app.use('/stylesheets', expressLess(__dirname + '/client/style'));
app.use('/',  express.static(__dirname + '/client'));

app.listen(3000, function(){
    console.log('listening on *:3000');
});


app.get('/',function (req, res) {
    res.sendfile('./client/client.html');
});
