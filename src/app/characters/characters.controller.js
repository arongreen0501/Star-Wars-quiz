(function() {

    angular
        .module("app.characters")
        .controller("characterController", characterController);

        characterController.$inject = ['DataService'];

        function characterController(DataService) {
            var vm = this;

            vm.data = DataService.characterData;
            vm.calculateCharacterScore = calculateCharacterScore;




        function calculateCharacterScore(character) {
          var rank = 0;

        if (character.name.length <= 5) {
          rank = rank + 3;
        } else if (character.name.length >=6 && character.name.length <=10) {
          rank = rank + 5;
        } else if (character.name.length >=11 && character.name.length <=15) {
          rank = rank + 6;
        } else if (character.name.length >=16 && character.name.length <=20) {
          rank = rank + 7;
        } else if (character.name.length >=21 && character.name.length <=25) {
          rank = rank + 9;
        } else {
          rank = rank+ 10;
        };
        console.log(rank + ' eftir lengd nafns');

        if (character.height <= 149) {
          rank = rank + 1;
        } else if (character.height >=150 && character.height <=159) {
          rank = rank + 5;
        } else if (character.height >=160 && character.height <=169) {
          rank = rank + 8;
        } else if (character.height >=170 && character.height<=179) {
          rank = rank + 12;
        } else if (character.height >=180 && character.height <=189) {
          rank = rank + 18;
        } else if (character.height >=190 && character.height <=199) {
          rank = rank + 22;
        } else {
          rank = rank + 27;
        };
        console.log(rank + ' eftir hæð');

        if (character.weight <= 40) {
          rank = rank + 2;
        } else if (character.weight >=41 && character.weight <=50) {
          rank = rank + 4;
        } else if (character.weight >=51 && character.weight <=60) {
          rank = rank + 6;
        } else if (character.weight >=61 && character.weight <=70) {
          rank = rank + 8;
        } else if (character.weight >=71 && character.weight <=80) {
          rank = rank + 10;
        } else if (character.weight >=81 && character.weight <=90) {
          rank = rank + 12;
        } else if (character.weight >=91 && character.weight <=100) {
          rank = rank + 14;
        } else if (character.weight >=101 && character.weight <=110) {
          rank = rank + 16;
        } else if (character.weight >=111 && character.weight <=120) {
          rank = rank + 18;
        } else {
          rank = rank + 22;
        };
        console.log(rank + ' eftir þyngd');

        // if (character.residence == 'reykjavik') {
        //   rank = rank + 2;
        // } else if (character.residence == 'sudvestur') {
        //   rank = rank + 5;
        // } else if (character.residence == 'sudur') {
        //   rank = rank + 8;
        // } else if (character.gender == 'nordvestur') {
        //   rank = rank + 10;
        // } else {
        //   rank = rank + 13;
        // };
        // console.log(rank + 'eftir kjördæmi');

        if (character.gender == 'male') {
          rank = rank + 0;
        } else if (character.gender == 'female') {
          rank = rank + 5;
        } else {
          rank = rank + 10;
        };
        console.log(rank + ' eftir kyn');

        if (character.drive == 'bilprof') {
          rank = rank + 10;
        } else {
          rank = rank + 0;
        };
        console.log(rank + ' eftir bílpróf');

        if (character.hair_color == 'other') {
          rank = rank + 0;
        } else if (character.hair_color == 'gray') {
          rank = rank + 4;
        } else if (character.hair_color == 'blonde') {
          rank = rank + 7;
        } else if (character.hair_color == 'red') {
          rank = rank + 10;
        } else if (character.hair_color == 'brown') {
          rank = rank + 14;
        } else {
          rank = rank + 17;
        };
        console.log(rank + ' eftir hár');

        if (character.eye_color == 'blue') {
          rank = rank + 0;
        } else if (character.eye_color = 'grayblue') {
          rank = rank + 2;
        } else if (character.eye_color = 'green') {
          rank = rank + 6;
        } else if (character.eye_color = 'lightbrown') {
          rank = rank + 9;
        } else if (character.eye_color = 'brown') {
          rank = rank + 11;
        } else {
          rank = rank + 14;
        };

        console.log(character.name + ' ' + rank + ' points');
        // vm.characterions.$remove(character);
      };




        }

})();