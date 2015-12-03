
var Crawler = require("crawler");
var url = require('url');

var c = new Crawler({
    maxConnections : 10,
    // This will be called for each crawled page
    callback : function (error, result, $) {
        // $ is Cheerio by default
        //a lean implementation of core jQuery designed specifically for the server

        //categories  .categories-line .category-block>ul>li>ul>li>a
        //page   .toolbar-bottom .toolbar .pages ol li a

    }
});

c.queue([
    {
        url: 'http://www.aroma-zone.com/tous-nos-produits.html?mode=grid&limit=48',
        callback: function (error, result, $) {
            $('.categories-line .category-block>ul>li>ul>li>a').each(function(index, a) {
                var _url = $(a).attr('href');
                var _text = $(a).text();
                console.log(_text);
                c.queue([
                    {
                      url:  _url,
                      callback: crawlPages
                    }]);
            });
        }
    }
]);

var crawlPages = function(){

}

var crawlContent = function(){

}