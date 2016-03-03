var express = require('express');
var path = require('path');
var fs = require('fs');
var uuid = require('node-uuid');
var bodyParser = require('body-parser');

var app = express();
app.listen(3000, function () {
    console.log('connect success!');
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));
app.use('/vendor', express.static(path.join(__dirname, '../../vendor')));
app.use('/image', express.static(path.join(__dirname, 'image')));

app.get('/', function (req, res) {
    res.render('index.html');
});

app.post('/update', function (req, res) {
    //console.log(req.body);
    var name = req.body.name;
    var img = req.body.img;
    var dataBuffer = new Buffer(img, 'base64');
    fs.writeFile('image/' + uuid.v1() + ".png", dataBuffer, function (err) {
        if (err) {
            res.send(err);
        } else {
            res.send("保存成功！");
        }
    });
});