'use strict';


// Declare app level module which depends on filters, and services
angular.module('domsgui', [ 'domsgui.filters'
                          , 'domsgui.objectService'
                          , 'domsgui.datastreamService'
                          , 'domsgui.searchService'
                          , 'domsgui.directives'
                          ]).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/search', {templateUrl: 'partials/objectList.html', controller: SearchController});
    $routeProvider.when('/search/:query', {templateUrl: 'partials/objectList.html', controller: SearchController});
    $routeProvider.when('/objects/:objectId', {templateUrl: 'partials/object.html', controller: ObjectController});
    $routeProvider.otherwise({redirectTo: '/search'});
  }]);
