
var path = require('path');
var fs = require('fs');
var uuid = require('node-uuid');

exports.getHtml = function(req, res) {
    res.sendfile(path.join(__dirname , '../public/index.html'));
}

exports.getHtml2 = function(req, res) {
    res.sendfile(path.join(__dirname , '../public/index_better.html'));
}

exports.setPic = function(req,res) {
    console.log(req.body)
    console.log(req.file)
}

exports.setPic2 = function(req,res) {
    console.log(req.body);
    var dataBuffer = new Buffer(req.body.img, 'base64');
    var _guidName = uuid.v1();
    fs.writeFile('uploads/' + _guidName + ".png", dataBuffer, function (err) {
        if (err) {
            res.send(err);
        } else {
            res.send("保存成功！");
        }
    });
}