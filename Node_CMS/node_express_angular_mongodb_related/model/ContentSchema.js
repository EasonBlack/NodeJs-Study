var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContentSchema = new Schema({
    name: String,
    relate: [String],
    leadTo : [String]
});

var Contents = mongoose.model('Content', ContentSchema);

module.exports = Contents;