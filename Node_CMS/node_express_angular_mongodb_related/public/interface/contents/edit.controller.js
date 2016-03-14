angular.module('app')
    .controller('ContentEditController', ['$scope', '$http', 'lodash', '$routeParams', function ($scope, $http, _, $routeParams) {
        var self = this;
        self.id = $routeParams.id;


        $scope.page = {
            contentList: []
        }
        $scope.content = {
            relates: []
        }

        $scope.refreshContentList = function (content) {
            return $http.get(
                '/api/content'
            ).then(function (response) {
                    console.log(response);
                    $scope.page.contentList = response.data;
                });
        };


        $scope.AddRelate = function () {
            if ($scope.page.selected) {
                $scope.content.relates.push($scope.page.selected);
            }
            console.log($scope.page.selected);
        }

        $scope.DelRelate = function (r) {
            var _id = r._id;
            var relates = $scope.content.relates;
            for (var i = relates.length - 1; i >= 0; i--) {
                if (relates[i]._id == _id) {
                    relates.splice(i, 1);
                }
            }
        }

        $scope.submit = function () {
            var data = {
                name: $scope.content.name,
                relate: _.pluck($scope.content.relates, '_id')
            }
            if (self.id) {
                $http({
                    method: 'PUT',
                    url: '/api/content/' + self.id,
                    data: data
                })
                    .then(function (response) {
                        alert(response.data);
                    });
            } else {
                $http({
                    method: 'POST',
                    url: '/api/content',
                    data: data
                })
                    .then(function (response) {
                        alert(response.data);
                    });
            }
        }

        self.init = function () {
            if (self.id) {
                $http.get(
                    '/api/content/' + self.id
                ).then(function (response) {
                        $scope.content = response.data;
                    });
            }
            $scope.refreshContentList();
        }
        self.init();
    }])
;