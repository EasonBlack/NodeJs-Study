var path = require('path');
var uuid = require('node-uuid');
var ObjectId = require('mongoose').Types.ObjectId;
var moment = require('moment');
var Daily = require('../model/DailySchema');
var DailyItem = require('../model/DailyItemSchema');
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
        if (req.body._id) {
            var _item = daily.items.id(req.body._id);
            _item.type = req.body.type;
            _item.time = req.body.time;
            _item.trophy = req.body.trophy;
            _item.content =  req.body.content;
        } else {
            var newItem = new DailyItem(req.body);
            daily.items.push(newItem);
        }
        daily.save(function (err) {
            if (err) throw err;
            res.send(daily);
        });
    });
}

exports.DailyModifyItem = function (req, res) {
    var _date = req.param('date');
    var _id = req.param('id');
    Daily.findOne({date: _date}, function (err, daily) {
        var _item = daily.items.id(_id);
        _item.type = req.body.type;
        _item.time = req.body.time;
        _item.trophy = req.body.trophy;
        _item.content = req.body.content;
        daily.save(function (err) {
            if (err) throw err;
            res.send(daily);
        });
    });
}

exports.DailyDeleteItem = function (req, res) {
    var _date = req.param('date');
    var _id = req.param('id');
    Daily.findOne({date: _date}, function (err, daily) {
        var _item = daily.items.id(_id);
        _item.remove();
        daily.save(function (err) {
            if (err) throw err;
            res.send(daily.items);
        });
    })
}

exports.Daily7DaysList = function(req, res){
    var _dateNow = req.param('date');
    var _dateBefore = moment(_dateNow).subtract(7,'days').format('YYYY-MM-DD');
    Daily.find({ date: {$gte : _dateBefore, $lte: _dateNow}}, function (err, items) {
        res.send(items);
    });
}

exports.DailyItemsList = function(req, res){
    var _datestart = req.param('datestart');
    var _dateend = req.param('dateend');
    console.log(_datestart, _dateend);
    Daily.find({ date: {$gte : _datestart, $lte: _dateend}}, function (err, items) {
        var result = [];
        console.log(items);
        items.forEach((item)=>{
            result.push.apply(result, item.items)
        })
        res.send(result);
    });
}

exports.DailyListBySpan = function(req, res){
    var _datestart = req.param('datestart');
    var _dateend = req.param('dateend');
    console.log(_datestart, _dateend);
    Daily.find({ date: {$gte : _datestart, $lte: _dateend}}, function (err, items) {
        res.send(items);
    });
}



