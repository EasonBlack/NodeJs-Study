var users = require('./controller/UserController.js');

module.exports = function (app) {
    app.get('/api/user',users.getList);
    app.get('/api/user/:id',users.getById);
    app.put('/api/user/:id',users.modify);
    app.post('/api/user',users.add);
    app.delete('/api/user/:id',users.delete);
}




