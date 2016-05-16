var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DailyItemSchema = new Schema({
    type: String,
    trophy: String,
    time: String,
    ref: String
});

var DailyItem = mongoose.model('DailyItem', DailyItemSchema);


module.exports = DailyItem;