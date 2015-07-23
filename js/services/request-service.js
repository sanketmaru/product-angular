angular.module('sgRequest', ['sgPersistent'])
	.service('RequestService', [ '$q', 'Persistent', 
	function($q, Persistent){


		var _requestHandler = function(model, success, error, deferred){			
      var sucessHandler = success || function(deferred) {
        return function(res) {
          if (res.success) {
            deferred.resolve(true);
          } else {
            deferred.reject(res.message);
          }
        };
      };

      var errorHandler = error || function(err) {
        err = err || 'Something Went Wrong';
        deferred.reject(err);
      };
      return {
      	sucessHandler : sucessHandler,
      	errorHandler : errorHandler
      }
		};

		this.get = function(model, success, error){
			var deferred = $q.defer();
			var requestHandler = _requestHandler(model, success, error, deferred);

			Persistent.get()
        .then(requestHandler.sucessHandler(deferred), requestHandler.errorHandler);
      return deferred.promise;
		};

		this.post = function(model, success, error) {
      var deferred = $q.defer();
      var requestHandler = _requestHandler(model, success, error, deferred);

      Persistent.persist(model)
        .then(requestHandler.sucessHandler(deferred), requestHandler.errorHandler);
      return deferred.promise;
    }

	}]);


