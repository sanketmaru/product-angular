/**

1.!!!!!!!Build single page HTML5 web application .Preferably on Angular JS
2.!!!!!!!Backend should be on latest node JS.
3.!!!!!!!Home page should have a search box where user can search for product names.
User should be shown an Auto Suggestion based on what he types in the search box.
4.!!!!!!!When the user hits enter show the correct product details below. User should be
able to edit the product name and selling price only
5.!!!!!!!Product details will be ID, product name, cost per unit, selling price per unit , no of
units available.
6.!!!!!!!User will be able to edit product name, and selling price only rest of the fields are un
editable. On Hitting enter in the input field data should be saved
7.!!!!!!!Validation : Product name should be alpha numeric character and selling price is
numeric and cannot be less than cost price.
8.!!!!!!!There should be another tab on the home screen called “EDIT”. User should be able
to add new products from this screen.
9.!!!!!!!You can use mongodb .
**/


'use strict';
angular.module('prDashboard', [
	'ui.router'
	]).config(['$urlRouterProvider','$stateProvider',
  function($urlRouterProvider, $stateProvider) {

    // For any unmatched url, redirect to /state1
	  $urlRouterProvider.otherwise("/home");
	  //
	  // Now set up the states
	  $stateProvider
	    .state('home', {
	      url: "/home",
	      templateUrl: "templates/home.html"
	    })
	    .state('edit', {
	      url: "/edit",
	      templateUrl: "templates/edit.html",
	      controller: function($scope) {
	        $scope.items = ["A", "List", "Of", "Items"];
	      }
	    });
  }
]);
