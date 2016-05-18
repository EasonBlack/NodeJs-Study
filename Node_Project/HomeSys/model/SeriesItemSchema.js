var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SeriesItemSchema = new Schema({
    num: String,
    comment: String,
    date: String,
    ref: String
});

var SeriesItem = mongoose.model('SeriesItem', SeriesItemSchema);


module.exports = SeriesItem;