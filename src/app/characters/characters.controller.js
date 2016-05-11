(function() {

    angular
        .module("app.characters")
        .controller("characterController", characterController);

        characterController.$inject = ['DataService'];

        function characterController(DataService) {
            var vm = this;

            $('#status').delay(4000).fadeOut(); // will first fade out the loading animation
          $('#preloader').delay(4000).fadeOut('slow'); // will fade out the white DIV that covers the website.
          $('body').delay(350).css({'overflow':'visible'});

            vm.data = DataService.characterData;
            vm.calculateCharacterScore = calculateCharacterScore;



        function calculateCharacterScore(character) {
          var rank = 0;

                if (character.name.length <= 3) {
                  rank = rank + 10;
                } else if (character.name.length >=4 && character.name.length <=7) {
                  rank = rank + 14;
                } else if (character.name.length >=8 && character.name.length <=11) {
                  rank = rank + 18;
                } else if (character.name.length >=12 && character.name.length <=14) {
                  rank = rank + 22;
                } else if (character.name.length >=15 && character.name.length <=17) {
                  rank = rank + 28;
                } else if (character.name.length >=18 && character.name.length <=20) {
                  rank = rank + 32;
                } else if (character.name.length >=21 && character.name.length <=24) {
                  rank = rank + 36;
                } else if (character.name.length >=25 && character.name.length <=28) {
                  rank = rank + 41;
                } else {
                  rank = rank+ 50;
                };

                if (character.height <= 149) {
                  rank = rank + 11;
                } else if (character.height >=150 && character.height <=159) {
                  rank = rank + 15;
                } else if (character.height >=160 && character.height <=169) {
                  rank = rank + 19;
                } else if (character.height >=170 && character.height<=179) {
                  rank = rank + 26;
                } else if (character.height >=180 && character.height <=189) {
                  rank = rank + 37;
                } else if (character.height >=190 && character.height <=199) {
                  rank = rank + 40;
                } else {
                  rank = rank + 44;
                };

                if (character.weight <= 40) {
                  rank = rank + 7;
                } else if (character.weight >=41 && character.weight <=50) {
                  rank = rank + 12;
                } else if (character.weight >=51 && character.weight <=60) {
                  rank = rank + 15;
                } else if (character.weight >=61 && character.weight <=70) {
                  rank = rank + 19;
                } else if (character.weight >=71 && character.weight <=80) {
                  rank = rank + 24;
                } else if (character.weight >=81 && character.weight <=90) {
                  rank = rank + 29;
                } else if (character.weight >=91 && character.weight <=100) {
                  rank = rank + 34;
                } else if (character.weight >=101 && character.weight <=110) {
                  rank = rank + 39;
                } else if (character.weight >=111 && character.weight <=120) {
                  rank = rank + 42;
                } else {
                  rank = rank + 46;
                };

                if (character.residence == 'sudur') {
                  rank = rank + 6;
                } else if (character.residence == 'sudvestur') {
                  rank = rank + 12;
                } else if (character.residence == 'reykjavik') {
                  rank = rank + 18;
                } else if (character.residence == 'nordvestur') {
                  rank = rank + 24;
                } else {
                  rank = rank + 30;
                };

                if (character.gender == 'female') {
                  rank = rank + 0;
                } else if (character.gender == 'other') {
                  rank = rank + 8;
                } else {
                  rank = rank + 16;
                };

                if (character.drive == 'bilprof') {
                  rank = rank + 17;
                } else {
                  rank = rank + 0;
                };

                if (character.hair == 'gray') {
                  rank = rank + 7;
                } else if (character.hair == 'blonde') {
                  rank = rank + 9;
                } else if (character.hair == 'other') {
                  rank = rank + 12;
                } else if (character.hair == 'red') {
                  rank = rank + 16;
                } else if (character.hair == 'brown') {
                  rank = rank + 20;
                } else {
                  rank = rank + 23;
                };

                if (character.eyes == 'blue') {
                  rank = rank + 7;
                } else if (character.eyes == 'grayblue') {
                  rank = rank + 9;
                } else if (character.eyes == 'green') {
                  rank = rank + 15;
                } else if (character.eyes == 'other') {
                  rank = rank + 22;
                } else if (character.eyes == 'brown') {
                  rank = rank + 30;
                } else {
                  rank = rank + 37;
                };

                console.log(character.name + ' ' + rank + ' points');
      };




        };

})();