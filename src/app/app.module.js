(function() {
  'use strict';

  angular
  .module('app', [
    // Angular modules.
    'ngRoute',

    // Third-party modules.
    'firebase',

    // Custom modules.
    'app.intro',
    'app.quiz',
    'app.characters'

    ]);

})();