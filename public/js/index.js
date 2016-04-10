var app = angular.module('hikeit', ["ngRoute"]);


app.config(["$routeProvider","$locationProvider", function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode({enabled: true});

$routeProvider.when('/',{
  templateUrl: "../partials/first.html",
  controller:  "indexController",
  controllerAs: "index"
});

}]);

app.controller('indexController', ["$http", function($http){
  var controller = this;
  this.trails = [];
  $http({
    method: "GET",
    url: "/getplaces"
  }).then(function(response){
    controller.trails = response.data;
  });
}]);
