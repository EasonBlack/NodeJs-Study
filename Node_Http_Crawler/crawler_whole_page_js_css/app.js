var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

var rootPath = 'http://www.nipponpaint.com.my';

request("http://www.nipponpaint.com.my/products/space/garage", function (error, response, body) {
    if (error) {
        console.log("Error: " + error);
    }
    console.log("Status code: " + response.statusCode);

    var $ = cheerio.load(body);

    findAndDownloadScript($);
    findAndDownloadStyle($);
    findAndDownloadImg($);

    fs.writeFile("source/index.html", body, function (err) {
        if (err) {
            res.send(err);
        }
    });
});

function findAndDownloadScript($) {
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
}

function findAndDownloadStyle($) {
    var styles = $('link');
    for (var i = 0; i < styles.length; i++) {
        var $style = $(styles[i]);
        if (!$style.attr('href')) {
            continue;
        }
        var _linkPath = $style.attr('href');
        console.log(_linkPath);
        downLoadScript(_linkPath);
    }
}

function findAndDownloadImg($) {
    var images = $('img');
    for (var i = 0; i < images.length; i++) {
        var $image = $(images[i]);
        if (!$image.attr('src')) {
            continue;
        }
        var imagePath = $image.attr('src');
        console.log(imagePath);
        downLoadScript(imagePath);
    }
}


function downLoadScript(path) {
    var paths = path.split('/');
    var _folderPath = 'source';
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