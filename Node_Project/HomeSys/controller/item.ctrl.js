var path = require('path');
var uuid = require('node-uuid');
var ObjectId = require('mongoose').Types.ObjectId;
require('../model/HouseSchema')
require('../model/StudySchema')
require('../model/JobSchema')
require('../model/ItSchema')
require('../model/BookSchema')
require('../model/FilmSchema')
require('../model/WritingSchema')
var moment = require('moment');

var mongoose = require('mongoose');


exports.List = function (req, res) {
    var type = req.param('type');
    var _model = mongoose.model(type);
    _model.find({}).sort({date: -1}).exec(function(err, items) {
        res.send(items);
    });
}

exports.getItemById = function (req, res) {
    var type = req.param('type');
    var id = req.param('id');
    var _model = mongoose.model(type);
    _model.findOne({_id: id}, function (err, item) {
        res.send(item);
    });
}

exports.getItemByRef = function (req, res) {
    var type = req.param('type');
    var id = req.param('id');
    var _model = mongoose.model(type);
    _model.findOne({ref: id}, function (err, item) {
        res.send(item);
    });
}

exports.ItemDeleteById = function (req, res) {
    var type = req.param('type');
    var id = req.param('id');
    var _model = mongoose.model(type);
    _model.findOne({_id: id}).remove(function(){
        res.send(true);
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
    _model.findOne({_id: id}, function (err, item) {
        for(o in req.body) {
            if(o.indexOf('_')==-1){
                item[o] = req.body[o];
            }
        }

        item.save(function (err) {
            if (err) throw err;
            res.send(item);
        });
    });
}