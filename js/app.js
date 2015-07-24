'use strict';
angular.module('sgDashboard', [
	'ui.router',
	'sgProduct',
	'sgMessage',
	]).config(['$urlRouterProvider','$stateProvider',
  function($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise("/home");

	  $stateProvider
	    .state('home', {
	      url: "/home",
	      templateUrl: "templates/home.html",
	      controller: "DashboardCtrl"
	    })
	    .state('edit', {
	      url: "/edit",
	      templateUrl: "templates/edit.html",
	      controller: "DashboardEditCtrl"
	    });
  }
]);
