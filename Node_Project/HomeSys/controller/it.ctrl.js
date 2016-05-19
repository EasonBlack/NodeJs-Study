var path = require('path');
var uuid = require('node-uuid');
var ObjectId = require('mongoose').Types.ObjectId;
var moment = require('moment');
var IT = require('../model/ItSchema');


exports.ITList = function (req, res) {
    IT.find({}, function (err, items) {
        res.send(items);
    });
}

exports.ITAdd = function (req, res) {
    var newIT = new IT(req.body);
    console.log(req.body);
    newIT.save(function (err) {
        if (err) throw err;
        IT.find({}, function (err, items) {
            res.send(items);
        });
    });
}
