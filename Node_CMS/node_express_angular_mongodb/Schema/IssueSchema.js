var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var IssueSchema = new Schema({
    file: String,
    name: String
});

var Issues = mongoose.model('Issue', IssueSchema);



module.exports = Issues;