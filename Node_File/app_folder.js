var fs = require('fs');
var _file = 'F:\\Temp'
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
                console.log('Files: ' + f);
            }
        });
    });
}



intoFolders(_file);