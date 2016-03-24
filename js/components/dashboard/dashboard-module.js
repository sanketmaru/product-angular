define([
	'angular', 
	'dashboard-controller', 
	'dashboard-edit-controller'
	], function (angular, DashboardController, DashboardEditController){
		var dashboardModule = angular.module('sgDashboard', []);
		dashboardModule.controller('DashboardCtrl', DashboardController);
		dashboardModule.controller('DashboardEditCtrl', DashboardEditController);
		return dashboardModule;
	});

