angular.module('sgProduct', ['sgPersistent'])
	.service('ProductService', [ '$q', 'Persistent',
	function($q, Persistent){

		this.addProduct = function(product){
			var deferred = $q.defer();
			Persistent.persist(product)
				.then(function(result){
					deferred.resolve(result);
				}).catch(function (err) {
				  deferred.reject(err);
				});
			return deferred.promise;
		};


		this.get = function(){
			var deferred = $q.defer();
			Persistent.get()
				.then(function(result){
					deferred.resolve(result);
				}).catch(function (err) {
				  deferred.reject(err);
				});
			return deferred.promise;
		};

		this.editProduct = function(){

		};

	}]);
