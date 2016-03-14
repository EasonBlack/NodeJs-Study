

var bodyParser = require('body-parser');
var path = require('path');

module.exports = function (app, express) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/vendor', express.static(path.join(__dirname, '../../vendor')));
    app.use('/public', express.static(path.join(__dirname, 'public')));
}