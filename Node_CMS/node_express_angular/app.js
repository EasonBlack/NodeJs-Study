var express = require('express');
var path = require('path');
var fs = require('fs');
var uuid = require('node-uuid');
var bodyParser = require('body-parser');

var app = express();
app.listen(3000, function () {
    console.log('connect success!');
});

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/vendor', express.static(path.join(__dirname, '../../vendor')));
app.use('/image', express.static(path.join(__dirname, 'image')));

app.get('/', function (req, res) {
    res.render('index.html');
});

app.get('/getall', function (req, res) {
    var imagePath = 'image';
    fs.readdir(imagePath, function(err, files) {
        var result = [];
        if (err) return;
        files.forEach(function(f) {
            var  stats = fs.statSync(imagePath + '\\' + f);
            if(!stats.isDirectory()) {
                var _item = {};
                _item.src= '/image/' + f;
                result.push(_item);
            }
        });
        console.log(result);
        res.send(result);
    });
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