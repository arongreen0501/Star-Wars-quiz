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

         // makes sure the whole site is loaded
            $(".results").delay(500).fadeIn(100);
            $('#preloader').hide().fadeIn(700);
            $('#status').fadeIn();
            $('#status').delay(7000).fadeOut(); // will first fade out the loading animation
            $('#preloader').delay(7000).fadeOut('slow'); // will fade out the white DIV that covers the website.
            $('body').delay(350).css({'overflow':'visible'});


        var record = ref.child(key);


        return record.once('value', function(snapshot) {
            var userData = snapshot.val();

                vm.userData = snapshot.val();
                vm.totalScore = vm.userData.rank;

                var rank = 0;

                if (userData.name.length <= 3) {
                  rank = rank + 10;
                } else if (userData.name.length >=4 && userData.name.length <=7) {
                  rank = rank + 14;
                } else if (userData.name.length >=8 && userData.name.length <=11) {
                  rank = rank + 18;
                } else if (userData.name.length >=12 && userData.name.length <=14) {
                  rank = rank + 22;
                } else if (userData.name.length >=15 && userData.name.length <=17) {
                  rank = rank + 28;
                } else if (userData.name.length >=18 && userData.name.length <=20) {
                  rank = rank + 32;
                } else if (userData.name.length >=21 && userData.name.length <=24) {
                  rank = rank + 36;
                } else if (userData.name.length >=25 && userData.name.length <=28) {
                  rank = rank + 41;
                } else {
                  rank = rank+ 50;
                };

                if (userData.height <= 149) {
                  rank = rank + 11;
                } else if (userData.height >=150 && userData.height <=159) {
                  rank = rank + 15;
                } else if (userData.height >=160 && userData.height <=169) {
                  rank = rank + 19;
                } else if (userData.height >=170 && userData.height<=179) {
                  rank = rank + 26;
                } else if (userData.height >=180 && userData.height <=189) {
                  rank = rank + 37;
                } else if (userData.height >=190 && userData.height <=199) {
                  rank = rank + 40;
                } else {
                  rank = rank + 44;
                };

                if (userData.weight <= 40) {
                  rank = rank + 7;
                } else if (userData.weight >=41 && userData.weight <=50) {
                  rank = rank + 12;
                } else if (userData.weight >=51 && userData.weight <=60) {
                  rank = rank + 15;
                } else if (userData.weight >=61 && userData.weight <=70) {
                  rank = rank + 19;
                } else if (userData.weight >=71 && userData.weight <=80) {
                  rank = rank + 24;
                } else if (userData.weight >=81 && userData.weight <=90) {
                  rank = rank + 29;
                } else if (userData.weight >=91 && userData.weight <=100) {
                  rank = rank + 34;
                } else if (userData.weight >=101 && userData.weight <=110) {
                  rank = rank + 39;
                } else if (userData.weight >=111 && userData.weight <=120) {
                  rank = rank + 42;
                } else {
                  rank = rank + 46;
                };

                if (userData.residence == 'sudur') {
                  rank = rank + 6;
                } else if (userData.residence == 'sudvestur') {
                  rank = rank + 12;
                } else if (userData.residence == 'reykjavik') {
                  rank = rank + 18;
                } else if (userData.residence == 'nordvestur') {
                  rank = rank + 24;
                } else {
                  rank = rank + 30;
                };

                if (userData.gender == 'female') {
                  rank = rank + 0;
                } else if (userData.gender == 'other') {
                  rank = rank + 8;
                } else {
                  rank = rank + 16;
                };

                if (userData.drive == 'bilprof') {
                  rank = rank + 17;
                } else {
                  rank = rank + 0;
                };

                if (userData.hair == 'gray') {
                  rank = rank + 7;
                } else if (userData.hair == 'blonde') {
                  rank = rank + 9;
                } else if (userData.hair == 'other') {
                  rank = rank + 12;
                } else if (userData.hair == 'red') {
                  rank = rank + 16;
                } else if (userData.hair == 'brown') {
                  rank = rank + 20;
                } else {
                  rank = rank + 23;
                };

                if (userData.eyes == 'blue') {
                  rank = rank + 7;
                } else if (userData.eyes == 'grayblue') {
                  rank = rank + 9;
                } else if (userData.eyes == 'green') {
                  rank = rank + 15;
                } else if (userData.eyes == 'other') {
                  rank = rank + 22;
                } else if (userData.eyes == 'brown') {
                  rank = rank + 30;
                } else {
                  rank = rank + 37;
                };

                // console.log(userData.name + ' ' + rank + ' points');

                vm.rank = rank;

                var matchScore = rank;
                var charactersArray=[{name:"Luke Skywalker",rank:144},{name:"C-3PO",rank:106},{name:"R2-D2",rank:93},{name:"Darth Vader",rank:193},{name:"Princess Leia",rank:133},{name:"Owen Lars",rank:155},{name:"Beru Whitesun Lars",rank:122},{name:"R5-D4",rank:93},{name:"Biggs Darklighter",rank:205},{name:"Obi-Wan Kenobi",rank:195},{name:"Anakin Skywalker",rank:162},{name:"Wilhuff Tarkin",rank:140},{name:"Chewbacca",rank:196},{name:"Han Solo",rank:185},{name:"Greedo",rank:138},{name:"Jabba the Hutt",rank:168},{name:"Wedge Antilles",rank:189},{name:"Jek Tono Porkins",rank:181},{name:"Yoda",rank:96},{name:"Sheev Palpatine",rank:130},{name:"Boba Fett",rank:190},{name:"IG-88",rank:180},{name:"Bossk",rank:172},{name:"Lando Calrissian",rank:187},{name:"Lobot",rank:115},{name:"Ackbar",rank:157},{name:"Mon Mothma",rank:86},{name:"Crynyd",rank:167},{name:"Wicket Systri Warrick",rank:129},{name:"Nien Nunb",rank:150},{name:"Qui-Gon Jinn",rank:178},{name:"Nute Gunray",rank:173},{name:"Finis Valorum",rank:124},{name:"Jar Jar Binks",rank:168},{name:"Roos Tarpals",rank:185},{name:"Rugor Nass",rank:201},{name:"Ric Olié",rank:167},{name:"Watto",rank:108},{name:"Sebulba",rank:116},{name:"Quarsh Panaka",rank:179},{name:"Shmi Skywalker",rank:135},{name:"Darth Maul",rank:153},{name:"Bib Fortuna",rank:172},{name:"Ayla Secura",rank:125},{name:"Ratts Tyerel",rank:115},{name:"Dud Bolt",rank:103},{name:"Gasgano",rank:115},{name:"Ben Quadinaros",rank:153},{name:"Mace Windu",rank:166},{name:"Ki-Adi-Mundi",rank:149},{name:"Kit Fisto",rank:155},{name:"Eeth Koth",rank:151},{name:"Adi Gallia",rank:97},{name:"Saesee Tiin",rank:155},{name:"Yarael Poof",rank:146},{name:"Plo Koon",rank:187},{name:"Mas Amedda",rank:148},{name:"Gregar Typho",rank:199},{name:"Cordé",rank:110},{name:"Cliegg Lars",rank:147},{name:"Poggle the Lesser",rank:138},{name:"Luminara Unduli",rank:120},{name:"Barriss Offee",rank:102},{name:"Dormé",rank:112},{name:"Count Dooku",rank:169},{name:"Bail Prestor Organa",rank:196},{name:"Jango Fett",rank:164},{name:"Zam Wesell",rank:93},{name:"Dexter Jettster",rank:154},{name:"Lama Su",rank:170},{name:"Taun We",rank:140},{name:"Jocasta Nu",rank:86},{name:"R4-P17",rank:90},{name:"Wat Tambor",rank:151},{name:"San Hill",rank:158},{name:"Shaak Ti",rank:130},{name:"Grievous",rank:233},{name:"Tarfful",rank:177},{name:"Raymus Antilles",rank:175},{name:"Sly Moore",rank:78},{name:"Tion Medon",rank:181},{name:"Finn",rank:191},{name:"Rey",rank:152},{name:"Poe Dameron",rank:178},{name:"BB-8",rank:89},{name:"Captain Phasma",rank:138},{name:"Padmé Amidala",rank:140}];

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