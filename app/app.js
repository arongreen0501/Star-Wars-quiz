require('angular');
// var MainController = require('./controllers/MainController')

// var app = angular.module('app', [])
// app.controller('MainController', ['$scope', MainController])


// script.js

    // create the module and name it app
        // also include ngRoute for all our routing needs
    var app = angular.module('app', [require('angular-route')]);

    // configure our routes
    app.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : './pages/intro.html',
                controller  : 'quizController'
            })

            // route for name
            .when('/name', {
                templateUrl : './pages/name.html',
                controller  : 'quizController'
            })

            // route for gender
            .when('/gender', {
                templateUrl : './pages/gender.html',
                controller  : 'quizController'
            });
    });

    // create the controller and inject Angular's $scope
    app.controller('quizController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Hvaða Star Wars persóna ert þú?';
    });

    var MainController = require('./controllers/MainController');
    app.controller('MainController', ['$scope', MainController])

    var quizController = require('./controllers/quizController');
    app.controller('MainController', ['$scope', quizController])




    function formController($scope, $http) {

      // create a blank object to hold our form information
      // $scope will allow this to pass between controller and view
      $scope.formData = {};


  }