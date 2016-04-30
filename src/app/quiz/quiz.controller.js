(function(){
  'use strict';

  angular
    .module('app.quiz')
    .controller('quizController', quizController);

    quizController.$inject = ['$firebaseArray'];
    // quizController.$inject = ['quizFactory'];


    function quizController($firebaseArray) {
      var vm =  this;

      // quizFactory.quizData = new Firebase('https://skywalker-quiz.firebaseio.com/quizSubmission');

      var fireSubmissions = new Firebase('https://skywalker-quiz.firebaseio.com/quizSubmission');
      // var fireTextMessages = new Firebase('https://ang-course.firebaseio.com/textMessages');

      function Submission() {
        this.name = '';
        this.weight = '';
        this.height = '';
        this.gender = '';
        this.hair = '';
        this.eyes = '';
        this.residence = '';
        this.drive = '';
      };

      // step1 = function () {
      //   quizFactory.quizData.name = vm.name;
      //   quizFactory.quizData.name = vm.height;
      //   quizFactory.quizData.name = vm.weight;
      // }

      // step2 = function () {
      //   quizFactory.quizData.prump = vm.gender;
      // }

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
      vm.calculateScore = calculateScore;
      vm.removeSubmission = removeSubmission;

      function addSubmission() {
        vm.submissions.$add(vm.newSubmission);
        vm.newSubmission = new Submission();
      };

      // var rank = 0;

      // function calculateScore(submission) {
      //   // Reikna stig
      //   var score = {
      //     name: submission.name
      //   }
      //   console.log(score)
      // };

      function calculateScore(submiss) {
        var rank = 0;

        if (submiss.name.length <= 5) {
          rank = rank + 3;
        } else if (submiss.name.length >=6 && submiss.name.length <=10) {
          rank = rank + 5;
        } else if (submiss.name.length >=11 && submiss.name.length <=15) {
          rank = rank + 6;
        } else if (submiss.name.length >=16 && submiss.name.length <=20) {
          rank = rank + 7;
        } else if (submiss.name.length >=21 && submiss.name.length <=25) {
          rank = rank + 9;
        } else {
          rank = rank+ 10;
        };
        console.log(rank + 'eftir lengd nafns');

        if (submiss.height <= 149) {
          rank = rank + 1;
        } else if (submiss.height >=150 && submiss.height <=159) {
          rank = rank + 5;
        } else if (submiss.height >=160 && submiss.height <=169) {
          rank = rank + 8;
        } else if (submiss.height >=170 && submiss.height<=179) {
          rank = rank + 12;
        } else if (submiss.height >=180 && submiss.height <=189) {
          rank = rank + 18;
        } else if (submiss.height >=190 && submiss.height <=199) {
          rank = rank + 22;
        } else {
          rank = rank + 27;
        };
        console.log(rank + 'eftir hæð');

        if (submiss.weight <= 40) {
          rank = rank + 2;
        } else if (submiss.weight >=41 && submiss.weight <=50) {
          rank = rank + 4;
        } else if (submiss.weight >=51 && submiss.weight <=60) {
          rank = rank + 6;
        } else if (submiss.weight >=61 && submiss.weight <=70) {
          rank = rank + 8;
        } else if (submiss.weight >=71 && submiss.weight <=80) {
          rank = rank + 10;
        } else if (submiss.weight >=81 && submiss.weight <=90) {
          rank = rank + 12;
        } else if (submiss.weight >=91 && submiss.weight <=100) {
          rank = rank + 14;
        } else if (submiss.weight >=101 && submiss.weight <=110) {
          rank = rank + 16;
        } else if (submiss.weight >=111 && submiss.weight <=120) {
          rank = rank + 18;
        } else {
          rank = rank + 22;
        };
        console.log(rank + 'eftir þyngd');

        if (submiss.residence == 'reykjavik') {
          rank = rank + 2;
        } else if (submiss.residence == 'sudvestur') {
          rank = rank + 5;
        } else if (submiss.residence == 'sudur') {
          rank = rank + 8;
        } else if (submiss.gender == 'nordvestur') {
          rank = rank + 10;
        } else {
          rank = rank + 13;
        };
        console.log(rank + 'eftir kjördæmi');

        if (submiss.gender == 'male') {
          rank = rank + 0;
        } else if (submiss.gender == 'female') {
          rank = rank + 5;
        } else {
          rank = rank + 10;
        };
        console.log(rank + 'eftir kyn');

        if (submiss.drive == 'bilprof') {
          rank = rank + 10;
        } else {
          rank = rank + 0;
        };
        console.log(rank + 'eftir bílpróf');

        if (submiss.hair == 'other') {
          rank = rank + 0;
        } else if (submiss.hair == 'gray') {
          rank = rank + 4;
        } else if (submiss.hair == 'blonde') {
          rank = rank + 7;
        } else if (submiss.hair == 'red') {
          rank = rank + 10;
        } else if (submiss.hair == 'brown') {
          rank = rank + 14;
        } else {
          rank = rank + 17;
        };
        console.log(rank + 'eftir hár');

        if (submiss.eyes == 'blue') {
          rank = rank + 0;
        } else if (submiss.eyes = 'grayblue') {
          rank = rank + 2;
        } else if (submiss.eyes = 'green') {
          rank = rank + 6;
        } else if (submiss.eyes = 'lightbrown') {
          rank = rank + 9;
        } else if (submiss.eyes = 'brown') {
          rank = rank + 11;
        } else {
          rank = rank + 14;
        };

        console.log(submiss.name + ' ' + rank + ' points');
        // vm.submissions.$remove(submiss);
      };

      function removeSubmission(submiss) {
        vm.submissions.$remove(submiss);
      };

      // function submitToFirebase() {
      //   vm.submissions.$add(vm.newSubmission);
      //   vm.newSubmission = new Submission();
      //   console.log('snilld');
      // };


    }

})();