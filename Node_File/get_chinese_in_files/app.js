var fs = require('fs');
var _file = 'F:\\Temp2'

fs.realpath(_file, function(err, path) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Path is : ' + path);
});

function intoFolders(path) {
    fs.readdir(path, function(err, files) {
        if (err) return;
        files.forEach(function(f) {
            var  stats = fs.statSync(path + '\\' + f);
            if(stats.isDirectory()) {
                intoFolders(path + '\\' + f);
            } else {
                readFile(path + '\\' +f );
            }

        });
    });
}

function readFile(path) {
    var source = fs.readFileSync(path, "UTF-8");
    var _a = source.match(/>([\u4E00-\u9FFF\u3400-\u4DFF\¡£\£¬]+)</g);
    console.log(_a);
    console.log(_a.length);

}

intoFolders(_file);