var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ITSchema = new Schema({
    name: String
});

var IT = mongoose.model('IT', ITSchema);


module.exports = IT;
