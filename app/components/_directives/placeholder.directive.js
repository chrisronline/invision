(function() {
  'use strict';

  function PlaceholderDirective() {
    return {
      restrict: 'A',
      link: function($scope, $element, $attrs) {
        console.log('hi');
        $element.placeholder();
      }
    };
  }

  angular.module('invision')
    .directive('placeholder', PlaceholderDirective);
})(angular);