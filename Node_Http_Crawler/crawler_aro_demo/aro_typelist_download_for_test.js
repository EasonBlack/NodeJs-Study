var Crawler = require("crawler");
var url = require('url');
var qs = require('querystring');
var _ = require('lodash');
var fs = require('fs');
var request = require('request');


var  aro_url = 'http://www.aroma-zone.com/tous-nos-produits.html?mode=grid&limit=48';
request(aro_url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        fs.writeFile('aro_typelist.html', body, function (err) {
            if (err) throw err;
            console.log('It\'s saved!');
        });
    }
});


