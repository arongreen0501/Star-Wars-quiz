(function(){
  'use strict';

  angular
    .module('app.results')
    .controller('ResultsController', ResultsController);


  ResultsController.$inject = ['CalculateService', '$firebaseArray', '$routeParams', '$timeout'];

  function ResultsController(CalculateService, $firebaseArray, $routeParams, $timeout) {
    var vm = this;
    var ref = new Firebase('https://skywalker-quiz.firebaseio.com/quizSubmission');
    vm.userRef = $firebaseArray(ref);
    var key = $routeParams.id;


    $timeout(function() {
        var record = ref.child(key);


        return record.once('value', function(snapshot) {
            var userData = snapshot.val();

                vm.userData = snapshot.val();
                vm.totalScore = vm.userData.rank;

                // vm.rank = vm.userData;

                var rank = 0;

                if (userData.name.length <= 5) {
                  rank = rank + 3;
                } else if (userData.name.length >=6 && userData.name.length <=10) {
                  rank = rank + 5;
                } else if (userData.name.length >=11 && userData.name.length <=15) {
                  rank = rank + 6;
                } else if (userData.name.length >=16 && userData.name.length <=20) {
                  rank = rank + 7;
                } else if (userData.name.length >=21 && userData.name.length <=25) {
                  rank = rank + 9;
                } else {
                  rank = rank+ 10;
                };
                // console.log(rank + ' eftir lengd nafns');

                if (userData.height <= 149) {
                  rank = rank + 1;
                } else if (userData.height >=150 && userData.height <=159) {
                  rank = rank + 3;
                } else if (userData.height >=160 && userData.height <=169) {
                  rank = rank + 5;
                } else if (userData.height >=170 && userData.height<=179) {
                  rank = rank + 8;
                } else if (userData.height >=180 && userData.height <=189) {
                  rank = rank + 10;
                } else if (userData.height >=190 && userData.height <=199) {
                  rank = rank + 12;
                } else {
                  rank = rank + 15;
                };
                // console.log(rank + ' eftir hæð');

                if (userData.weight <= 40) {
                  rank = rank + 2;
                } else if (userData.weight >=41 && userData.weight <=50) {
                  rank = rank + 4;
                } else if (userData.weight >=51 && userData.weight <=60) {
                  rank = rank + 5;
                } else if (userData.weight >=61 && userData.weight <=70) {
                  rank = rank + 6;
                } else if (userData.weight >=71 && userData.weight <=80) {
                  rank = rank + 8;
                } else if (userData.weight >=81 && userData.weight <=90) {
                  rank = rank + 9;
                } else if (userData.weight >=91 && userData.weight <=100) {
                  rank = rank + 10;
                } else if (userData.weight >=101 && userData.weight <=110) {
                  rank = rank + 11;
                } else if (userData.weight >=111 && userData.weight <=120) {
                  rank = rank + 12;
                } else {
                  rank = rank + 15;
                };
                // console.log(rank + ' eftir þyngd');

                if (userData.residence == 'sudur') {
                  rank = rank + 2;
                } else if (userData.residence == 'sudvestur') {
                  rank = rank + 5;
                } else if (userData.residence == 'reykjavik') {
                  rank = rank + 8;
                } else if (userData.residence == 'nordvestur') {
                  rank = rank + 10;
                } else {
                  rank = rank + 13;
                };
                // console.log(rank + 'eftir kjördæmi');

                if (userData.gender == 'male') {
                  rank = rank + 0;
                } else if (userData.gender == 'other') {
                  rank = rank + 3;
                } else {
                  rank = rank + 6;
                };
                // console.log(rank + ' eftir kyn');

                if (userData.drive == 'bilprof') {
                  rank = rank + 7;
                } else {
                  rank = rank + 0;
                };
                // console.log(rank + ' eftir bílpróf');

                if (userData.hair == 'other') {
                  rank = rank + 0;
                } else if (userData.hair == 'gray') {
                  rank = rank + 2;
                } else if (userData.hair == 'blonde') {
                  rank = rank + 5;
                } else if (userData.hair == 'other') {
                  rank = rank + 7;
                } else if (userData.hair == 'brown') {
                  rank = rank + 9;
                } else {
                  rank = rank + 12;
                };
                // console.log(rank + ' eftir hár');

                if (userData.eyes == 'blue') {
                  rank = rank + 0;
                } else if (userData.eyes = 'grayblue') {
                  rank = rank + 1;
                } else if (userData.eyes = 'green') {
                  rank = rank + 3;
                } else if (userData.eyes = 'other') {
                  rank = rank + 6;
                } else if (userData.eyes = 'brown') {
                  rank = rank + 7;
                } else {
                  rank = rank + 9;
                };

                console.log(userData.name + ' ' + rank + ' points');

                vm.rank = rank;

                var matchScore = rank;
                var charactersArray=[{name:"Luke Skywalker",rank:42},{name:"C-3PO",rank:28},{name:"R2-D2",rank:24},{name:"Darth Vader",rank:52},{name:"Princess Leia",rank:50},{name:"Owen Lars",rank:42},{name:"Beru Whitesun Lars",rank:43},{name:"R5-D4",rank:24},{name:"Biggs Darklighter",rank:60},{name:"Obi-Wan Kenobi",rank:57},{name:"Anakin Skywalker",rank:46},{name:"Wilhuff Tarkin",rank:39},{name:"Chewbacca",rank:56},{name:"Han Solo",rank:54},{name:"Greedo",rank:33},{name:"Jabba the Hutt",rank:49},{name:"Wedge Antilles",rank:55},{name:"Jek Tono Porkins",rank:49},{name:"Yoda",rank:23},{name:"Sheev Palpatine",rank:33},{name:"Boba Fett",rank:57},{name:"IG-88",rank:51},{name:"Bossk",rank:39},{name:"Lando Calrissian",rank:54},{name:"Lobot",rank:24},{name:"Ackbar",rank:38},{name:"Mon Mothma",rank:37},{name:"Crynyd",rank:49},{name:"Wicket Systri Warrick",rank:33},{name:"Nien Nunb",rank:35},{name:"Qui-Gon Jinn",rank:51},{name:"Nute Gunray",rank:44},{name:"Finis Valorum",rank:35},{name:"Jar Jar Binks",rank:41},{name:"Roos Tarpals",rank:47},{name:"Rugor Nass",rank:52},{name:"Ric Olié",rank:48},{name:"Watto",rank:31},{name:"Sebulba",rank:27},{name:"Quarsh Panaka",rank:52},{name:"Shmi Skywalker",rank:50},{name:"Darth Maul",rank:39},{name:"Bib Fortuna",rank:43},{name:"Ayla Secura",rank:42},{name:"Ratts Tyerel",rank:28},{name:"Dud Bolt",rank:24},{name:"Gasgano",rank:28},{name:"Ben Quadinaros",rank:36},{name:"Mace Windu",rank:41},{name:"Ki-Adi-Mundi",rank:40},{name:"Kit Fisto",rank:35},{name:"Eeth Koth",rank:42},{name:"Adi Gallia",rank:33},{name:"Saesee Tiin",rank:36},{name:"Yarael Poof",rank:34},{name:"Plo Koon",rank:50},{name:"Mas Amedda",rank:33},{name:"Gregar Typho",rank:59},{name:"Cordé",rank:41},{name:"Cliegg Lars",rank:42},{name:"Poggle the Lesser",rank:31},{name:"Luminara Unduli",rank:45},{name:"Barriss Offee",rank:41},{name:"Dormé",rank:42},{name:"Count Dooku",rank:44},{name:"Bail Prestor Organa",rank:55},{name:"Jango Fett",rank:47},{name:"Zam Wesell",rank:36},{name:"Dexter Jettster",rank:32},{name:"Lama Su",rank:44},{name:"Taun We",rank:47},{name:"Jocasta Nu",rank:32},{name:"R4-P17",rank:31},{name:"Wat Tambor",rank:40},{name:"San Hill",rank:37},{name:"Shaak Ti",rank:44},{name:"Grievous",rank:64},{name:"Tarfful",rank:52},{name:"Raymus Antilles",rank:48},{name:"Sly Moore",rank:25},{name:"Tion Medon",rank:48},{name:"Finn",rank:56},{name:"Rey",rank:56},{name:"Poe Dameron",rank:53},{name:"BB-8",rank:24},{name:"Captain Phasma",rank:46},{name:"Padmé Amidala",rank:52}];

                function closestTo(a,b) {
                  if (Math.abs(a.rank - matchScore) > Math.abs(b.rank - matchScore)) return 1;
                  if (Math.abs(a.rank - matchScore) < Math.abs(b.rank - matchScore)) return -1;
                  return 0;
                }


                var closest5 = charactersArray.sort(closestTo).slice(0,5);

                vm.closest5 = closest5;
                console.log(closest5);


            console.log(userData)
        }), function(error) {
            console.log('Error:' +error);
        };

        // console.log(ref.child(user.uid));
    });




    vm.model = {
        message: $routeParams.id + 'Þitt'
    }


  }

})();