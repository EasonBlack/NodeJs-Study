import $ from 'jquery'
import angular from 'angular'

import 'ng-file-upload'

angular.module('app', ['ngFileUpload'])
    .config(['$httpProvider', function ($httpProvider) {
        //$httpProvider.defaults.useXDomain = true;
        //delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }])
    .controller('MainController', ['$scope', '$http', function ($scope, $http) {

        var getImageList = ()=> {
            $http.get('http://localhost:2005/file')
                .then((res)=> {
                    $scope.images = res.data.map((path)=>
                         'http://localhost:2005/images/'+ path
                    );
                })
        }
        getImageList();


        $scope.upload = (file) => {
            var imgs = new FormData();
            imgs.append("upl", file);
            imgs.append("name", 'eason');
            $http({
                method: 'POST',
                url: 'http://localhost:2005/file',
                data: imgs,
                headers: {
                    'Content-Type': undefined
                }
            })
                .then((res)=> {
                    console.log(res);
                    getImageList();
                })

        }
    }])


