(function(){
  'use strict';

  angular
    .module('app.results')
    .controller('ResultsController', ResultsController);

  ResultsController.$inject = ['$firebaseArray', '$routeParams', '$timeout'];

  function ResultsController($firebaseArray, $routeParams, $timeout) {
    var vm = this;
    var ref = new Firebase('https://skywalker-quiz.firebaseio.com/quizSubmission');
    vm.userRef = $firebaseArray(ref);
    var key = $routeParams.id;




    $timeout(function() {
        var record = ref.child(key);

        //Get record
        // return record.once('name').then(function(snapshot) {
        //     console.log(snapshot.val());
        // }, function(error) {
        //     console.log('Error: '+error);
        // });


        return record.once('value', function(snapshot) {
            var userData = snapshot.val();

                vm.userData = snapshot.val();

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