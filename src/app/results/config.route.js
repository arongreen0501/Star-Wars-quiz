(function() {
    'use strict';

    angular
      .module('app.results')
      .config(configFunction);

    configFunction.$inject = ['$routeProvider'];

    function configFunction($routeProvider) {
        $routeProvider.when('/results', {
          templateUrl: 'app/results/results.html'
        });
      };

})();