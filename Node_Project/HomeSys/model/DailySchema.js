var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var DailyItemSchema = require('./DailyItemSchema').schema;

var DailySchema = new Schema({
    date: String,
    items: [DailyItemSchema]
});

var Daily = mongoose.model('Daily', DailySchema);


module.exports = Daily;
