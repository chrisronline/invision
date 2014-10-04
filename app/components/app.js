(function() {
  'use strict';

  function InvisionConfig($routeProvider) {
    $routeProvider.otherwise({ redirectTo: '/dashboard' });
  }

  angular.module('invision', ['ngRoute', 'ngSanitize'])
    .config(InvisionConfig);

})(angular);