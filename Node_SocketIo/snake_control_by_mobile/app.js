var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var dust = require('express-dustjs');


var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('action',function(data){
        socket.broadcast.emit('action', data);
    });

});

http.listen(3000, function(){
    console.log('listening on *:3000');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());


app.engine('dust', dust.engine());
app.set('view engine', 'dust');
console.log(__dirname);
console.log(path.resolve(__dirname, '../../vendor/javascript'));
app.set('views', path.resolve(__dirname, './app/view'));
app.use('/vendor', express.static(path.resolve(__dirname, '../../vendor/javascript')));
app.use('/static', express.static(path.resolve(__dirname, './app/public')));

//app.use('/api', ApiRoutes);

app.get('/snake',function(req, res){
    console.log('snake');
    res.render('snake');
});

app.get('/console',function(req, res){
    console.log('console');
    res.render('console');
});


