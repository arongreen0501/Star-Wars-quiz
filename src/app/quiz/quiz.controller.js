(function(){
  'use strict';

  angular
    .module('app.quiz')
    .controller('quizController', quizController);

    quizController.$inject = ['$firebaseArray'];
    quizController.$inject = ['quizFactory'];


    function quizController($firebaseArray) {
      var vm =  this;

      quizFactory.quizData = new Firebase('https://skywalker-quiz.firebaseio.com/quizSubmission');

      // var fireSubmissions = new Firebase('https://skywalker-quiz.firebaseio.com/quizSubmission');
      // var fireTextMessages = new Firebase('https://ang-course.firebaseio.com/textMessages');

      function Submission() {
        this.name = '';
        this.weight = '';
        this.height = '';
        this.gender = '';
        this.hair = '';
      }

      vm.step1 = function () {
        quizFactory.quizData.name = vm.name;
        quizFactory.quizData.name = vm.height;
        quizFactory.quizData.name = vm.weight;
      }

      vm.step2 = function () {
        quizFactory.quizData.prump = vm.gender;
      }

      // Skref 1
      // Vista nafn, þyngd og hæð í factory.quizData
      // Skref 2
      // Bæta við asdfasdf
      // Skref 3
      // Bæta við alskfs
      // Vista

      vm.newSubmission = new Submission();
      vm.submissions = $firebaseArray(fireSubmissions);
      vm.addSubmission =  addSubmission;

      // function addSubmission() {
      //   vm.submissions.$add(vm.newSubmission);
      //   vm.newSubmission = new Submission();
      // };

      function submitToFirebase() {
        vm.submissions.$add(vm.newSubmission);
        vm.newSubmission = new Submission();
      };


    }

})();