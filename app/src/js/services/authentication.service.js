(function () {
    'use strict';

    angular
        .module('Inventary')
        .factory('AuthenticationService', AuthenticationService);

    AuthenticationService.$inject = ['$http', '$cookieStore', '$rootScope','UserService', '__env'];
    function AuthenticationService($http, $cookieStore, $rootScope, UserService, __env) {
    	var service = {};
    	var auth_id = '';
        service.Login = Login;
        service.SetCredentials = SetCredentials;
        service.ClearCredentials = ClearCredentials;

        return service;

        function Login(username, password, provider, callback) {
            $http.post(__env.apiUrl + '/user/login' + provider, { user: username, pass: password })
                .success(function (response) {
                	auth_id = response.data.auth_id;
                    callback(response);
                })
                .error(function (error) {
                	callback({ success: false, message: error.reason, code: error.code });
                });

        }

        function SetCredentials(username, password) {
            $rootScope.globals = {
                currentUser: {
                    username: username,
                    auth_id: auth_id
                }
            };
            $cookieStore.put('globals', $rootScope.globals);
        }

        function ClearCredentials() {
            $rootScope.globals = {};
            $cookieStore.remove('globals');
        }
    }
})();
