var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HouseSchema = new Schema({
    name: String
});

var House = mongoose.model('House', HouseSchema);


module.exports = House;
