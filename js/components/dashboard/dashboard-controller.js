angular.module('sgDashboard')
	.controller('DashboardCtrl', ['$scope', 'ProductService','UI_MESSAGE',
		function($scope, ProductService, Message){

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
    			alert(err.message || Message.ERROR);
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
    			alert(Message.UPDATE_SUCCESS);
          $scope.getProducts();
    		}).catch(function(err){
    			alert(err.message || Message.ERROR);
    		});
    	}

    };

    //initialized
		$scope.getProducts();

	}]);
