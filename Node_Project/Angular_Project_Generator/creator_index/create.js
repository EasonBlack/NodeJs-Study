var fs = require('fs');
var path = require('path');

var header = require('./header');
var body = require('./body');

var content = "";
content = header;
content += body;

exports.create = function () {
    var stream = fs.createWriteStream(path.join(__dirname, "../dist/index.html"));
    stream.once('open', function (fd) {
        stream.write(content);
        stream.end();
    });
};

