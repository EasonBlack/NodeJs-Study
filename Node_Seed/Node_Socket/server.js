var express = require('express');
var path = require('path');


var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('pay',function(data){
        console.log(data);
        socket.broadcast.emit('confirm', data);
        socket.emit('confirm', data);
    });
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});

app.use('/vendor', express.static(path.join(__dirname, '../../vendor/javascript')));

app.get('/server',function (req, res) {
    res.sendfile('./server/server.html');
});

app.get('/client',function (req, res) {
    res.sendfile('./client/client.html');
});
