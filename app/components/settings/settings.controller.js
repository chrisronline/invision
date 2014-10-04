(function() {
  'use strict';

  function SettingsConfig($routeProvider) {
    $routeProvider
      .when('/settings', {
        templateUrl: 'components/settings/settings.html',
        controller: 'SettingsCtrl',
        resolve: {
          account: function(AccountService) {
            return AccountService.getAccount();
          }
        }
      });
  }

  function SettingsCtrl($scope, account) {
    $scope.account = account;
  }

  angular.module('invision')
    .config(SettingsConfig)
    .controller('SettingsCtrl', SettingsCtrl);
})(angular);