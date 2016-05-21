var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');
var _ = require('lodash');

var modelItem = {}

fs.readdirSync(__dirname)
    .filter(function(file) {
        return (file.indexOf('.') !== 0) && (file !== 'index.js')
    })
    .forEach(function(file) {
        modelItem = _.extend(modelItem, require(path.join(__dirname, file)));
    });
   //console.log(modelItem);
module.exports = modelItem;