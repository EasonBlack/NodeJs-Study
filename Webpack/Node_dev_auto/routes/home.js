var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
/* GET home page. */
router.get('/', function (req, res) {
    res.sendfile(path.join(__dirname, '../views/index.html'));
});


module.exports = router;