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



    //Time out til að geta prentað út nafn á nýjum user
    $timeout(function() {

         // Preloader
            $(".results").delay(500).fadeIn(100);
            $('#preloader').hide().fadeIn(700);
            $('#status').fadeIn();
            $('#status').delay(7000).fadeOut();
            $('#preloader').delay(7000).fadeOut('slow');
            $('body').delay(350).css({'overflow':'visible'});


        var record = ref.child(key);

        //Sækir user í Firebase by ID

        return record.once('value', function(snapshot) {
            var userData = snapshot.val();

                vm.userData = snapshot.val();
                vm.totalScore = vm.userData.rank;

                var rank = 0;

                //Reiknar Userinn

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
                  rank = rank + 50;
                };

                if (userData.residence == 'sudur') {
                  rank = rank + 6;
                } else if (userData.residence == 'nordvestur') {
                  rank = rank + 12;
                } else if (userData.residence == 'sudvestur') {
                  rank = rank + 18;
                } else if (userData.residence == 'reykjavik') {
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

                if (userData.hair == 'red') {
                  rank = rank + 7;
                } else if (userData.hair == 'brown') {
                  rank = rank + 9;
                } else if (userData.hair == 'blonde') {
                  rank = rank + 14;
                } else if (userData.hair == 'other') {
                  rank = rank + 18;
                } else if (userData.hair == 'gray') {
                  rank = rank + 21;
                } else {
                  rank = rank + 26;
                };

                if (userData.eyes == 'blue') {
                  rank = rank + 7;
                } else if (userData.eyes == 'green') {
                  rank = rank + 9;
                } else if (userData.eyes == 'other') {
                  rank = rank + 15;
                } else if (userData.eyes == 'grayblue') {
                  rank = rank + 22;
                } else if (userData.eyes == 'brown') {
                  rank = rank + 30;
                } else {
                  rank = rank + 37;
                };

                vm.rank = rank;

                var matchScore = rank;

                //Reiknar characters á móti

               var charactersArray=[{name:"Luke Skywalker",rank:150},{name:"C-3PO",rank:129},{name:"R2-D2",rank:112},{name:"Darth Vader",rank:209},{name:"Princess Leia",rank:129},{name:"Owen Lars",rank:142},{name:"Beru Whitesun Lars",rank:115},{name:"R5-D4",rank:112},{name:"Biggs Darklighter",rank:207},{name:"Obi-Wan Kenobi",rank:177},{name:"Anakin Skywalker",rank:172},{name:"Wilhuff Tarkin",rank:140},{name:"Chewbacca",rank:177},{name:"Han Solo",rank:175},{name:"Greedo",rank:146},{name:"Jabba the Hutt",rank:179},{name:"Wedge Antilles",rank:175},{name:"Jek Tono Porkins",rank:171},{name:"Yoda",rank:123},{name:"Sheev Palpatine",rank:161},{name:"Boba Fett",rank:192},{name:"IG-88",rank:188},{name:"Bossk",rank:178},{name:"Lando Calrissian",rank:185},{name:"Ackbar",rank:169},{name:"Mon Mothma",rank:84},{name:"Arvel Crynyd",rank:161},{name:"Wicket Wystri Warrick",rank:127},{name:"Nien Nunb",rank:155},{name:"Qui-Gon Jinn",rank:164},{name:"Nute Gunray",rank:163},{name:"Finis Valorum",rank:133},{name:"Jar Jar Binks",rank:176},{name:"Roos Tarpals",rank:190},{name:"Rugor Nass",rank:207},{name:"Ric Olie",rank:157},{name:"Watto",rank:113},{name:"Sebulba",rank:115},{name:"Quarsh Panaka",rank:184},{name:"Shmi Skywalker",rank:140},{name:"Darth Maul",rank:153},{name:"Bib Fortuna",rank:184},{name:"Ayla Secura",rank:138},{name:"Ratts Tyerel",rank:119},{name:"Gasgano",rank:126},{name:"Mace Windu",rank:160},{name:"Ki-Adi-Mundi",rank:162},{name:"Eeth Koth",rank:146},{name:"Adi Gallia",rank:116},{name:"Saesee Tiin",rank:161},{name:"Yarael Poof",rank:158},{name:"Mas Amedda",rank:156},{name:"Gregar Typho",rank:201},{name:"Corde",rank:107},{name:"Cliegg Lars",rank:140},{name:"Poggle the Lesser",rank:163},{name:"Barriss Offee",rank:110},{name:"Dorme",rank:108},{name:"Count Dooku",rank:184},{name:"Bail Prestor Organa",rank:197},{name:"Jango Fett",rank:169},{name:"Zam Wesell",rank:111},{name:"Taun We",rank:149},{name:"Jocasta Nu",rank:108},{name:"R4-P17",rank:81},{name:"Shaak Ti",rank:137},{name:"Grievous",rank:202},{name:"Raymus Antilles",rank:168},{name:"Sly Moore",rank:87},{name:"Tion Medon",rank:180},{name:"Finn",rank:189},{name:"Rey",rank:142},{name:"Poe Dameron",rank:164},{name:"BB-8",rank:108},{name:"Captain Phasma",rank:143},{name:"Padme Amidala",rank:133}];

               //Skilar þeim 5 karakterum sem eru líkastir þer

                function closestTo(a,b) {
                  if (Math.abs(a.rank - matchScore) > Math.abs(b.rank - matchScore)) return 1;
                  if (Math.abs(a.rank - matchScore) < Math.abs(b.rank - matchScore)) return -1;
                  return 0;
                }


                var closest5 = charactersArray.sort(closestTo).slice(0,5);

                vm.closest5 = closest5;
                // console.log(closest5);


            // console.log(userData)
        }), function(error) {
            console.log('Error:' +error);
        };

        // console.log(ref.child(user.uid));
    });


  }

})();