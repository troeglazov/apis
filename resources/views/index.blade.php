<!DOCTYPE html>
<html lang="en" ng-app="MarvelApp">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>test</title>

    <link href="bower_components/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">

    <script src="bower_components/angular/angular.js"></script>
    <script src="bower_components/lodash/lodash.js"></script>
    <script src="bower_components/angular-route/angular-route.js"></script>
    <script src="bower_components/angular-local-storage/dist/angular-local-storage.js"></script>
    <script src="bower_components/restangular/dist/restangular.js"></script>

    <script src="js/app.js"></script>
    <script src="js/controllers.js"></script>
    <script src="js/services.js"></script>
    <link rel="stylesheet" type="text/css" href="css/main.css">
    <style>

        li {
            padding-bottom: 8px;
        }

    </style>
</head>

<body>
<div class="container">
    <div class="row" ng-controller="MainController">
        <div class="col-md-12">
            <h1>test</h1>
        </div>
        <hr>
        <div class="pull-left">
            <a href="#/marvel" class="card-title">Marvel</a>
        </div>
        <div class="pull-right">
            <button type="button" class="btn btn-info" ng-click="logout()">Logout!</button>
        </div>
    </div>

    <div class="clearfix"></div>

    <hr>
    <div ng-view></div>
</div>
<script src="bower_components/jquery/dist/jquery.js"></script>
<script src="bower_components/bootstrap/dist/js/bootstrap.js"></script>
</body>
</html>