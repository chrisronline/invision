(function() {
  'use strict';

  function PostCellDirective() {
    return {
      restrict: 'A',
      templateUrl: 'components/post-cell/post-cell.directive.html',
      scope: {
        post: '=postCell'
      }
    };
  }

  angular.module('invision')
    .directive('postCell', PostCellDirective);
})(angular);