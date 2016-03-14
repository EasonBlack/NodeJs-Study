var Contents = require('../model/ContentSchema.js');
var path = require('path');

var publicPath = path.join(__dirname , '../public/');

exports.index = function (req, res) {
    res.sendfile(publicPath + 'index.html');
}

exports.getList = function (req, res) {
    Contents.find(function (err, contents) {
        if (err) return next(err);
        if (contents.length == 0) {
            res.send('no content')
        } else {
            res.send(contents);
        }
    });
}

exports.getById = function (req, res) {
    Contents.find({_id: req.param('id') }, function (err, contents) {
        if (err) return next(err);
        var content = contents[0].toObject();
        var _relates = content.relate;
        if(_relates) {
            Contents.find({_id: {$in: _relates }}, function (err, relates) {
                if (err) return console.log(err);
                content['relates'] = relates;
                //console.log(content);
                res.send(content);
            });
        } else {
            res.send(contents);
        }
    });
}


exports.getMultiContentByIds = function(req, res) {
    var _ids = req.param('ids').split(',');
    Contents.find({_id: {$in: _ids }}, function (err, contents) {
        if (err) return console.log(err);
        res.send(contents);
    });
}


exports.modify = function (req, res) {
    Contents.findOne({_id: req.param('id')}, function (err, content) {
        if (err) return console.log(err);
        content.name = req.body.name;
        content.relate = req.body.relate;
        content.save(function (err) {
            if (err) throw err;
            res.send('update content success');
        });
    });
}

exports.delete = function (req, res) {
    Contents.remove({_id: req.param('id')}, function (err) {
        if (err) return console(err);
        res.send('remove success');
    });
}

exports.add = function (req, res) {
    var newContent = new Contents(req.body);
    newContent.save(function (err) {
        if (err) throw err;
        res.send('add content success');
    });
}

