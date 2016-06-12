var angular = require("angular");

angular.module('app')
    .component('appInput', {
        templateUrl: './components/app.input.html',
        bindings: {
            val: '=',
            title: '@'
        }
    })