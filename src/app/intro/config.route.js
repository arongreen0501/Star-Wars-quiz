(function() {
    'use strict';

    angular
      .module('app.intro')
      .config(configFunction);

    configFunction.$inject = ['$routeProvider'];

    function configFunction($routeProvider) {
        $routeProvider.when('/', {
          templateUrl: 'app/intro/intro.html'
        });
      };

})();