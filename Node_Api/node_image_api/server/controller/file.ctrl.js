var path = require('path');
var fs = require('fs');
var uuid = require('node-uuid');

var _path = path.join(__dirname, '../images');
console.log(_path)
exports.getList = function(req, res) {
    var items = fs.readdirSync(_path);
    console.log(items);
    res.send(items);
}

exports.upload = function(req, res) {
    console.log(req.body); //form fields
    console.log(req.file);
    res.send('11111');
}
