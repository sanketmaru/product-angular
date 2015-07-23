angular.module('sgDashboard')
	.controller('DashboardCtrl', ['$scope', 'ProductService',
		function($scope, ProductService){

		$scope.currentTab = 'home';

		var ENTER_KEY_EVENT = 13;

    $scope.onClickTab = function (tabName) {
      $scope.currentTab = tabName;
    };

    $scope.isActiveTab = function(tabName) {
      return tabName === $scope.currentTab;
    };

    $scope.getProducts = function(){
    	ProductService.get()
    		.then(function(products){
    			$scope.products = products;
    		})
    		.catch(function(err){
    			alert(err || "Error while getting Products");
    		})
    };

    $scope.selectProduct = function(product){
    	$scope.searchText = "";
    	$scope.product = product;
    	$scope.readOnly = true;
    };

    $scope.editProduct = function(event){

    	if(event.keyCode === ENTER_KEY_EVENT){
    		ProductService.edit($scope.product)
    		.then(function(result){
    			alert("Success !! Updated Product")
    		}).catch(function(err){
    			alert(err || "Error while updating product");
    		});
    	}

    };

    //initialized
		$scope.getProducts();

	}]);
