var path = require('path');
var uuid = require('node-uuid');
var ObjectId = require('mongoose').Types.ObjectId;
var moment = require('moment');
var Daily = require('../model/DailySchema');
var DailyItem = require('../model/DailyItemSchema');


exports.DailyListByDate = function (req, res) {
    var _date = req.param('date');
    Daily.findOne({date: _date}, function (err, d) {
        if (d) {
            res.send(d);
        } else {
            var newDaily = new Daily({date: _date});
            newDaily.save(function (err) {
                if (err) throw err;
                res.send(newDaily);
            });
        }

    });
}

exports.DailyListById = function (req, res) {
    Daily.find({_id: req.param('id')}, function (err, items) {
        res.send(items);
    });
}

exports.DailyAddItem = function (req, res) {
    var _date = req.param('date');
    Daily.findOne({date: _date}, function (err, daily) {
        var newItem = new DailyItem(req.body);
        daily.items.push(newItem);
        daily.save(function (err) {
            if (err) throw err;
            res.send(daily);
        });
    });
}

exports.DailyModifyItem = function (req, res) {
    var _date = req.param('date');
    var _id = req.param('id');
    var newItem = new DailyItem(req.body);
    Daily.findOne({date: _date}, function (err, daily) {
        var _item = daily.items.id(_id);
        _item.type = newItem.type;
        _item.time = newItem.time;
        _item.trophy = newItem.trophy;
        _item.ref = newItem.ref;
        series.save(function(err) {
            if (err) throw err;
            res.send('update daily item success');
        });
    });
}

exports.DailyDeleteItem = function(req, res){
    var _date = req.param('date');
    var _id = req.param('id');
    Daily.findOne({date: _date  }, function (err, daily) {
        var _item = daily.items.id(_id);
        _item.remove();
        daily.save(function(err) {
            if (err) throw err;
            res.send(daily.items);
        });
    })
}

