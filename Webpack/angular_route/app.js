
var angular = require("angular");
var route = require('./route');
var appCtrl =require('./app_controller');
var page1Ctrl =require('./interface/page1/page1.controller');
var page2Ctrl =require('./interface/page2/page2.controller');

var app  = angular.module("app", [require('angular-route')]);

appCtrl(app);
route(app);
page1Ctrl(app);
page2Ctrl(app);


