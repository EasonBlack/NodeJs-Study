var url = require('url');
var qs = require('querystring');

var path = 'http://xxxxx/aaaaa/bbbbb/ccccc.html?limit=12&mode=grid&p=6&q=home';

var orginUrl = url.parse(path);
var orginQuery = qs.parse(orginUrl.query);
orginQuery.p = 7;
var strResultQuery = qs.stringify(orginQuery);
var resultUrl = orginUrl.protocol + '://' + orginUrl.hostname +  orginUrl.pathname + '?' + strResultQuery;

console.log(orginUrl);
console.log(strResultQuery);
console.log(resultUrl);