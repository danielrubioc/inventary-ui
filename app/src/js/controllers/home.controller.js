(function () {
    'use strict';

    angular
        .module('Inventary')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$rootScope', '$cookieStore'];
    function HomeController($rootScope, $cookieStore, FlashService) {
        var vm = this;
        $rootScope.partial = false;
        $rootScope.title = "Inicio";

        initController();

        function initController() {
                        
            console.log('hola');
        }

        
    }

})();