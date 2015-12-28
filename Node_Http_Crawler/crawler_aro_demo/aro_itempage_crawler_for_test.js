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

fs.readFile('aro_itempage.html', 'utf8', function (err,data) {
    c.queue([
        {
            html: data,
            callback: function (error, result, $) {
                var _pages = [];
                var _url ='';
                $('.category-products .toolbar-bottom .pages li a').each(function(index, a){
                    var _num, $a=$(a);
                    if(!_url) {
                        _url = $a.attr('href');
                        _num = $a.html();
                    }
                    console.log($a.html(), $a.text());
                    if(!isNaN($a.html())){
                        _pages.push($a.html());
                    }
                });
                console.log(_pages);
                var _len = _.max(_pages);
                var _originUrlObj = url.parse(_url);
                var _orginQuery = qs.parse(_originUrlObj.query);
                for(var i=1;i<=_len;i++){
                    _orginQuery.p = i;
                    var _strResultQuery = qs.stringify(_orginQuery);
                    var _resultUrl = _originUrlObj.protocol + '://' + _originUrlObj.hostname +  _originUrlObj.pathname + '?' + _strResultQuery;
                    console.log(_resultUrl);
                }
            }
        }
    ]);
});

