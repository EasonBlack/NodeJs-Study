var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var JobSchema = new Schema({
    name: String
});

var Job = mongoose.model('Job', JobSchema);


module.exports = Job;
