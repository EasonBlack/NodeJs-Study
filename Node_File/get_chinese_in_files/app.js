var fs = require('fs');



var _file = 'F:\\Temp2';
//var _file = '';
var _allwords = [];
var output = fs.createWriteStream('output.log', {encoding: 'utf8'});

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
    var _words = [];
    var source = fs.readFileSync(path, "UTF-8");
    //get chinese between <><>
    //\uFF0C ��
    //\u3002 ��
    //\u3001 ��
    var _regex = />([\u4E00-\u9FFF\u3400-\u4DFF\uFF0C\u3002\u3001]+)</g;
    var match;
    var _count = 0;
    while ( (match = _regex.exec(source)) !== null) {
        if(_allwords.indexOf(match[1])==-1) {
            _allwords.push(match[1])
            _words.push(match[1]);
        }
        _count++;
    }
    if(_words.length) {
        _words.unshift('//start: '+ path )
        _words.push('//end: '+ path );
        _words.push('\n');
    }

    //fs.writeFile('array.txt',_words, 'utf-8');
    _words.forEach(function(v) {
        output.write(v + '\n', 'utf-8');
    });
}

intoFolders(_file);


