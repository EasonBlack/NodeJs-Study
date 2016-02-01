var express = require('express');
var cheerio  = require('cheerio');
var request = require('request');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index-url', {});
});

router.post('/url-test-page', function(req, res) {
    var url = req.body.html;
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var $ = cheerio.load(body)
                ,linkArray = [];
            var _list= $(req.body.target);   //'.movie-list li h2 a'
            var _result = [];
            _list.each(function(i,o){
                _result.push(o.children[0].data);
            })
            console.log(_result);
            res.send(_result);
        }
    });
});


module.exports = router;