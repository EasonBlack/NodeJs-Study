new function () {
    var app = unow.console.app;
    app.controller("{{controllerName}}Controller", ['$scope', '$rootScope', 'bannerService', '$filter', '$q', '$sce', 'cfpLoadingBar', function ($scope, $rootScope, $Service, $filter, $q, $sce) {
        var self = this;


        $scope.toAdd = function () {
            window.location.href = '/admin#/{{name}}_edit/' + emptyGuid;
        };

        var InitDefer = $q.defer();
        $scope.MainInit = InitDefer.promise;
        $rootScope.MenuDisplay = true;

        $scope.$Service = $Service;
        $scope.ParentScope = $scope;

        $scope.List = {

            Settings: {isSelectable: true},
            CheckHeader: {Width: '5%'},
            Headers: [
                {{#headers}}
                    {
                        Width: '{{width}}', Label: '{{title}}', LabelProperty: '{{property}}'
                    },
                {{/headers}}
            ]
        };

        $scope.Search = function (params) {
            var d = $q.defer();

            if ($scope.name) {
                params.name = $scope.name;
            }

            $Service.getAll(params).then(function (result) {
                d.resolve(result);
                console.log(result.data);
            });

            return d.promise;
        };


        $scope.Init = function () {
            InitDefer.resolve();
        };

        $scope.Init();
    }]);
};