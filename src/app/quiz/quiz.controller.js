(function(){
  'use strict';

  angular
    .module('app.quiz')
    .controller('quizController', quizController);

    quizController.$inject = ['$firebaseArray', '$routeParams', '$window'];

    function quizController($firebaseArray, $routeParams, $window) {

      //Viewmodel
      var vm =  this;

      var user = {};

      //Býr til Firebase gagnagrunn

      var fireSubmissions = new Firebase('https://skywalker-quiz.firebaseio.com/quizSubmission');

      //Submission

      function Submission() {
        this.name = '';
        this.weight = '';
        this.height = '';
        this.gender = '';
        this.hair = '';
        this.eyes = '';
        this.residence = '';
        this.drive = '';
      }

      vm.newSubmission = new Submission();
      vm.submissions = $firebaseArray(fireSubmissions);
      vm.addSubmission =  addSubmission;
      vm.skref = 1;
      vm.aframSkref = aframSkref;
      vm.afturSkref = afturSkref;


      function aframSkref() {
        if(vm.skref == 6) {
          addSubmission();
        } else {
          vm.skref++;
        }
      }

      function afturSkref() {
        vm.skref--;
      }

      function addSubmission() {
        user = vm.newSubmission;

        //Ýtir user inní Database by ID

        var userID = fireSubmissions.push(vm.newSubmission);
        vm.newSubmission = new Submission();
        // user = vm.newSubmission;
        // console.log(user, 'user ID: '+userID.key());
        $window.location.href = '/#/results/'+userID.key();
      }



    }

})();