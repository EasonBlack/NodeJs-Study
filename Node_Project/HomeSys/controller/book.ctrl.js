var path = require('path');
var uuid = require('node-uuid');
var ObjectId = require('mongoose').Types.ObjectId;
var moment = require('moment');
var Book = require('../model/BookSchema');


exports.BookList = function (req, res) {
    Book.findOne({}, function (err, books) {
        res.send(books);
    });
}

exports.BookAdd = function (req, res) {
    var newBook = new Book(req.body);
    console.log(req.body);
    newBook.save(function (err) {
        if (err) throw err;
        res.send(newBook);
    });
}


exports.getBookByRef = function (req, res) {
    var refid = req.param('refid');
    console.log(refid);
    Book.findOne({ref: refid}, function (err, book) {
        if(!book) res.send('');
        res.send(book);
    });
}