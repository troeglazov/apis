var MainAppServices = angular.module('MainAppServices', [
    'LocalStorageModule'
]);

MainAppServices.factory('userService', ['$http', 'localStorageService', function($http, localStorageService) {

    function checkIfLoggedIn() {
        var value = false;
        if (localStorageService.get('token')) {
            value = true;
        }

        return value;
    }

    function signup(name, email, password, onSuccess, onError) {

        $http.post('/api/auth/signup',
            {
                name: name,
                email: email,
                password: password
            }
        )
        .then(
            function(response) {
                localStorageService.set('token', response.data.token);
                onSuccess(response);
        },
            function(response) {
                onError(response);
            }
        );
    }

    function login(email, password, onSuccess, onError) {

        $http.post('/api/auth/login',
            {
                email: email,
                password: password
            }
            )
        .then(
            function(response) {
                localStorageService.set('token', response.data.token);
                onSuccess(response);
            },
            function(response) {
                onError(response);
            }
        );
    }

    function logout() {
        localStorageService.remove('token');
    }

    function getCurrentToken() {
        return localStorageService.get('token');
    }

    return {
        checkIfLoggedIn: checkIfLoggedIn,
        signup: signup,
        login: login,
        logout: logout,
        getCurrentToken: getCurrentToken
    }
}]);

MainAppServices.factory('marvelService', ['$http', function($http) {

    function getComics() {
        return $http.get('api/comics', {params:{shuffle: true}}).then(function(response) {
            return response.data;
        });
    }

    function getCharacters() {
        return $http.get('api/characters').then(function(response) {
            return response.data;
        });
    }

    return {
        getComics: getComics,
        getCharacters: getCharacters
    }
}]);