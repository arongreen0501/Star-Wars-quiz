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

            // route for the about page
            .when('/name', {
                templateUrl : './pages/name.html',
                controller  : 'quizController1'
            })

            // route for the contact page
            .when('/gender', {
                templateUrl : './pages/gender.html',
                controller  : 'quizController2'
            });
    });

    // create the controller and inject Angular's $scope
    app.controller('quizController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Hvaða Star Wars persóna ert þú?';
    });

    app.controller('quizController1', function($scope) {
        $scope.message = 'Quiz 1 Page';
    });

    app.controller('quizController2', function($scope) {
        $scope.message = 'Quiz 2 Page';
    });

    var MainController = require('./controllers/MainController');
    app.controller('MainController', ['$scope', MainController])