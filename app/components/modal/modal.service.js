(function() {
  'use strict';

  var Modals = {
    CHAT: 'components/modal/modals/chat/chat.modal.html'
  };

  function ModalService($q, $compile, $http, $rootScope, $templateCache) {
    var service = {};
    var modalTemplatePath = 'components/modal/modal.template.html';
    var modal = null;

    function loadModalTemplate() {
      var template = $templateCache.get(modalTemplatePath);
      if (!template) {
        return $http.get(modalTemplatePath)
          .then(function(response) {
            $templateCache.put(modalTemplatePath, response.data);
            return response.data;
          });
      }

      var deferred = $q.defer();
      deferred.resolve(template);
      return deferred.promise;
    }

    service.show = function(path) {
      if (modal) return;
      // todo: handle load race conditions
      return loadModalTemplate()
        .then(function(modalTemplate) {
          var element = angular.element(modalTemplate);
          modal = element;
          angular.element(document.body).append(element);
          var scope = $rootScope.$new();
          scope.template = path;
          $compile(element)(scope);
        });
    };

    service.close = function() {
      if (modal) {
        modal.remove();
        modal = null;
      }
    }

    return service;
  }

  angular.module('invision')
    .value('Modals', Modals)
    .factory('ModalService', ModalService);
})(angular);