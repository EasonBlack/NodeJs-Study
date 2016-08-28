var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CurrentReadingSchema = new Schema({
    name: String,
    author: String,
    trophy: String,
    date: String
});

var CurrentReading = mongoose.model('CurrentReading', CurrentReadingSchema);


module.exports = CurrentReading;