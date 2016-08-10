var MarvelAppControllers = angular.module('MarvelAppControllers', []);

MarvelAppControllers.controller('LoginController', ['$scope', '$location', 'userService', function ($scope, $location, userService) {
    $scope.login = function() {
        userService.login(
            $scope.email, $scope.password,
            function(response){
                $location.path('/');
            },
            function(response){
                alert('Something went wrong with the login process. Try again later!');
            }
        );
    };

    $scope.email = '';
    $scope.password = '';

    if(userService.checkIfLoggedIn()) {
        $location.path('/');
    }
}]);

MarvelAppControllers.controller('SignupController', ['$scope', '$location', 'userService', function ($scope, $location, userService) {
    $scope.signup = function () {
        userService.signup(
            $scope.name, $scope.email, $scope.password,
            function (response) {
                alert('Great! You are now signed in! Welcome, ' + $scope.name + ' !');
                $location.path('/');
            },
            function (response) {
                alert('Something went wrong with you signing in process. Try again later.');
            }
        );
    };

    $scope.name = '';
    $scope.email = '';
    $scope.password = '';

    if (userService.checkIfLoggedIn()) {
        $location.path('/');
    }
}]);

MarvelAppControllers.controller('MainController', ['$scope', '$location', 'userService', '$http', 'marvelService', function ($scope, $location, userService, $http, marvelService) {
    $scope.logout = function () {
        userService.logout();
        $location.path('/login');
    };

    if(!userService.checkIfLoggedIn()) {
        $location.path('/login');
    }
}]);

MarvelAppControllers.controller('MarvelController', ['$scope', 'marvelService', function ($scope, marvelService) {
    $scope.comics = marvelService.getComics();
}]);

MarvelAppControllers.controller('CharactersController', ['$scope', 'marvelService', function ($scope, marvelService) {
    $scope.characters = marvelService.getCharacters();
}]);