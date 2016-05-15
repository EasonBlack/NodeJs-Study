var path = require('path');
var uuid = require('node-uuid');
var ObjectId = require('mongoose').Types.ObjectId;
var Series = require('../model/SeriesSchema');
var SeriesItem = require('../model/SeriesItemSchema')



exports.SeriesList = function(req,res) {
    Series.find({}, function (err, items) {
        res.send(items);
    });
}

exports.GetSeriesById = function(req,res) {
    Series.findOne({_id: req.param('id')}, function (err, items) {
        res.send(items);
    });
}

exports.SetSeries = function(req,res){
    Series.findOne({_id: req.param('id') }, function (err, series) {
        if (err) return console.log(err);
        series.name = req.body.name;
        series.date = req.body.date;
        series.status = req.body.status;
        series.save(function(err) {
            if (err) throw err;
            res.send(series);
        });
    });
}

exports.SeriesItemAdd = function(req,res) {
    var id=  req.param('id');
    var newItems = new SeriesItem(req.body);
    Series.findOne({_id: id  }, function (err, series) {
        if (err) return console.log(err);
        series.items.push(newItems);
        series.save(function(err) {
            if (err) throw err;
            res.send(series.items);
        });
    });
}

exports.SeriesItemDeleteById = function(req,res){
    var id=  req.param('id');
    var itemid= req.param('itemid');
    Series.findOne({_id: id  }, function (err, series) {
        var _item = series.items.id(itemid);
        _item.remove();
        series.save(function(err) {
            if (err) throw err;
            res.send(series.items);
        });
    })
}

exports.SeriesItemModifyById = function(req,res) {
    var id=  req.param('id');
    var itemid= req.param('itemid');
    var newItem = new SeriesItem(req.body);
    Series.findOne({_id: id  }, function (err, series) {
        if (err) return console.log(err);
        var _item = series.items.id(itemid);
        _item.comment = newItem.comment;
        _item.num = newItem.num;
        _item.date = newItem.date;
        series.save(function(err) {
            if (err) throw err;
            res.send('update series item success');
        });
    });
}

exports.SeriesAdd = function(req, res) {
    var id=  req.param('id');
    if(id) {
        var newItems = new SeriesItem(req.body);
        Series.findOne({_id: id  }, function (err, series) {
            if (err) return console.log(err);
            series.items.push(newItems);
            series.save(function(err) {
                if (err) throw err;
                res.send('add series success');
            });
        });
    } else {
        var newSeries = new Series(req.body);
        newSeries.save(function(err) {
            if (err) throw err;
            res.send('add series success');
        });
    }
}


