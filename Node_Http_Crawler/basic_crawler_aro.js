
var Crawler = require("crawler");
var url = require('url');
var qs = require('querystring');
var _ = require('lodash');
var xlsx = require('node-xlsx');
var fs = require('fs');
var requestUrl = [];

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
                //console.log(_text);
                c.queue([
                    {
                      url:  _url,
                      callback: crawlCategory
                    }]);
            });
        }
    }
]);

var crawlCategory = function(error, result, $){
     var _pages = [];
     var _url ='';
     $('.category-products .toolbar-bottom .pages li a').each(function(index, a){
          var _num;
          if(!_url) {
              _url = $(a).attr('href');
              _num = $(a).text();
          }
          if(!isNaN(_num)){
              _pages.push(_num);
          }
     });

     var _len = _.max(_pages);
     var _originUrlObj = url.parse(_url);
     var _orginQuery = qs.parse(_originUrlObj.query);
     //http://www.aroma-zone.com/tous-nos-produits/extraits-naturels/huiles-essentielles.html?limit=12&mode=grid&p=6&q=home
     for(var i=1;i<=_len;i++){
         _orginQuery.p = i;
         var _strResultQuery = qs.stringify(_orginQuery);
         var _resultUrl = _originUrlObj.protocol + '://' + _originUrlObj.hostname +  _originUrlObj.pathname + '?' + _strResultQuery;
         requestUrl.push(_resultUrl);
         console.log(_resultUrl);
         c.queue([
             {
                 url:  _resultUrl,
                 callback: crawlContent
             }]);
     }
}

var crawlContent = function(error, result, $){
    $('.category-products .products-grid .item').each(function(index, item){
        var _item = {};
        _item.name = $(item).find('.product-name').text();
        var _prices =[];
        var _price =  $(item).find('.product-simple .price');
        if(_price.length ==0 ) {
            _price =  $(item).find('.product-simple .options-product-simple a');
            var _priceTxt = "";
            _price.each(function(i, p){
                _priceTxt = $(p).find('a').text() + $(p).find('a span').text();
                _prices.push(_priceTxt);
            });
            _item.price = _price.join(',');
        } else {
            _item.price = $(item).find('.product-simple .price').text();
        }
        console.log(_item);

    });
}