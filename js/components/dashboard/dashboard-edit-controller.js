angular.module('sgDashboard')
	.controller('DashboardEditCtrl', ['$scope',
		function($scope){

		$scope.product = {};

		$scope.addProduct = function(){
			console.log($scope.product);
			/*ProductService.addProduct(product)
				.then(function(result){
					alert("Success !! Product added");
				}, function(err){
					alert(err);
				});*/
		};



	}]);
