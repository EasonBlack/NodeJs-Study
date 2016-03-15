angular.module('app')
    .factory('ContentService', ['$location', '$http', '$q', function ($location, $http, $q) {
        var basePath = '/api/content/';

        var self = {
            getById: function (id) {
                var path = basePath + id;
                return $http.get(path);
            },

            getList: function () {
                return $http.get(basePath);
            },

            getMultiByIds: function (ids) {
                return $http.get('/api/content-multi/' + ids.join(','))
            },

            postContent: function (data) {
                return $http({
                    method: 'POST',
                    url: basePath,
                    data: data
                })
            },

            putContent: function (id, data) {
                return $http({
                    method: 'PUT',
                    url: basePath + id,
                    data: data
                })
            }


        }
        return self;
    }]);