angular.module('sgProduct', ['sgRequest'])
	.service('ProductService', [ '$q', 'RequestService',
	function($q, RequestService){

		this.add = function(product){
			return RequestService.post(product);
		};

		this.get = function(){
			return RequestService.get();
		};

		this.edit = function(product){
			return RequestService.update(product);
		};

	}]);
