var bodyParser = require('body-parser');
var path = require('path');


module.exports = function (app, express) {
    app.use(bodyParser.json({limit: '50mb'}));
    app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
    app.use('/vendor', express.static(path.join(__dirname, '../../../vendor')));
    app.use('/image', express.static(__dirname + '/image'));
}