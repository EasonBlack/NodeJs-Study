var request = require('request')
    ,cheerio = require('cheerio')
    ,prompt = require('prompt')
;
var website = ''
;

var getBody = function(website){
    request(website, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var $ = cheerio.load(body)
                ,linkArray = [];

            $('a').each(function(i, elem){
                console.log($(this).text());
            })
        }
    });
}

prompt.start();
prompt.get(['website'], function (err, result) {
    console.log(result.website);
    website = result.website;
    getBody(website);
});