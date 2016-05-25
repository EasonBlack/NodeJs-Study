var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ComicSchema = new Schema({
    name: String,
    author: String,
    date: String,
    comment: String,
    ref: String,
    something: String
});

var Comic = mongoose.model('Comic', ComicSchema);


module.exports = Comic;