var fs = require('fs');
var path = require('path');

exports.addFolder = function (pathname) {
    var _path = path.join(__dirname, pathname);
    if (!fs.existsSync(_path)) {
        fs.mkdirSync(_path);
    }
}