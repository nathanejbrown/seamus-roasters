(function() {

  'use strict';

  angular
    .module('jamesCoffeeApp.components.main', [])
    .controller('mainController', mainController);

  mainController.$inject = ['$scope', '$mdSidenav', '$http'];

  function mainController($scope, $mdSidenav, $http) {
    /*jshint validthis: true */

    $scope.openLeftMenu = function() {
      $mdSidenav('left').toggle();
    };

    $scope.firstName = '';
    $scope.lastName = '';
    $scope.email = '';
    $scope.password = '';

    $scope.createNewUser = function(firstName, lastName, email, password) {
      console.log('something');
      var userObject = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
      }
      console.log(userObject);
      $http({
        url: 'https://quiet-sea-23927.herokuapp.com/newUser',
        method: 'POST',
        data: userObject
      })
    }
  }

})();
