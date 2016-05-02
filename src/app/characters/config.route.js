(function(){
  'use strict';

  angular
    .module('app.characters')
    .config(configFunction);

    configFunction.$inject = ['$routeProvider'];

    function configFunction ($routeProvider) {
      $routeProvider.when('/characters', {
        templateUrl: 'app/characters/characters.html',
        controller: 'characterController',
        controllerAs: 'vm'
      })

    }

})();