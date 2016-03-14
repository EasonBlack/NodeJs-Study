angular.module('app')
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/contents', {
                templateUrl: '/public/interface/contents/index.html',
                controller: 'ContentController'
            })
            .when('/contents/:id', {
                templateUrl: '/public/interface/contents/edit.html',
                controller: 'ContentEditController'
            });
    }]);
