(function() {
  'use strict';

  function PostService(RestService) {
    var service = {};

    service.getPosts = function() {
      return RestService.get('data/posts.json');
    };

    return service;
  }

  angular.module('invision')
    .factory('PostService', PostService);
})(angular);