var path = require('path');
var uuid = require('node-uuid');
var ObjectId = require('mongoose').Types.ObjectId;
var moment = require('moment');
var modelItem = require('../model');


exports.List = function (req, res) {
    var type = req.param('type');
    console.log(modelItem.House);
    model[type].find({}, function (err, items) {
        res.send(items);
    });
}

exports.getItemById = function (req, res) {
    model[req.param('type')].findOne({_id: req.param('id')}, function (err, item) {
        res.send(item);
    });
}


exports.ItemAdd = function (req, res) {
    var newItem = new  model[req.param('type')](req.body);
    newItem.save(function (err) {
        if (err) throw err;
        model[req.param('type')].find({}, function (err, items) {
            res.send(items);
        });
    });
}