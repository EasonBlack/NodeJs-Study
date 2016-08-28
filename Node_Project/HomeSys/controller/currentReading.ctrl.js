var path = require('path');
var uuid = require('node-uuid');
var ObjectId = require('mongoose').Types.ObjectId;
var moment = require('moment');
var CurrentReading = require('../model/CurrentReadingSchema');


exports.CurrentReadingList = function (req, res) {
    CurrentReading.find({}, function (err, books) {
        res.send(books);
    });
}

exports.CurrentReadingAdd = function (req, res) {
    var newCurrent = new CurrentReading(req.body);
    newCurrent.save(function (err) {
        if (err) throw err;
        res.send(newCurrent);
    });
}

exports.CurrentReadingModifyById = function(req,res) {
    var _id = req.param('id');
    var newCurrent = new CurrentReading(req.body);
    CurrentReading.findOne({_id: _id}, function (err, current) {
        if(!current) res.send('');
        current.name = newCurrent.name;
        current.trophy = newCurrent.trophy;
        current.save(function (err) {
            if (err) throw err;
            res.send(current);
        });
    });
}
