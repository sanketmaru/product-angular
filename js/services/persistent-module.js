define(['angular', 'persistent-factory'], function (angular, PersistentFactory) {
	var persistentModule = angular.module('sgPersistent', [])
	persistentModule.factory('Persistent', PersistentFactory);
	return persistentModule;
});