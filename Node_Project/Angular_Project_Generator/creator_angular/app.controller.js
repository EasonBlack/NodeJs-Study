var core = require('../core/core');

var controller_wrapper = 'angular.module("app")' + core.newline
    + '.controller("appCtrl",["$scope",function($scope){' + core.newline
    + core.space_3 + '$scope.mes="Hello World"' + core.newline
    + '}])' + core.newline;


exports.appCtrlContent = controller_wrapper;