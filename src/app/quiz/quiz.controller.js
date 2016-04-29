(function(){
  'use strict';

  angular
    .module('app.quiz')
    .controller('quizController', quizController);

    quizController.$inject = ['$firebaseArray'];


    function quizController($firebaseArray) {
      var vm =  this;

      var fireSubmissions = new Firebase('https://skywalker-quiz.firebaseio.com/quizSubmission');
      // var fireTextMessages = new Firebase('https://ang-course.firebaseio.com/textMessages');

      function Submission() {
        this.name = '';
        this.weight = '';
        this.height = '';
        this.gender = '';
      }

      vm.newSubmission = new Submission();
      vm.submissions = $firebaseArray(fireSubmissions);
      vm.addSubmission =  addSubmission;

      function addSubmission() {
        vm.submissions.$add(vm.newSubmission);
        vm.newSubmission = new Submission();
      };


    }

})();