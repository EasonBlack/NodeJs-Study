var express = require('express');
var cheerio  = require('cheerio');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', {});
});

router.post('/test-page', function(req, res) {
    var $ = cheerio.load(req.body.html);
    var _list= $(req.body.target);   //'.movie-list li h2 a'
    var _result = [];
    _list.each(function(i,o){
        _result.push(o.children[0].data);
    })
    console.log(_result);
    res.send(_result);
});


module.exports = router;