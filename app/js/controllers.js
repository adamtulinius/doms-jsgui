'use strict';

function ObjectController($scope, $routeParams, DomsObject, $http) {
    $scope.objectId = $routeParams.objectId;
    $scope.datastreams = new Object()
    $scope.currentObject = DomsObject.get({objectId: $scope.objectId}, function() {
        for (var i=0; i<$scope.currentObject.datastreams.length; i++) {
            var datastreamId = $scope.currentObject.datastreams[i].id;
            $scope.loadDatastream(datastreamId);
        }
    });

    $scope.loadDatastream = function(datastreamId) {
        $http.get('http://localhost:4567/objects/' + $scope.objectId + '/' + datastreamId).success(
            function(data, status, headers, config) {
                $scope.datastreams[datastreamId] = data;
            }
        );
    }
}

function SearchController($scope, $routeParams, SearchResult) {
    $scope.query = $routeParams.query;
    $scope.limit = 10;
    $scope.offset = 0;
    $scope.updateResults = function() {
        var search = new Object();
        search.query = $scope.query;
        search.limit = $scope.limit;
        search.offset = $scope.offset;
        $scope.searchResults = new Array();
        setTimeout(
            function () {
                if (equalQueries($scope, search)) {
                    $scope.searchResults = SearchResult.get(
                        {query: search.query, limit: search.limit, offset: search.offset}
                    );
                }
            }, 250)
    };

    if ($routeParams.query) {
        $scope.updateResults();
    }
}

function equalQueries(a, b) {
    return (a.query == b.query && a.limit == b.limit && a.offset == b.offset);
}
