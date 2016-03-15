angular.module('app')
    .controller('ContentEditController', ['$scope', '$http', 'lodash', '$routeParams', 'ContentService', function ($scope, $http, _, $routeParams, Service) {
        var self = this;
        self.id = $routeParams.id;

        $scope.content = {
            relates: []
        }
        $scope.view = {
            contentList: [],
            selected : {}
        }

        $scope.backList = function() {
            window.location.href = '/#/contents/';
        }

        $scope.refreshContentList = function (content) {
            Service.getList()
                .then(function (response) {
                    console.log(response);
                    $scope.view.contentList = response.data;
                });
        };


        $scope.AddRelate = function () {
            if ($scope.view.selected) {
                $scope.content.relates.push($scope.view.selected);
            }
            console.log($scope.view.selected);
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
            if (self.id != 0) {
                Service.putContent(self.id, data)
                    .then(function (response) {
                        alert(response.data);
                    });
            } else {
                Service.postContent(data)
                    .then(function (response) {
                        alert(response.data);
                    });
            }
        }

        self.init = function () {
            if (self.id != 0) {
                Service.getById(self.id)
                    .then(function (response) {
                        $scope.content = response.data;
                    });
            }
            $scope.refreshContentList();
        }
        self.init();
    }])
;