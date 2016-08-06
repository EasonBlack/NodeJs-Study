var core = require('./core');
var config = require('../config/config_vendor');

var jsSection = '';
config.javascript.forEach((j, i)=> {
    jsSection += '<script src="' + j + '"></script>' + core.newline;
})

var body = '<body>' + core.newline
    + core.space_2 + '<div> ' + core.newline
    + core.space_2 + '</div>' + core.newline
    + '</body>' + core.newline
    + jsSection

module.exports = body;

