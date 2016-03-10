
var path = require('path');
var fs = require('fs');
var uuid = require('node-uuid');

exports.getHtml = function(req, res) {
    res.sendfile(path.join(__dirname , '../public/index.html'));
}

exports.setPic = function(req,res) {
    console.log(req.body) // form fields
    console.log(req.file) // form files
}