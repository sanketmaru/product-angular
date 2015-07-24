angular.module('sgProduct', ['sgRequest'])
	.service('ProductService', ['RequestService',
	function(RequestService){

		/**
		* Adds the product to the backend
		* @param product model
		*/
		this.add = function(product){
			return RequestService.post(product);
		};

		/**
		* Get all the product from the backend
		*/
		this.get = function(){
			return RequestService.get();
		};

		/**
		* Updates the product to the backend
		* @param product model
		*/
		this.edit = function(product){
			return RequestService.update(product);
		};

	}]);
