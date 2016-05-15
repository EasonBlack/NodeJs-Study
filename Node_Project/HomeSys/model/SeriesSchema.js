var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var SeriesItemSchema = require('./SeriesItemSchema').schema;

var SeriesSchema = new Schema({
    name: String,
    status: String,
    date: String,
    items: [SeriesItemSchema]
});

var Series = mongoose.model('Series', SeriesSchema);


module.exports = Series;
