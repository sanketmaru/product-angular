angular.module('sgPersistent', [])
	.factory('Persistent', [ '$q', function($q){

		var db = new PouchDB('product');

		return {
			persist: function (model){
				var deferred = $q.defer();
				db.put(model, function(err, result){
					if(!err){
						deferred.resolve(result);
						return;
					}
					deferred.reject(err);
				})
				return deferred.promise;
			},
			get:function(key){
				if(!cache[key]) {
					cache[key] = angular.fromJson(sessionStorage.getItem(key))
				}
				return cache[key];
			}
		}
	}]);
