var fs = require('fs');
var path = require('path');

var source = 'C:\\Eason\\Work\\heruko\\test';
var exceptionFolder = ['node_modules', '.git'];



function intoFolders(source, ext) {
    var files = fs.readdirSync(source);
    var _out = {};
    files.forEach(function (f) {
        var thisPath = source + '\\' + f;
        var stats = fs.statSync(thisPath);
        if(ext.indexOf(f) != -1) {
            return
        }
        if (stats.isDirectory()) {
            _out[f] = intoFolders(thisPath,  ext);
        } else {
            _out.items || (_out.items=[])
            _out.items.push(f);
        }
    });
    return _out
}

var output = intoFolders(source, exceptionFolder);

fs.writeFileSync('./output.json', JSON.stringify(output));
