var ctrl = require('./controller.js');

module.exports = function (app) {
    app.get('/api/user',ctrl.getUser);
    app.get('/api/info',ctrl.getInfo)
}




