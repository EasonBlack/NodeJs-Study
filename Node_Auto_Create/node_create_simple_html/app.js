var fs = require('fs');

var header = require('./model/header');
var body = require('./model/body');

var content = "";
content = header;
content += body;

var stream = fs.createWriteStream("simple.html");
stream.once('open', function(fd) {
    stream.write(content);
    stream.end();
});