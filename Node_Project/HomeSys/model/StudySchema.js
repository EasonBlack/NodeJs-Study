var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StudySchema = new Schema({
    name: String
});

var Study = mongoose.model('Study', StudySchema);


module.exports = Study;

