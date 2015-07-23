angular.module('sgDashboard')
	.controller('DashboardEditCtrl', ['$scope','ProductService',
		function($scope, ProductService){

		$scope.product = {};

		$scope.addProduct = function(){

			var product = $scope.product;
			var sellingPrice = parseInt(product.sellingPrice, 10);
			var costPrice = parseInt(product.costPrice, 10);

			if(sellingPrice < costPrice){
				alert("Selling Price is less than Cost Price");
				return;
			}

			ProductService.add($scope.product)
				.then(function(result){
					alert("Success !! Product added");
					$scope.product = "";
				}, function(err){
					alert(err);
				});
		};



	}]);
