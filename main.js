require.config({
    baseUrl: "js",    
    paths: {
      'angular': '../client/bower_components/angular/angular',
      'angular-ui-router': '../client/bower_components/angular-ui-router/release/angular-ui-router.min',
      'angularAMD': '../client/bower_components/angularAMD/angularAMD.min',
      'ngload':'../client/bower_components/angularAMD/ngload.min',
      'pouchdb': '../client/bower_components/pouchdb/dist/pouchdb.min',
      'underscore': '../client/bower_components/underscore/underscore-min',

      'dashboard-module': 'components/dashboard/dashboard-module',
      'dashboard-controller':'components/dashboard/dashboard-controller',
      'dashboard-edit-controller':'components/dashboard/dashboard-edit-controller',

      'persistent-factory': 'services/persistent-factory',
      'persistent-module': 'services/persistent-module',
      'product-service': 'services/product-service',
      'product-module': 'services/product-module',
      'request-service': 'services/request-service',
      'request-module': 'services/request-module',
      'message-constant':'config/message-constant'
    },
    shim: { 
      angular: {
        exports: "angular"
      },
    	'angularAMD': ['angular'], 
      'ngload': ['angularAMD'],
    	'angular-ui-router': ['angular', 'angularAMD'] ,
      'dashboard-module':['pouchdb']
    },
    deps: ['app']
});