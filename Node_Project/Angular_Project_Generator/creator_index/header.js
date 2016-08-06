var core = require('../core/core');
var config = require('./config_vendor');

//css part
var cssSection = '';
config.css.forEach((c, i)=> {
    cssSection += core.space_2 + '<link href="' + c + '" rel="stylesheet" />' + core.newline;
})

var header = '<head>' + core.newline
    + core.space_2 + '<meta charset="UTF-8"> ' + core.newline
    + core.space_2 + '<title></title>' + core.newline
    + cssSection
    + '</head>' + core.newline


module.exports = header;