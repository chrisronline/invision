(function() {
  'use strict';

  function RestService($http) {
    var service = {};
    var baseUrl = '';

    function request(url, method, data) {
      var fullUrl = baseUrl + url;
      return $http({
          url: fullUrl,
          dataType: 'json',
          method: method,
          data: data || {}
        })
        .then(function(response) {
          return response.data;
        });
    }

    service.get = function(url) {
      return request(url, 'GET');
    };

    return service;
  }

  angular.module('invision')
    .factory('RestService', RestService);
})(angular);