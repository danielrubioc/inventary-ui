(function () {
    'use strict';

    angular
        .module('Inventary')
        .factory('FlashService', FlashService);

    FlashService.$inject = ['$rootScope'];
    function FlashService($rootScope) {
        var service = {};

        service.Success = Success;
        service.Error = Error;

        initService();

        return service;

        function initService() {
            $rootScope.$on('$locationChangeStart', function () {
                clearFlashMessage();
            });

            function clearFlashMessage() {
                var flash = $rootScope.flash;
                if (flash) {
                    if (!flash.keepAfterLocationChange) {
                        delete $rootScope.flash;
                    } else {
                        // only keep for a single location change
                        flash.keepAfterLocationChange = false;
                    }
                }
            }
        }

        function Success(message, keepAfterLocationChange) {
            $rootScope.flash = {
                message: message,
                type: 'success', 
                keepAfterLocationChange: keepAfterLocationChange
            };
        }

        function Error(response, keepAfterLocationChange) {
            var error_message = 'Error: ';
            if (typeof(response.message) == 'Object' || typeof(response.message) == 'object') {
                for (var k in response.message) {
                	if (response.message.hasOwnProperty(k)) {
                		var key = k !== 'error' ? k : '';
                		error_message += key + ' ' + response.message[k] + "\n";
                	}
                }
            } else {
            	error_message += response.message;
            }

            $rootScope.flash = {
            	message: error_message,
                type: 'error',
                keepAfterLocationChange: response.code == 401 ? true : keepAfterLocationChange
            };
                
            if (response.code == 401) {
             	window.location = "/login";
            }
        }
    }

})();