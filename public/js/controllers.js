(function (angular) {
    'use strict';
    angular.module('MainAppControllers', [])

    .controller('LoginController', ['$location', 'userService', LoginController])

    .controller('SignupController', ['$location', 'userService', SignupController])

    .controller('MainController', ['$location', 'userService', MainController])

    .controller('MarvelController', ['marvelService', MarvelController])

    .controller('MCharactersController', ['marvelService', MCharactersController]);

    function LoginController($location, userService) {
        var LoginCtrl = this;

        LoginCtrl.login = function () {
            userService.login(
                LoginCtrl.email, LoginCtrl.password,
                function (response) {
                    $location.path('/');
                },
                function (response) {
                    alert('Something went wrong with the login process. Try again later!');
                }
            );
        };

        LoginCtrl.email = '';
        LoginCtrl.password = '';

        if (userService.checkIfLoggedIn()) {
            $location.path('/');
        }
    }

    function SignupController($location, userService) {
        var SignupCtrl = this;

        SignupCtrl.signup = function () {
            userService.signup(
                SignupCtrl.name, SignupCtrl.email, SignupCtrl.password,
                function (response) {
                    alert('Great! You are now signed in! Welcome, ' + SignupCtrl.name + ' !');
                    $location.path('/');
                },
                function (response) {
                    alert('Something went wrong with you signing in process. Try again later.');
                }
            );
        };

        SignupCtrl.name = '';
        SignupCtrl.email = '';
        SignupCtrl.password = '';

        if (userService.checkIfLoggedIn()) {
            $location.path('/');
        }
    }

    function MainController($location, userService) {
        var MainCtrl = this;

        MainCtrl.logout = function () {
            userService.logout();
            $location.path('/login');
        };

        if (!userService.checkIfLoggedIn()) {
            $location.path('/login');
        }
    }

    function MarvelController(marvelService) {
        var MarvelCtrl = this;

        MarvelCtrl.comics = marvelService.getComics();
    }

    function MCharactersController(marvelService) {
        var MCharactersCtrl = this;

        MCharactersCtrl.characters = marvelService.getCharacters();
    }

})(angular);