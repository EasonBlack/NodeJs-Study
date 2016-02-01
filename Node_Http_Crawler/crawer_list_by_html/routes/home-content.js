var express = require('express');
var cheerio  = require('cheerio');
var request = require('request');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index-content', {});
});

router.post('/content-test-page', function(req, res) {
    var url = req.body.html;
    var target = req.body.target;
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var $ = cheerio.load(body)
                ,linkArray = [];

            var $d = $("a:contains('"+ target +"')");
            var _tagName = $d[0].tagName;
            var $d_id = $d.attr('id');
            var $d_class=$d.attr('class');
            var _push = $d_id ?  '#'+$d_id : $d_class ?   '.'+$d_class: 'a' ;
            var result = [];
            result.push(_push);
            while(_tagName!=='BODY') {
                var $parent =  $d.parent();
                var _class = $parent.attr('class');
                var _id = $parent.attr('id');
                if(_id) {
                    result.push('#'+_id);
                    break;
                } else if(_class) {
                    result.push('.'+_class);
                }
                $d = $parent;
                _tagName = $d[0].tagName;
            }
            var targetDom = result.reverse().join(' ');
            console.log(targetDom);

            var _list= $(targetDom);
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