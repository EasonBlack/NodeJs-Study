
module.exports = function(app) {

    app.config(['$routeProvider',function($routeProvider) {
        $routeProvider
            .when('/1', {
                templateUrl : './interface/page1/page1.template.html',
                controller  : 'Page1Controller'
            })
            .when('/2', {
                templateUrl : './interface/page2/page2.template.html',
                controller  : 'Page2Controller'
            })
    }])
}
