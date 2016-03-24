define(['angular', 'request-service', 'persistent-module'], function (angular, RequestService) {
	var requestModule = angular.module('sgRequest', ['sgPersistent'])
	requestModule.service('RequestService', RequestService);
	return requestModule;
});
