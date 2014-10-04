(function() {
  'use strict';

  function HeaderCtrl($scope, Modals, ModalService, AccountService) {
    $scope.dropdownVisible = false;
    $scope.toggleDropdown = function() {
      $scope.dropdownVisible = !$scope.dropdownVisible;
    };
    $scope.createChat = function() {
      ModalService.show(Modals.CHAT);
    };

    AccountService.getAccount()
      .then(function(account) {
        $scope.account = account;
      });
  }

  angular.module('invision')
    .controller('HeaderCtrl', HeaderCtrl);
})(angular);