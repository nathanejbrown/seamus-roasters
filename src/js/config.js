(function() {

  'use strict';

  angular
    .module('jamesCoffeeApp.config', [])
    .config(appConfig);

  function appConfig($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: './src/js/components/main/main.view.html',
      controller: 'mainController',
      controllerAs: 'mainCtrl',
      css: 'src/css/main.css'
    });
  }
})();
