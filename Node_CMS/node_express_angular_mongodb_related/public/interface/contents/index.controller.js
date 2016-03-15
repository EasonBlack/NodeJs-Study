angular.module('app')
    .controller('ContentController', ['$scope', '$http', 'lodash', 'ContentService', function ($scope, $http, _, Service) {
        var self = this;

        $scope.view = {
            uls: []
        }

        this.getContents = function () {
            Service.getList()
                .then(function (response) {
                    console.log(response);
                    $scope.contentList = response.data;
                    $scope.view.uls.push(response.data);
                });
        }

        this.removeUlsContent = function (index) {
            var uls = $scope.view.uls;
            for (var i = $scope.view.uls.length - 1; i >= 0; i--) {
                if (i > index) {
                    uls.splice(i, 1);
                }
            }
        }

        $scope.getRelate = function (content, index) {
            self.removeUlsContent(index);
            Service.getMultiByIds(content.relate)
                .then(function (response) {
                    console.log(response.data);
                    $scope.view.uls.push(response.data);
                });
        }

        $scope.toDatail = function (id) {
            window.location.href = '/#/contents/' + id;
        }

        $scope.toAdd = function() {
            window.location.href = '/#/contents/0';
        }


        self.init = function () {
            self.getContents();
        }
        self.init();
    }]);