angular.module('app')
    .factory('ContentService', ['$location', '$http', '$q', function ($location, $http, $q) {
        var self = {
            getById: function (id) {
                var path = '/api/content/' + id;
                return $http.get(path);
            }
        }
        return self;
    }]);