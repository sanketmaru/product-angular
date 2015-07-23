angular.module('sgDashboard')
	.controller('DashboardCtrl', ['$scope', 'ProductService',
		function($scope, ProductService){

		$scope.readOnly = "true";

		$scope.editProduct = function(){
			$scope.product = "";
			ProductService.editProduct(product)
				.then(function(result){
					console.log("Product Added");
					//alert("Success !! Product added");
				}, function(err){
					alert(err);
				});
		};

	}]);
