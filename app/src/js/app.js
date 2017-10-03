(function () {
	var env = {};

    'use strict';

    angular
        .module('Inventary', ['ngRoute', 'ngCookies'])
        .config(config)
        .run(run);


        config.$inject = ['$routeProvider', '$location', '$http'];
        function config($routeProvider, $locationProvider, $httpProvider) {
            $routeProvider
            .when('/', {
                controller: 'HomeController',
                templateUrl: 'views/home/home.view.html'
            })
            .when('/product', {
                    controller: 'ProductController',
                    templateUrl: 'views/product/product.view.html'
            })
            .otherwise({ redirectTo: '/' });
        }   

    run.$inject = ['$rootScope', '$location', '$cookieStore', '$http'];    
    function run($rootScope, $location, $cookieStore, $http) {
        // carga inicial
        console.log('sii');
        console.log('rootScope', $rootScope);
        console.log('location', $location);
        console.log('cookieStore', $cookieStore);
    }



})();
