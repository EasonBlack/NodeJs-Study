var fs = require('fs');
var path = require('path');

var appModule = require('./app.module');
var appContent =  appModule.appModuleContent;

var appController = require('./app.controller');
var appControllerContent =  appController.appCtrlContent;

exports.createAppJs = function () {
    var stream = fs.createWriteStream(path.join(__dirname, "../dist/app/app.js"));
    stream.once('open', function (fd) {
        stream.write(appContent);
        stream.end();
    });
};

exports.createAppCtrlJs = function () {
    var stream = fs.createWriteStream(path.join(__dirname, "../dist/app/app.ctrl.js"));
    stream.once('open', function (fd) {
        stream.write(appControllerContent);
        stream.end();
    });
};