angular.module('sgDashboard')
	.controller('DashboardEditCtrl', ['$scope','ProductService','UI_MESSAGE',
		function($scope, ProductService, Message){

		$scope.initializeProduct = function(){
			$scope.product = {};
		};

		$scope.addProduct = function(){

			var product = $scope.product;
			var sellingPrice = parseInt(product.sellingPrice, 10);
			var costPrice = parseInt(product.costPrice, 10);

			if(sellingPrice < costPrice){
				alert(Message.SELLING_PRICE_ERROR);
				return;
			}

			ProductService.add($scope.product)
				.then(function(result){
					alert(Message.ADD_SUCCESS);
					$scope.initializeProduct();
				}, function(err){
					alert(err);
				});
		};

		$scope.initializeProduct();

	}]);
