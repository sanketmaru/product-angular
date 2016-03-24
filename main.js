require.config({
    baseUrl: "",    
    paths: {
      'angular': 'client/bower_components/angular/angular',
      'angular-ui-router': 'client/bower_components/angular-ui-router/release/angular-ui-router.min',
      'angularAMD': 'client/bower_components/angularAMD/angularAMD.min',
      'ngload':'client/bower_components/angularAMD/ngload.min',
      'pouchdb': 'client/bower_components/pouchdb/dist/pouchdb.min',
      'underscore': 'client/bower_components/underscore/underscore-min',

      'dashboard-module': 'js/components/dashboard/dashboard-module',
      'dashboard-controller':'js/components/dashboard/dashboard-controller',
      'dashboard-edit-controller':'js/components/dashboard/dashboard-edit-controller',

      'persistent-factory': 'js/services/persistent-factory',
      'persistent-module': 'js/services/persistent-module',
      'product-service': 'js/services/product-service',
      'product-module': 'js/services/product-module',
      'request-service': 'js/services/request-service',
      'request-module': 'js/services/request-module',
      'message-constant':'js/config/message-constant'
    },
    shim: { 
      'angular': {
        exports:"angular"
      },
    	'angularAMD': ['angular'], 
      'ngload': ['angularAMD'],
    	'angular-ui-router': ['angular'] 
    },
    deps: ['app']
});