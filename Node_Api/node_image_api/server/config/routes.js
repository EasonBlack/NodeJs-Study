var fileCtrl = require('../controller/file.ctrl');
var multer  = require('multer')
//var upload = multer({ dest: './images/' })

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './images/')
    },
    filename: function (req, file, cb) {
        console.log(file);
        cb(null, file.fieldname + '-' + Date.now()+'.png')
    }
})
var upload = multer({ storage: storage });

module.exports = function (app) {
    app.get('/file', fileCtrl.getList);
    app.post('/file', upload.single('upl'), fileCtrl.upload);
}

