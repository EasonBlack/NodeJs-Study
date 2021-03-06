
var appCtrl = require('../controller/app.ctrl');
var multer  = require('multer');

//var upload = multer({ dest: 'uploads/' })
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        console.log(file);
        cb(null, file.fieldname + '-' + Date.now())
    }
})
var upload = multer({ storage: storage });

module.exports = function(app){
    app.get('/', appCtrl.getHtml );
    app.post('/upload',  appCtrl.setPic);
}

