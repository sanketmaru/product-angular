/**
7.!!!!!!!Validation : Product name should be alpha numeric character and selling price is
numeric and cannot be less than cost price.
**/

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
