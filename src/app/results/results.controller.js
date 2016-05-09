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
                console.log(rank + ' eftir lengd nafns');

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
                console.log(rank + ' eftir hæð');

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
                console.log(rank + ' eftir þyngd');

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
                console.log(rank + 'eftir kjördæmi');

                if (userData.gender == 'male') {
                  rank = rank + 0;
                } else if (userData.gender == 'other') {
                  rank = rank + 3;
                } else {
                  rank = rank + 6;
                };
                console.log(rank + ' eftir kyn');

                if (userData.drive == 'bilprof') {
                  rank = rank + 7;
                } else {
                  rank = rank + 0;
                };
                console.log(rank + ' eftir bílpróf');

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
                console.log(rank + ' eftir hár');

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
                var charactersArray=[{name:"Luke Skywalker",rank:57},{name:"C-3PO",rank:50},{name:"R2-D2",rank:35},{name:"Darth Vader",rank:84},{name:"Leia Organa",rank:49},{name:"Owen Lars",rank:54},{name:"Beru Whitesun Lars",rank:49},{name:"R5-D4",rank:35},{name:"Biggs Darklighter",rank:66},{name:"Obi-Wan Kenobi",rank:63},{name:"Anakin Skywalker",rank:66},{name:"Wilhuff Tarkin",rank:51},{name:"Chewbacca",rank:79},{name:"Han Solo",rank:62},{name:"Greedo",rank:46},{name:"Jabba Desilijic Tiure",rank:72},{name:"Wedge Antilles",rank:57},{name:"Jek Tono Porkins",rank:70},{name:"Yoda",rank:25},{name:"Sheev Palpatine",rank:47},{name:"Boba Fett",rank:62},{name:"IG-88",rank:81},{name:"Bossk",rank:62},{name:"Lando Calrissian",rank:58},{name:"Lobot",rank:44},{name:"Ackbar",rank:54},{name:"Mon Mothma",rank:42},{name:"Crynyd",rank:52},{name:"Wicket Systri Warrick",rank:31},{name:"Nien Nunb",rank:50},{name:"Qui-Gon Jinn",rank:69},{name:"Nute Gunray",rank:59},{name:"Finis Valorum",rank:47},{name:"Jar Jar Binks",rank:53},{name:"Ross Tarpals",rank:64},{name:"Rugor Nass",rank:73},{name:"Ric Olié",rank:64},{name:"Watto",rank:27},{name:"Sebulba",rank:27},{name:"Quarsh Panaka",rank:55},{name:"Shmi Skywalker",rank:46},{name:"Darth Maul",rank:56},{name:"Bib Fortuna",rank:57},{name:"Ayla Secura",rank:48},{name:"Ratts Tyerel",rank:28},{name:"Dud Bolt",rank:29},{name:"Gasgano",rank:27},{name:"Ben Quadinaros",rank:41},{name:"Mace Windu",rank:54},{name:"Ki-Adi-Mundi",rank:59},{name:"Kit Fisto",rank:58},{name:"Eeth Koth",rank:46},{name:"Adi Gallia",rank:51},{name:"Saesee Tiin",rank:55},{name:"Yarael Poof",rank:66},{name:"Plo Koon",rank:62},{name:"Mas Amedda",rank:62},{name:"Gregar Typho",rank:65},{name:"Cordé",rank:38},{name:"Cliegg Lars",rank:55},{name:"Poggle the Lesser",rank:54},{name:"Luminara Unduli",rank:48},{name:"Barriss Offee",rank:42},{name:"Dormé",rank:39},{name:"Dooku",rank:64},{name:"Bail Prestor Organa",rank:60},{name:"Jango Fett",rank:52},{name:"Zam Wesell",rank:53},{name:"Dexter Jettster",rank:63},{name:"Lama Su",rank:63},{name:"Taun We",rank:64},{name:"Jocasta Nu",rank:45},{name:"R4-P17",rank:32},{name:"Wat Tambor",rank:50},{name:"Sam Hill",rank:54},{name:"Shaak Ti",rank:47},{name:"Grievous",rank:83},{name:"Tarfful",rank:73},{name:"Raymus Antilles",rank:53},{name:"Sly Moore",rank:45},{name:"Tion Medon",rank:61},{name:"Finn",rank:56},{name:"Rey",rank:57},{name:"Poe Dameron",rank:57},{name:"BB-8",rank:35},{name:"Captain Phasma",rank:62},{name:"Padmé Amidala",rank:52}];

                function closestTo(a,b) {
                  if (Math.abs(a.rank - matchScore) > Math.abs(b.rank - matchScore)) return 1;
                  if (Math.abs(a.rank - matchScore) < Math.abs(b.rank - matchScore)) return -1;
                  return 0
                }

                var closest5 = charactersArray.sort(closestTo).slice(0,5);
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