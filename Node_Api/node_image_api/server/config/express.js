var bodyParser = require('body-parser');
var path = require('path');
var cors = require('cors')


module.exports = function (app, express) {
    app.use(bodyParser.json({limit: '50mb'}));
    app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
    app.use('/images', express.static(path.join(__dirname , '../images')));

    //app.use(cors());
    app.all('/*', function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
        res.header("Access-Control-Allow-Methods", "GET, POST","PUT");
        next();
    });
}