var express = require('express');


var app = express();
app.listen(3000, function(){
    console.log('connect success!');
});

app.get('/',function (req, res) {
    res.sendfile('./index.html');
});

