require.config({
    baseUrl: "js",    
    paths: {
      'angular': 'https://ajax.googleapis.com/ajax/libs/angularjs/1.3.3/angular',
      'angular-ui-route': 'https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.11/angular-ui-router',
      'angularAMD': 'https://cdn.jsdelivr.net/angular.amd/0.2/angularAMD.min',
      'pouchdb': 'https://cdn.jsdelivr.net/pouchdb/3.6.0/pouchdb.min.js',
      'underscore': 'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js'
    },
    shim: { 
    	'angularAMD': ['angular'], 
    	'angular-route': ['angular'] 
    },
    deps: ['app']
});