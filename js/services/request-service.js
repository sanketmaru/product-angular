angular.module('sgRequest', ['sgPersistent'])
	.service('RequestService', [ '$q', 'Persistent',
	function($q, Persistent){

    /**
    * This is a private function to have common functionality
    * of request handler
    */
		var _requestHandler = function(model, success, error, deferred){
      var sucessHandler = success || function(deferred) {
        return function(res) {
          deferred.resolve(res);
        };
      };

      var errorHandler = error || function(err) {
        deferred.reject(err);
      };
      return {
      	sucessHandler : sucessHandler,
      	errorHandler : errorHandler
      }
		};

    /**
    * Update the model to the backend
    * @param model
    * @param success handler
    * @param error handler
    */
    this.update = function(model, success, error){
      var deferred = $q.defer();
      var requestHandler = _requestHandler(model, success, error, deferred);

      Persistent.update(model)
        .then(requestHandler.sucessHandler(deferred), requestHandler.errorHandler);
      return deferred.promise;
    };

    /**
    * Get the model from the backend
    * @param model
    * @param success handler
    * @param error handler
    */
		this.get = function(model, success, error){
			var deferred = $q.defer();
			var requestHandler = _requestHandler(model, success, error, deferred);

			Persistent.get()
        .then(requestHandler.sucessHandler(deferred), requestHandler.errorHandler);
      return deferred.promise;
		};

    /**
    * Add the model to the backend
    * @param model
    * @param success handler
    * @param error handler
    */
		this.post = function(model, success, error) {
      var deferred = $q.defer();
      var requestHandler = _requestHandler(model, success, error, deferred);

      Persistent.persist(model)
        .then(requestHandler.sucessHandler(deferred), requestHandler.errorHandler);
      return deferred.promise;
    }

	}]);


