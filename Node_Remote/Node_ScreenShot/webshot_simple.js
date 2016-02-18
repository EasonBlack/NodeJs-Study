var webshot = require('webshot');
var fs      = require('fs');

var options = {
    renderDelay:5000    //Number of milliseconds to wait after a page loads before taking the screenshot.
    ,screenSize: {
        width: 'window'
        , height: 'window'
    }
    , shotSize: {
        width: 'all'
        , height: 'all'
    }
    //, userAgent: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_2 like Mac OS X; en-us)'
    //+ ' AppleWebKit/531.21.20 (KHTML, like Gecko) Mobile/7B298g'
};

var renderStream = webshot('http://news.baidu.com/',options);
var file = fs.createWriteStream('baidu.png', {encoding: 'binary'});

renderStream.on('data', function(data) {
    file.write(data.toString('binary'), 'binary');
});