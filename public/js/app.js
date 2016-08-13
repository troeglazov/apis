(function (angular) {
    'use strict';

    angular.module('MainApp', ['ngRoute', 'MainAppControllers', 'MainAppServices'])
        .config(['$compileProvider', compileProvider])
        .config(['$routeProvider', routeProvider]);

    function compileProvider ($compileProvider) {
        $compileProvider.debugInfoEnabled(false);
    }

    function routeProvider ($routeProvider) {
        $routeProvider
            .when('/login', {
                templateUrl: 'partials/login.html',
                controller: 'LoginController',
                controllerAs: 'LoginCtrl'
            })
            .when('/signup', {
                templateUrl: 'partials/signup.html',
                controller: 'SignupController',
                controllerAs: 'SignupCtrl'
            })
            .when('/marvel', {
                templateUrl: 'partials/marvel.html',
                controller: 'MarvelController',
                controllerAs: 'MarvelCtrl'
            })
            .when('/marvel/characters', {
                templateUrl: 'partials/marvel-characters.html',
                controller: 'MCharactersController',
                controllerAs: 'MCharactersCtrl'
            })
            .when('/marvel/comics', {
                templateUrl: 'partials/marvel-comics.html',
                controller: 'MComicsController',
                controllerAs: 'MComicsCtrl'
            })
            .when('/star-wars', {
                templateUrl: 'partials/star-wars.html',
                controller: 'SWController',
                controllerAs: 'SWCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
})(angular);