(function(){
  'use strict';

  angular
    .module('app.quiz')
    .config(configFunction);

    configFunction.$inject = ['$routeProvider'];

    function configFunction ($routeProvider) {
      $routeProvider.when('/quiz', {
        templateUrl: 'app/quiz/01quiz.html',
        controller: 'quizController',
        controllerAs: 'vm'
      })
      $routeProvider.when('/gender', {
        templateUrl: 'app/quiz/02gender.html',
        controller: 'quizController',
        controllerAs: 'vm'
      })
      $routeProvider.when('/nidurstada/:id', {
        templateUrl: 'app/quiz/result2.html',
        controller: 'quizController',
        controllerAs: 'vm'
      })
      $routeProvider.when('/results', {
          templateUrl: 'app/results/results.html',
          controller: 'quizController',
          controllerAs: 'vm'
      })

    }

})();