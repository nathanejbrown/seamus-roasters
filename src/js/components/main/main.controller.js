(function() {

  'use strict';

  angular
    .module('jamesCoffeeApp.components.main', [])
    .controller('mainController', mainController);

  mainController.$inject = ['$scope', '$mdSidenav'];

  function mainController($scope, $mdSidenav) {
    /*jshint validthis: true */

    $scope.openLeftMenu = function() {
      $mdSidenav('left').toggle();
    };
  }

})();
