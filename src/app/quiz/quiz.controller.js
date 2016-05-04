(function(){
  'use strict';

  angular
    .module('app.quiz')
    .controller('quizController', quizController);

    quizController.$inject = ['$firebaseArray'];

    function quizController($firebaseArray) {
      var vm =  this;

      var user = {};

      var fireSubmissions = new Firebase('https://skywalker-quiz.firebaseio.com/quizSubmission');


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
      vm.calculateScore = calculateScore;
      vm.removeSubmission = removeSubmission;
      vm.skref = 1;
      vm.aframSkref = aframSkref;
      vm.afturSkref = afturSkref;
      vm.errorMsg = errorMsg;

      function errorMsg() {

      }


      function aframSkref() {
        if(vm.skref == 6) {
          addSubmission();
          calculateScore(user);
        } else {
          vm.skref++;
        }
      }

      function afturSkref() {
        vm.skref--;
      }

      function addSubmission() {
        user = vm.newSubmission;

        vm.submissions.$add(vm.newSubmission);
        vm.newSubmission = new Submission();
        // user = vm.newSubmission;
        console.log(user);


        // fireSubmissions.orderByChild("value").limitToLast(1).on("child_added", function(snapshot) {
        //   var newPost = snapshot.val();
        //   console.log(newPost.name, snapshot.key());
        // });
      }


       function calculateScore() {


        fireSubmissions.orderByChild("value").limitToLast(1).on("child_added", function(snapshot) {
          var newPost = snapshot.val();

          console.log('Name: ' + newPost.name);
          console.log('Height: ' + newPost.height);
          console.log('Weight: ' + newPost.weight);
          console.log('Gender: ' + newPost.gender);
          console.log('Hair: ' + newPost.hair);
          console.log('Eyes: ' + newPost.eyes);
          console.log('Residence: ' + newPost.residence);
          console.log('Drive: ' + newPost.drive);
          console.log('ID: ' + snapshot.key());
        });


        var rank = 0;

        if (user.name.length <= 5) {
          rank = rank + 3;
        } else if (user.name.length >=6 && user.name.length <=10) {
          rank = rank + 5;
        } else if (user.name.length >=11 && user.name.length <=15) {
          rank = rank + 6;
        } else if (user.name.length >=16 && user.name.length <=20) {
          rank = rank + 7;
        } else if (user.name.length >=21 && user.name.length <=25) {
          rank = rank + 9;
        } else {
          rank = rank+ 10;
        };

        var rank1 = rank;
        console.log('Lengd nafns: ' + rank1 + ' stig');

        if (user.height <= 149) {
          rank = rank + 1;
        } else if (user.height >=150 && user.height <=159) {
          rank = rank + 5;
        } else if (user.height >=160 && user.height <=169) {
          rank = rank + 8;
        } else if (user.height >=170 && user.height<=179) {
          rank = rank + 12;
        } else if (user.height >=180 && user.height <=189) {
          rank = rank + 18;
        } else if (user.height >=190 && user.height <=199) {
          rank = rank + 22;
        } else {
          rank = rank + 27;
        };
        var rank2 = rank - rank1;
        console.log('Hæð: ' + rank2 + ' stig');

        if (user.weight <= 40) {
          rank = rank + 2;
        } else if (user.weight >=41 && user.weight <=50) {
          rank = rank + 4;
        } else if (user.weight >=51 && user.weight <=60) {
          rank = rank + 6;
        } else if (user.weight >=61 && user.weight <=70) {
          rank = rank + 8;
        } else if (user.weight >=71 && user.weight <=80) {
          rank = rank + 10;
        } else if (user.weight >=81 && user.weight <=90) {
          rank = rank + 12;
        } else if (user.weight >=91 && user.weight <=100) {
          rank = rank + 14;
        } else if (user.weight >=101 && user.weight <=110) {
          rank = rank + 16;
        } else if (user.weight >=111 && user.weight <=120) {
          rank = rank + 18;
        } else {
          rank = rank + 22;
        };
        var rank3 = rank - rank2-rank1;
        console.log('Þyngd: ' + rank3 + ' stig');

        if (user.residence == 'reykjavik') {
          rank = rank + 2;
        } else if (user.residence == 'sudvestur') {
          rank = rank + 5;
        } else if (user.residence == 'sudur') {
          rank = rank + 8;
        } else if (user.gender == 'nordvestur') {
          rank = rank + 10;
        } else {
          rank = rank + 13;
        };
        var rank4 = rank - rank3-rank2-rank1;
        console.log('Kjördæmi: ' + rank4 + ' stig');

        if (user.gender == 'male') {
          rank = rank + 0;
        } else if (user.gender == 'female') {
          rank = rank + 5;
        } else {
          rank = rank + 10;
        };
        var rank5 = rank - rank4-rank3-rank2-rank1;
        console.log('Kyn: ' + rank5 + ' stig');

        if (user.drive == 'bilprof') {
          rank = rank + 10;
        } else {
          rank = rank + 0;
        };
        var rank6 = rank - rank5-rank4-rank3-rank2-rank1;
        console.log('Bílpróf: ' + rank6 + ' stig');

        if (user.hair == 'other') {
          rank = rank + 0;
        } else if (user.hair == 'gray') {
          rank = rank + 4;
        } else if (user.hair == 'blonde') {
          rank = rank + 7;
        } else if (user.hair == 'red') {
          rank = rank + 10;
        } else if (user.hair == 'brown') {
          rank = rank + 14;
        } else {
          rank = rank + 17;
        };
        var rank7 = rank - rank6-rank5-rank4-rank3-rank2-rank1;
        console.log('Hárlitur: ' + rank7 + ' stig');

        if (user.eyes == 'blue') {
          rank = rank + 0;
        } else if (user.eyes = 'grayblue') {
          rank = rank + 2;
        } else if (user.eyes = 'green') {
          rank = rank + 6;
        } else if (user.eyes = 'lightbrown') {
          rank = rank + 9;
        } else if (user.eyes = 'brown') {
          rank = rank + 11;
        } else {
          rank = rank + 14;
        };
        var rank8 = rank - rank7-rank6-rank5-rank4-rank3-rank2-rank1;
        console.log('Augnlitur: ' + rank8 + ' stig');

        console.log(user.name + ' Samtals ' + rank + ' points');
      }



      // function calculateScore(submiss) {


      //   fireSubmissions.orderByChild("value").limitToLast(1).on("child_added", function(snapshot) {
      //     var newPost = snapshot.val();

      //     console.log('Name: ' + newPost.name);
      //     console.log('Height: ' + newPost.height);
      //     console.log('Weight: ' + newPost.weight);
      //     console.log('Gender: ' + newPost.gender);
      //     console.log('Hair: ' + newPost.hair);
      //     console.log('Eyes: ' + newPost.eyes);
      //     console.log('Residence: ' + newPost.residence);
      //     console.log('Drive: ' + newPost.drive);
      //     console.log('ID: ' + snapshot.key());
      //   });


      //   var rank = 0;

      //   if (submiss.name.length <= 5) {
      //     rank = rank + 3;
      //   } else if (submiss.name.length >=6 && submiss.name.length <=10) {
      //     rank = rank + 5;
      //   } else if (submiss.name.length >=11 && submiss.name.length <=15) {
      //     rank = rank + 6;
      //   } else if (submiss.name.length >=16 && submiss.name.length <=20) {
      //     rank = rank + 7;
      //   } else if (submiss.name.length >=21 && submiss.name.length <=25) {
      //     rank = rank + 9;
      //   } else {
      //     rank = rank+ 10;
      //   };

      //   var rank1 = rank;
      //   console.log('Lengd nafns: ' + rank1 + ' stig');

      //   if (submiss.height <= 149) {
      //     rank = rank + 1;
      //   } else if (submiss.height >=150 && submiss.height <=159) {
      //     rank = rank + 5;
      //   } else if (submiss.height >=160 && submiss.height <=169) {
      //     rank = rank + 8;
      //   } else if (submiss.height >=170 && submiss.height<=179) {
      //     rank = rank + 12;
      //   } else if (submiss.height >=180 && submiss.height <=189) {
      //     rank = rank + 18;
      //   } else if (submiss.height >=190 && submiss.height <=199) {
      //     rank = rank + 22;
      //   } else {
      //     rank = rank + 27;
      //   };
      //   var rank2 = rank - rank1;
      //   console.log('Hæð: ' + rank2 + ' stig');

      //   if (submiss.weight <= 40) {
      //     rank = rank + 2;
      //   } else if (submiss.weight >=41 && submiss.weight <=50) {
      //     rank = rank + 4;
      //   } else if (submiss.weight >=51 && submiss.weight <=60) {
      //     rank = rank + 6;
      //   } else if (submiss.weight >=61 && submiss.weight <=70) {
      //     rank = rank + 8;
      //   } else if (submiss.weight >=71 && submiss.weight <=80) {
      //     rank = rank + 10;
      //   } else if (submiss.weight >=81 && submiss.weight <=90) {
      //     rank = rank + 12;
      //   } else if (submiss.weight >=91 && submiss.weight <=100) {
      //     rank = rank + 14;
      //   } else if (submiss.weight >=101 && submiss.weight <=110) {
      //     rank = rank + 16;
      //   } else if (submiss.weight >=111 && submiss.weight <=120) {
      //     rank = rank + 18;
      //   } else {
      //     rank = rank + 22;
      //   };
      //   var rank3 = rank - rank2-rank1;
      //   console.log('Þyngd: ' + rank3 + ' stig');

      //   if (submiss.residence == 'reykjavik') {
      //     rank = rank + 2;
      //   } else if (submiss.residence == 'sudvestur') {
      //     rank = rank + 5;
      //   } else if (submiss.residence == 'sudur') {
      //     rank = rank + 8;
      //   } else if (submiss.gender == 'nordvestur') {
      //     rank = rank + 10;
      //   } else {
      //     rank = rank + 13;
      //   };
      //   var rank4 = rank - rank3-rank2-rank1;
      //   console.log('Kjördæmi: ' + rank4 + ' stig');

      //   if (submiss.gender == 'male') {
      //     rank = rank + 0;
      //   } else if (submiss.gender == 'female') {
      //     rank = rank + 5;
      //   } else {
      //     rank = rank + 10;
      //   };
      //   var rank5 = rank - rank4-rank3-rank2-rank1;
      //   console.log('Kyn: ' + rank5 + ' stig');

      //   if (submiss.drive == 'bilprof') {
      //     rank = rank + 10;
      //   } else {
      //     rank = rank + 0;
      //   };
      //   var rank6 = rank - rank5-rank4-rank3-rank2-rank1;
      //   console.log('Bílpróf: ' + rank6 + ' stig');

      //   if (submiss.hair == 'other') {
      //     rank = rank + 0;
      //   } else if (submiss.hair == 'gray') {
      //     rank = rank + 4;
      //   } else if (submiss.hair == 'blonde') {
      //     rank = rank + 7;
      //   } else if (submiss.hair == 'red') {
      //     rank = rank + 10;
      //   } else if (submiss.hair == 'brown') {
      //     rank = rank + 14;
      //   } else {
      //     rank = rank + 17;
      //   };
      //   var rank7 = rank - rank6-rank5-rank4-rank3-rank2-rank1;
      //   console.log('Hárlitur: ' + rank7 + ' stig');

      //   if (submiss.eyes == 'blue') {
      //     rank = rank + 0;
      //   } else if (submiss.eyes = 'grayblue') {
      //     rank = rank + 2;
      //   } else if (submiss.eyes = 'green') {
      //     rank = rank + 6;
      //   } else if (submiss.eyes = 'lightbrown') {
      //     rank = rank + 9;
      //   } else if (submiss.eyes = 'brown') {
      //     rank = rank + 11;
      //   } else {
      //     rank = rank + 14;
      //   };
      //   var rank8 = rank - rank7-rank6-rank5-rank4-rank3-rank2-rank1;
      //   console.log('Augnlitur: ' + rank8 + ' stig');

      //   console.log(submiss.name + ' Samtals ' + rank + ' points');
      // }


      function removeSubmission(submiss) {
        vm.submissions.$remove(submiss);
      }





    }

})();