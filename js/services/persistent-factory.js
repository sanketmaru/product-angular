angular.module('sgPersistent', [])
	.factory('Persistent', [ '$q', function($q){

		/**
		* Create a pouch db named product
		**/
		var db = new PouchDB('product');

		return {
			persist: function (model){
				model = angular.extend(model, {_id:new Date().toISOString()});
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
			get:function(){
				var deferred = $q.defer();
				db.allDocs({include_docs: true})
					.then(function(result){
						deferred.resolve(_.pluck(result.rows , 'doc'));
					})
					.catch(function(err){
						deferred.reject(err);
					});
				return deferred.promise;
			},
			update: function(model){
				var deferred = $q.defer();
				db.put(model, function(err, result){
					if(!err){
						deferred.resolve(result);
						return;
					}
					deferred.reject(err);
				})
				return deferred.promise;
			}
		}
	}]);
