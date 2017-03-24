'use strict';

/**
 * @ngdoc overview
 * @name nodeAppApp
 * @description
 * # nodeAppApp
 *
 * Main module of the application.
 */
angular
  .module('nodeAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/dumps', {
        templateUrl: 'views/dumps.html',
        controller: 'DumpsCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
