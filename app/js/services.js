'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('domsgui.services', []).
    value('version', '0.1');

angular.module('domsgui.objectService', ['ngResource']).
    factory('DomsObject', function($resource) {
        return $resource('/objects/:objectId', {}, {});
    });

angular.module('domsgui.datastreamService', ['ngResource']).
    factory('Datastream', function($resource) {
        return $resource('/objects/:objectId/:datastream', {}, {});
    });

angular.module('domsgui.searchService', ['ngResource']).
    factory('SearchResult', function($resource) {
        return $resource('/search?q=:query&offset=:offset&limit=:limit', {}, {});
    });
