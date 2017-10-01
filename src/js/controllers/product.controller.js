(function () {
    'use strict';

    angular
        .module('Inventary')
        .controller('ProductController', ProductController);

    ProductController.$inject = ['$rootScope', '$cookieStore', 'FlashService'];
    function ProductController($rootScope, $cookieStore, FlashService) {
        var vm = this;
        $rootScope.partial = false;
        $rootScope.title = "Productos";

        initController();

        function initController() {
                        
            console.log('Productos');
        }

        
    }

})();