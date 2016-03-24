define(['angular', 'product-service', 'request-module'], function (angular, ProductService) {
	var productModule = angular.module('sgProduct', ['sgRequest']);
	productModule.service('ProductService', ProductService);
	return productModule;
});

