// KEYHAN JS Document
// javascript goes here: all javascript has to be imported through this file

import 'angular';
import 'angular-route';

var app = angular.module('myApp', ['ngRoute']);
app.controller('myAppController', ['$scope', function($scope) {

}]);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/home.html'
    })
});