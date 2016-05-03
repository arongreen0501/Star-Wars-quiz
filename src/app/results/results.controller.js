(function(){
  'use strict';

  angular
    .module('app.results')
    .controller('ResultsController', ResultsController);

  ResultsController.$inject = ['$firebaseArray'];

  function ResultsController($firebaseArray) {
    var vm = this;
    var firebaseReference = new Firebase('https://ang-course.firebaseio.com');

  }

})();