
var Users = require('../model/UserSchema.js');


exports.getList = function(req, res) {
    Users.find(function (err, users) {
        if (err) return next(err);
        if (users.length == 0) {
            res.send('no user')
        } else {
            res.send(users);
        }
    });
}

exports.getById = function(req, res) {
    Users.find({id: req.param('id') }, function (err, user) {
        if (err) return console.log(err);
        res.send(user);
    });
}

exports.modify = function(req, res) {
    Users.findOne({id: req.param('id') }, function (err, user) {
        if (err) return console.log(err);

        user.name = req.body.name;

        user.save(function(err) {
            if (err) throw err;
            res.send('update  user success');
        });
    });
}

exports.delete = function(req, res){
    Users.remove({id: req.param('id') }, function (err) {
        if (err) return console(err);
        res.send('remove success');
    });
}

exports.add = function(req, res) {
    var newUser = new Users (req.body);
    newUser.save(function(err) {
        if (err) throw err;
        res.send('add  user success');
    });
}

