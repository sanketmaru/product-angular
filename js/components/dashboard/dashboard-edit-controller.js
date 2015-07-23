angular.module('sgDashboard')
	.controller('DashboardEditCtrl', ['$scope',
		function($scope){

		$scope.addProduct = function(){
			$scope.product = "";
			ProductService.addProduct(product)
				.then(function(result){
					alert("Success !! Product added");
				}, function(err){
					alert(err);
				});
		};



	}]);
