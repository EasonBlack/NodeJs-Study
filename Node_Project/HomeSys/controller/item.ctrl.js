var path = require('path');
var uuid = require('node-uuid');
var ObjectId = require('mongoose').Types.ObjectId;
require('../model/HouseSchema')
require('../model/StudySchema')
require('../model/JobSchema')
var moment = require('moment');

var mongoose = require('mongoose');


exports.List = function (req, res) {
    var type = req.param('type');
    var _model = mongoose.model(type);
    _model.find({}, function (err, items) {
        res.send(items);
    });
}

exports.getItemById = function (req, res) {
    var type = req.param('type');
    var id = req.param('id');
    var _model = mongoose.model(type);
    _model.findOne({_id: id}).remove(function () {
        res.send('success');
    });
}

exports.ItemDeleteById = function (req, res) {
    var type = req.param('type');
    var id = req.param('id');
    var _model = mongoose.model(type);
    _model.findOne({_id: id}, function (err, series) {
        var _item = series.items.id(itemid);
        _item.remove();
        series.save(function (err) {
            if (err) throw err;
            res.send(series.items);
        });
    })
}

exports.ItemAdd = function (req, res) {
    var type = req.param('type');
    var _model = mongoose.model(type);
    var newItem = new _model(req.body);
    newItem.save(function (err) {
        if (err) throw err;
        _model.find({}, function (err, items) {
            res.send(items);
        });
    });
}

exports.ItemUpdateById = function (req, res) {
    var type = req.param('type');
    var id = req.param('id');
    var _model = mongoose.model(type);
    //var newItem = new _model(req.body);

    _model.findOne({_id: id}, function (err, item) {
        for(o in req.body) {
            if(o.indexOf('_')==-1){
                console.log(o);
                item[o] = req.body[o];
            }
        }

        console.log(item);
        item.save(function (err) {
            if (err) throw err;
            res.send(item);
        });
    });
}