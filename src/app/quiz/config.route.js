(function(){
  'use strict';

  angular
    .module('app.quiz')
    .config(configFunction);

    configFunction.$inject = ['$routeProvider'];

    function configFunction ($routeProvider) {
      $routeProvider.when('/quiz', {
        templateUrl: 'app/quiz/quiz1.html',
        controller: 'quizController',
        controllerAs: 'vm'
      })
      $routeProvider.when('/quiz2', {
        templateUrl: 'app/quiz/quiz2.html',
        controller: 'quizController',
        controllerAs: 'vm'
      })

    }

})();