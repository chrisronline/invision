(function() {
  'use strict';

  function ModalCtrl($scope, ModalService) {
    $scope.close = function() {
      ModalService.close();
    };
  }

  angular.module('invision')
    .controller('ModalCtrl', ModalCtrl);
})(angular);