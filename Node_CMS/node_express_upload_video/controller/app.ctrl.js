
var path = require('path');
var fs = require('fs');
var uuid = require('node-uuid');

exports.getHtml = function(req, res) {
    res.sendfile(path.join(__dirname , '../public/index.html'));
}

exports.setPic = function(req,res) {
    var dataBuffer = new Buffer(req.body.video, 'base64');
    var _guidName = uuid.v1();
    var folder = 'uploads'
    if (!fs.existsSync(folder)){
        fs.mkdirSync(folder);
    }
    console.log(folder + '/' + _guidName + ".3gp");
    fs.writeFile(folder + '/' + _guidName + ".3gp", dataBuffer, function (err) {
        if (err) {
            res.send(err);
        } else {
            res.send("保存成功！");
        }
    });
}