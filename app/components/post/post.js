(function() {
  'use strict';

  function PostController($scope) {
    $scope.expanded = false;
    $scope.toggleExpanded = function() {
      $scope.expanded = !$scope.expanded;
    };
  }

  angular.module('invision')
    .controller('PostController', PostController);
})(angular);