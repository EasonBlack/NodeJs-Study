var request = require('request');

console.time('xxx')
request("http://www.google.com", function (error, response, body) {
    if(error) {
        console.log(error);
    }
    if (!error && response.statusCode == 200) {
       console.log('success');
    }
    console.timeEnd('xxx')
});