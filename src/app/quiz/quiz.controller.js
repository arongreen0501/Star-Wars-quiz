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
      // vm.removeParty = removeParty;
      // vm.sendTextMessage = sendTextMessage;

      function addSubmission() {
        vm.submissions.$add(vm.newSubmission);
        vm.newSubmission = new Submission();
      };

      // function removeParty(party) {
      //   vm.parties.$remove(party);
      // };

      // function sendTextMessage(party) {
      //   var newTextMessage = {
      //     phoneNumber: party.phone,
      //     size: party.size,
      //     name: party.name
      //   };
      //   fireTextMessages.push(newTextMessage);
      //   party.notified = true;
      //   vm.parties.$save(party);
      // };

    }

})();