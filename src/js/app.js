(function () {
	var env = {};

	// Import variables if present (from env.js)
	if(window){
	  Object.assign(env, window.__env);
	}

    'use strict';

    angular
        .module('Inventary', ['ngRoute', 'ngCookies'])
        .config(config)
        .run(run);


        config.$inject = ['$routeProvider', '$locationProvider', '$httpProvider'];
        function config($routeProvider, $locationProvider, $httpProvider) {
            $routeProvider
            .when('/', {
                controller: 'HomeController',
                templateUrl: 'views/home/home.view.html',
                controllerAs: 'vm' 
            })
            .when('/product', {
                    controller: 'ProductController',
                    templateUrl: 'views/product/product.view.html',
                    controllerAs: 'vm'
            })
        }   

    run.$inject = ['$rootScope', '$location', '$cookieStore', '$http'];    
    function run($rootScope, $location, $cookieStore, $http) {
        // carga inicial
       
    }



})();
