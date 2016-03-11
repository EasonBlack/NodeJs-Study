
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
    app.post('/upload', upload.single('file_aa'), appCtrl.setPic);

    app.get('/2', appCtrl.getHtml2 );
    app.post('/upload2', appCtrl.setPic2);
}

