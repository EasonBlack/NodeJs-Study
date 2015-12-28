var Crawler = require("crawler");
var url = require('url');
var qs = require('querystring');
var _ = require('lodash');
var fs = require('fs');
var path = require('path');
var request = require('request');



var c = new Crawler({
    maxConnections : 10,
    callback : function (error, result, $) {
    }
});

console.log(path.resolve(__dirname, './aro_typelist.html'));
fs.readFile('aro_typelist.html', 'utf8', function (err,data) {
   c.queue([
       {
           html: data,
           callback: function (error, result, $) {
               $('.categories-line .category-block>ul>li>ul>li>a').each(function(index, a) {
                   var _url = $(a).attr('href');
                   var _text = $(a).text();
                   console.log(_text);
               });
           }
       }
   ]);
});

