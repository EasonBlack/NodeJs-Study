angular.module('app')
    .controller('ContentController', ['$scope', '$http', 'lodash', function ($scope, $http, _) {
        var self = this;

        $scope.page = {
            uls: []
        }

        this.getContents = function () {
            $http.get(
                '/api/content'
            ).then(function (response) {
                    console.log(response);
                    $scope.contentList = response.data;
                    $scope.page.uls.push(response.data);
                });
        }

        this.removeUlsContent = function (index) {
            var uls = $scope.page.uls;
            for (var i = $scope.page.uls.length - 1; i >= 0; i--) {
                if (i > index) {
                    uls.splice(i, 1);
                }
            }
        }

        this.getContents();

        $scope.getRelate = function (content, index) {
            self.removeUlsContent(index);
            $http.get(
                '/api/content-multi/' + content.relate.join(',')
            ).then(function (response) {
                    console.log(response.data);
                    $scope.page.uls.push(response.data);
                });
        }

        $scope.toDatail=function(id){
            window.location.href = '/#/contents/' + id;
        }
    }]);