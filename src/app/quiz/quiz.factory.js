// (function() {
//   angular
//     .module('app.quiz')
//     .factory('quizFactory', []);

//     factory = {};

//     factory.quizData = {};

//     return factory;


// })();


(function() {

    angular
        .module("app.quiz")
        .factory("DataService", DataService);

        function DataService() {
            var dataObj = {
                characterData: characterData
            };

            return dataObj;


        }



        var characterData = [

        {
          name: "Luke Skywalker",
          height: "172",
          mass: "77",
          hair_color: "blond",
          eye_color: "blue",
          gender: "male",
          homeworld: "http://swapi.co/api/planets/1/"
        },
        {
          "name": "C-3PO",
          "height": "167",
          "mass": "75",
          "hair_color": "n/a",
          "eye_color": "yellow",
          "gender": "n/a",
          "homeworld": "http://swapi.co/api/planets/1/",
          "vehicles": []
        },
        {
          "name": "R2-D2",
          "height": "96",
          "mass": "32",
          "hair_color": "n/a",
          "eye_color": "red",
          "gender": "n/a",
          "homeworld": "http://swapi.co/api/planets/8/",
          "vehicles": []
        },
        {
          "name": "Darth Vader",
          "height": "202",
          "mass": "136",
          "hair_color": "none",
          "eye_color": "yellow",
          "gender": "male",
          "homeworld": "http://swapi.co/api/planets/1/",
          "vehicles": []
        },
        {
          "name": "Leia Organa",
          "height": "150",
          "mass": "49",
          "hair_color": "brown",
          "eye_color": "brown",
          "gender": "female",
          "homeworld": "http://swapi.co/api/planets/2/",
          "vehicles": [
            "http://swapi.co/api/vehicles/30/"
          ]
        },
        {
          "name": "Owen Lars",
          "height": "178",
          "mass": "120",
          "hair_color": "brown, grey",
          "eye_color": "blue",
          "gender": "male",
          "homeworld": "http://swapi.co/api/planets/1/",
          "vehicles": []
        },
        {
          "name": "Beru Whitesun lars",
          "height": "165",
          "mass": "75",
          "hair_color": "brown",
          "eye_color": "blue",
          "gender": "female",
          "homeworld": "http://swapi.co/api/planets/1/",
          "vehicles": []
        },
        {
          "name": "R5-D4",
          "height": "97",
          "mass": "32",
          "hair_color": "n/a",
          "eye_color": "red",
          "gender": "n/a",
          "homeworld": "http://swapi.co/api/planets/1/",
          "vehicles": []
        },
        {
          "name": "Biggs Darklighter",
          "height": "183",
          "mass": "84",
          "hair_color": "black",
          "eye_color": "brown",
          "gender": "male",
          "homeworld": "http://swapi.co/api/planets/1/",
          "vehicles": []
        },
        {
          "name": "Obi-Wan Kenobi",
          "height": "182",
          "mass": "77",
          "hair_color": "auburn, white",
          "eye_color": "blue-gray",
          "gender": "male",
          "homeworld": "http://swapi.co/api/planets/20/",
          "vehicles": [
            "http://swapi.co/api/vehicles/38/"
          ]
        }


        ];


})();