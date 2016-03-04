var express = require('express');
var path = require('path');
var fs = require('fs');
var uuid = require('node-uuid');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var Issues = require('./Schema/IssueSchema');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Mongo Connect Success');
});


var app = express();
app.listen(3000, function () {
    console.log('connect success!');
});


app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));


app.use('/vendor', express.static(path.join(__dirname, '../../vendor')));
app.use('/image', express.static(path.join(__dirname, 'image')));

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/public/index.html');
});

app.get('/m', function (req, res) {
    res.sendfile(__dirname + '/public/multi.html');
});

app.get('/getall', function (req, res) {
    Issues.find({}, function(err, issues) {
        if (err) throw err;
        res.send(issues);
    });
});

app.get('/delete', function (req, res) {
    var name = req.query.name;
    console.log(name);
    Issues.remove({name: name},function(err){
        if (err) throw err;
        fs.unlink('image/' + name + ".png", function(){
            console.log('Delete file success');
        });
        res.send('Delete Success');
    })
});

app.post('/update', function (req, res) {
    //console.log(req.body);
    var name = req.body.name;
    var img = req.body.img;
    var dataBuffer = new Buffer(img, 'base64');
    var _guidName = uuid.v1();
    fs.writeFile('image/' + _guidName + ".png", dataBuffer, function (err) {
        if (err) {
            res.send(err);
        } else {
            saveIssue({
                file: '/image/' + _guidName + ".png",
                name: _guidName
            });
            res.send("保存成功！");
        }
    });
});

function saveIssue(obj) {
    var newIssue = new Issues({
        file: obj.file,
        name: obj.name
    });
    newIssue.save(function(err) {
        if (err) throw err;
        console.log('Issue created!');
    });
}
