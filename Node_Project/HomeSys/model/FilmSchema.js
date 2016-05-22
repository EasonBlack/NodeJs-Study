var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FilmSchema = new Schema({
    name: String,
    comment: String,
    date: String,
    ref: String

});

var Film = mongoose.model('Film', FilmSchema);


module.exports = Film;
