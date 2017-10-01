(function () {
	var env = {};

	// Import variables if present (from env.js)
	if(window){
	  Object.assign(env, window.__env);
	}

    'use strict';

    angular
        .module('Inventary', ['ngRoute', 'ngCookies', 'angularUtils.directives.dirPagination', 'ui.bootstrap', 'ngSanitize', 'xeditable', 'ngclipboard'])
        .config(config)
        .run(run)
    	.constant('__env', env);

    config.$inject = ['$routeProvider', '$locationProvider', '$httpProvider'];
    function config($routeProvider, $locationProvider, $httpProvider) {
    	$httpProvider.defaults.withCredentials = false;
        $routeProvider
            .when('/', {
                controller: 'HomeController',
                templateUrl: 'views/home/home.view.html',
                controllerAs: 'vm'
            })

            .when('/home', {
                controller: 'HomeController',
                templateUrl: 'views/home/home.view.html',
                controllerAs: 'vm'
            })

            .when('/product', {
                controller: 'ProductController',
                templateUrl: 'views/product/product.view.html',
                controllerAs: 'vm'
            })

            
    

            .otherwise({ redirectTo: '/' });
        $locationProvider.html5Mode(true);
    }

    run.$inject = ['$rootScope', '$location', '$cookieStore', '$http', 'editableOptions', 'editableThemes'];
    function run($rootScope, $location, $cookieStore, $http, editableOptions, editableThemes) {
        

       
        
    }
})();
