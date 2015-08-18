/**
 * @author Sam Okoro (Vctry)
 */

var App = angular.module('app', ['ngRoute', 'ngAnimate']);

App.controller('arraysCtrl', [
function ($scope) {
   
      
 
}]);

App.config(function ($routeProvider) {
    $routeProvider.when('/', {
    
        templateUrl: 'partials/arrays.html'
    });
});



