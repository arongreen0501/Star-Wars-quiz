(function() {
    'use strict';

    angular
      .module('app.results')
      .config(configFunction);

    configFunction.$inject = ['$routeProvider'];

    function configFunction($routeProvider) {
        $routeProvider.when('/results/:id', {
          templateUrl: 'app/results/results.html',
          controller: 'ResultsController',
          controllerAs: 'vm'
        });
      };

})();