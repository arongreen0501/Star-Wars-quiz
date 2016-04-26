require('angular');
// var MainController = require('./controllers/MainController')


    // create the module and name it app
        // also include ngRoute for all our routing needs
    var app = angular.module('app', [require('angular-route')]);

    var MainController = require('./controllers/MainController');
    app.controller('MainController', ['$scope', MainController])

    var quizController = require('./controllers/quizController');
    app.controller('MainController', ['$scope', quizController])

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
            })

            // route for gender
            .when('/piss', {
                templateUrl : './pages/piss.html',
                controller  : 'quizController'
            });
    });