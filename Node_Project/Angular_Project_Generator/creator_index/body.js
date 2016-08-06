var core = require('../core/core');
var config = require('./config_vendor');

var jsSection = '';
config.vendor_js.forEach((j, i)=> {
    jsSection += '<script src="' + j + '"></script>' + core.newline;
})

config.app_js.forEach((j, i)=> {
    jsSection += '<script src="' + j + '"></script>' + core.newline;
})

var body = '<body>' + core.newline
    + core.space_2 + '<div> ' + core.newline
    + core.space_2 + '</div>' + core.newline
    + '</body>' + core.newline
    + jsSection

module.exports = body;

