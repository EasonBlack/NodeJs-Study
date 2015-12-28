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

fs.readFile('aro_itemlist.html', 'utf8', function (err,data) {
    c.queue([
        {
            html: data,
            callback: function (error, result, $) {
                $('.category-products .products-grid .item').each(function(index, item){
                    var _item = {};
                    _item.name = $(item).find('.product-name').text().replace('/n', '').trim();
                    var _prices =[];
                    var _price =  $(item).find('.product-simple .price');
                    if(_price.length ==1 ) {
                        var $prices = $(item).find('.product-simple .selected');
                        _item.price = $prices.text().trim();
                    } else {
                        var $prices = $(item).find('.product-simple .item-product-simple');
                        var _prices = [];
                        $prices.each(function(index, p){
                            _prices.push($(p).text().trim());
                        });
                        _item.price = _prices.join(',');//$(item).find('.product-simple .price').text();
                    }
                    console.log(_item);

                });
            }
        }
    ]);
});

