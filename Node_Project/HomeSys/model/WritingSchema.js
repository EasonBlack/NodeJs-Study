var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WritingSchema = new Schema({
    name: String
});

var Writing = mongoose.model('Writing', WritingSchema);


module.exports = Writing;
