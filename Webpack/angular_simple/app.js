require("./style/main.less");

var angular = require("angular");


angular.module("app", [])
    .controller('appCtrl', ['$scope',function ($scope) {
        $scope.studentname = 'xxxx';
        $scope.studentage = '111';
    }]);