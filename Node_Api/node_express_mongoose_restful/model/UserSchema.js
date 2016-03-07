var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    id: Number,
    name: String
});

var Users = mongoose.model('User', UserSchema);

module.exports = Users;