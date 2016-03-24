define([
	'angular', 
	'angularAMD', 
	'message-constant',
	'ngload',
	'angular-ui-router', 
	'product-module',	
	'dashboard-module'
	], function (angular, angularAMD, MessageConstant) {
		var app = angular.module('sg', ['ui.router','sgDashboard', 'sgProduct']);
		app.config(['$urlRouterProvider','$stateProvider',
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

		app.constant('UI_MESSAGE', MessageConstant);

		return angularAMD.bootstrap(app);

	});
