var bodyParser = require('body-parser');
var path = require('path');
var cors = require('cors')


module.exports = function (app, express) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true}));
    app.use(cors());

}