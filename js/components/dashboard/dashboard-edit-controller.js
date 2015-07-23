angular.module('sgDashboard')
	.controller('DashboardEditCtrl', ['$scope','ProductService',
		function($scope, ProductService){

		$scope.product = {};

		$scope.addProduct = function(){
			console.log($scope.product);
			ProductService.addProduct($scope.product)
				.then(function(result){
					alert("Success !! Product added");
				}, function(err){
					alert(err);
				});
		};



	}]);
