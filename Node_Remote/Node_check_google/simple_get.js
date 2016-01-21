var http = require('http');

var options = {
    host: 'www.google.com',
    port: 80
};


console.time('xxx')
http.get(options, function(res) {
    console.log("success");
    console.timeEnd('xxx');
}).on('error', function(e) {
    console.log("Got error: " + e.message);
    console.timeEnd('xxx');
});