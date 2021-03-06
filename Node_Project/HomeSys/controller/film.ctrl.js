var path = require('path');
var uuid = require('node-uuid');
var ObjectId = require('mongoose').Types.ObjectId;
var moment = require('moment');
var Film = require('../model/FilmSchema');


exports.FilmList = function (req, res) {
    Film.find({}).sort({date: -1}).exec(function(err, films) {
        res.send(films);
    });
}

exports.FilmAdd = function (req, res) {
    var newFilm = new Film(req.body);
    newFilm.save(function (err) {
        if (err) throw err;
        res.send(newFilm);
    });
}

exports.FilmUpdate = function (req, res) {
    var newFilm = new Film(req.body);
    Film.findOne({_id: req.param('id')}, function (err, film) {
        if(!film) res.send('');
        film.comment = newFilm.comment;
        film.name = newFilm.name;
        film.date = newFilm.date;
        film.something = newFilm.something;
        film.save(function (err) {
            if (err) throw err;
            res.send(film);
        });
    });
}

exports.getFilmByRef = function (req, res) {
    var refid = req.param('refid');
    Film.findOne({ref: refid}, function (err, film) {
        if(!film) res.send('');
        res.send(film);
    });
}
