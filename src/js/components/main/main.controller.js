(function() {

  'use strict';

  angular
    .module('jamesCoffeeApp.components.main', [])
    .controller('mainController', mainController);

  mainController.$inject = ['$scope'];

  function mainController($scope) {
    /*jshint validthis: true */
    $(window).load(function() {
      console.log('bippety boppety boo');
      Materialize.updateTextFields();
      $('.button-collapse').sideNav({
          menuWidth: 300,
          edge: 'left',
          closeOnClick: true,
          draggable: false
        }
      );
    });
  }

})();
