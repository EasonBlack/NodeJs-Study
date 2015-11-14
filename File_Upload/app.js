var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var dust = require('express-dustjs');
var fs = require('fs');
var busboy = require('connect-busboy');

var router = require('./routes');


var app = express();

app.use(busboy());

dust._.optimizers.format = function (ctx, node) {
    return node
}

dust._.helpers.demo = function (chk, ctx, bodies, params) {
    return chk.w('demo')
}

app.engine('dust', dust.engine({
    useHelpers: true
}))


app.set('view engine', 'dust');
app.set('views', path.resolve(__dirname, './views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/static', express.static(__dirname + '/public'));
app.use('/',router.home);

app.post('/fileUpload', function(req, res) {
    var fstream;
    req.pipe(req.busboy);
    req.busboy.on('file', function (fieldname, file, filename) {
        console.log("Uploading: " + filename);
        fstream = fs.createWriteStream(__dirname + '/uploads/' + filename);
        file.pipe(fstream);
        fstream.on('close', function () {
            res.send("success");
        });
    });
});

app.listen(3000,function(){
    console.log('connected');
});