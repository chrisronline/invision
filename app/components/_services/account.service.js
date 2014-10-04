(function() {
  'use strict';

  function AccountService(RestService) {
    var service = {};

    service.getAccount = function() {
      return RestService.get('data/account.json');
    };

    return service;
  }

  angular.module('invision')
    .factory('AccountService', AccountService);
})(angular);