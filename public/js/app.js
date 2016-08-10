var MarvelApp = angular.module('MarvelApp', ['ngRoute', 'MarvelAppControllers', 'MarvelAppServices']);

MarvelApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/login', {
            templateUrl: 'partials/login.html',
            controller: 'LoginController'
        })
        .when('/signup', {
            templateUrl: 'partials/signup.html',
            controller: 'SignupController'
        })
        .when('/marvel/characters', {
            templateUrl: 'partials/marvel-characters.html',
            controller: 'CharactersController'
        })
        .when('/marvel', {
            templateUrl: 'partials/marvel.html',
            controller: 'MarvelController'
        })
        .otherwise({
            redirectTo: '/'
        });
    }
]);