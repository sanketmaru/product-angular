define([
  'angular', 
  'product-service', 
  'message-constant'], function (angular, ProductService, Message) {

	var dashboardEditController = function($scope, ProductService, Message){

		$scope.initializeProduct = function(){
			$scope.product = {};
		};

		$scope.addProduct = function(){

			if(!ProductService.validSellingPrice($scope.product)){
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

	};
		

	return ['$scope','ProductService','UI_MESSAGE', dashboardEditController];

});

