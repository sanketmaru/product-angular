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
				.then(function(doc){
					var rows = doc.rows;
					var docs = _.pluck(rows , 'doc');
					deferred.resolve(docs);
				}).catch(function (err) {
				  deferred.reject(err);
				});
			return deferred.promise;
		};

		this.editProduct = function(){

		};



	}]);
