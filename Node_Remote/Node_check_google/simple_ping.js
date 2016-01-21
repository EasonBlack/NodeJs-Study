var ping = require('ping');

var host = 'www.google.com';

console.time('xxx');
//ping.sys.probe(host, function(isAlive){
//    var msg = isAlive ? 'host ' + host + ' is alive' : 'host ' + host + ' is dead';
//    console.log(msg);
//
//});


ping.promise.probe(host, {
    timeout: 3
}).then(function (res) {
    console.log(res);
    console.timeEnd('xxx');
});
