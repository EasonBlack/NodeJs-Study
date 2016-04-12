var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

var rootPath = 'http://www.nipponpaint.com.my/vr360/';
var pagePath = 'http://www.nipponpaint.com.my/vr360/vr360_s007_nippon_20140730_ren01.html';

request(pagePath, function (error, response, body) {
    if (error) {
        console.log("Error: " + error);
    }
    console.log("Status code: " + response.statusCode);

    var $ = cheerio.load(body);

    var scripts = $('script');
    for (var i = 0; i < scripts.length; i++) {
        var $script = $(scripts[i]);
        if (!$script.attr('src')) {
            console.log('no src');
            continue;
        }
        var _srcPath = $script.attr('src');
        if (_srcPath.indexOf('//') == 0) {
            console.log('has //');
            continue;
        }
        console.log($script.attr('src'));
        downLoadScript(_srcPath);
    }

    fs.writeFile("frame/frame.html", body, function (err) {
        if (err) {
            res.send(err);
        }
    });
});

function downLoadScript(path) {
    var paths = path.split('/');
    var _folderPath = 'frame';
    for (var i = 0; i < paths.length; i++) {
        if (paths[i] != '..' && paths[i].indexOf(',') ==-1 &&  paths[i].indexOf('.') ==-1 && paths[i].indexOf(':') ==-1 && paths[i])  {
            _folderPath += '/' + paths[i];
            if (!fs.existsSync(_folderPath)) {
                fs.mkdirSync(_folderPath);
            }
        }
    }

    var filename = paths.pop();
    var fullPath = rootPath + path;
    request(fullPath, function (err, res, body) {
        fs.writeFile( _folderPath + '/' + filename, body, function (err) {
            console.log(filename, ' Success!');
            if (err) {
                console.log(err);
            }
        });
    })

}