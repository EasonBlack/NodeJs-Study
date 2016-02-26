var fs = require('fs');
var dictionary = require('./lang_ch.json');


var _file = 'F:\\Temp2';

var _allwords = [];

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
                readFile(path + '\\' +f , f);
            }
        });
    });
}

function readFile(path, f) {
    var _words = [];
    var source = fs.readFileSync(path, "UTF-8");
    //get chinese between <><>
    //\uFF0C ，
    //\u3002 。
    //\u3001 、
    var _regex = />([\u4E00-\u9FFF\u3400-\u4DFF\uFF0C\u3002\u3001]+)</g;
    var match;
    while ( (match = _regex.exec(source)) !== null) {
        if(_allwords.indexOf(match[1])==-1) {
            _allwords.push(match[1])
            _words.push(match[1]);
        }
    }

    for(var i=0;i<_words.length;i++){
        var _reg = new RegExp(">" + _words[i] + "<", 'gi');
        var _target = '';
        for(var key in dictionary){
          if(dictionary[key] == _words[i]) {
              _target = key;
              break;
          }
        }
        var __target = '>{{\''+ _target + '\' | translate }} <!--' + _words[i] +'--><';
        source = source.replace(_reg, __target);
    }

    fs.writeFile('dist\\'+f, source, 'utf8', function (err) {
       if (err) return console.log(err);
    });
}

intoFolders(_file);


