angular.module('sgDashboard')
	.controller('DashboardCtrl', ['$scope', 'ProductService',
		function($scope, ProductService){

		$scope.readOnly = "true";

		$scope.currentTab = 'home';

    $scope.onClickTab = function (tabName) {
        $scope.currentTab = tabName;
    };
    
    $scope.isActiveTab = function(tabName) {
        return tabName == $scope.currentTab;
    };

    $scope.getProducts = function(){
    	ProductService.get()
    		.then(function(res){
    			console.log(res);
    		})
    		.catch(function(err){
    			console.log(err);
    		})
    }

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

		$scope.getProducts();

	}]);
