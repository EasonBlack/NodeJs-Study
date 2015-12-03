var request = require('request')
    ,cheerio = require('cheerio')
    ,xlsx = require('node-xlsx')
    ,fs = require('fs')
;

var website = 'http://www.cnblogs.com/#p';
var page = 1;
var cnblogs = [];
cnblogs.push(['NAME', 'URL']);
var getPage = function(page){

    if(page > 1){
        var _buffer = xlsx.build([{name: "cnblogs", data: cnblogs}]);
        fs.writeFile('cnblogs.xlsx', _buffer, function (err) {
            if (err) throw err;
            console.log('It\'s saved!');
        });
        return false;
    }

    var _website = website + page;
    console.log(_website);
    request(_website, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var $ = cheerio.load(body)
                ,title = [];

            page++;

            $('#post_list .post_item .post_item_body .titlelnk').each(function(i, elem){
                cnblogs.push([$(this).text(),$(this).attr('href') ])
                console.log($(this).text());
                console.log($(this).attr('href'));
            });
            process.nextTick(function(){
                getPage(page);
            });
        }
    });
}


getPage(page);



