var app = angular.module('ArtLike', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: "../index.html",
			controller: "homeController"
	})
		.when('/contest', {
			templateUrl: "../views/contest.html",
			controller: 'contestController'
		})
		.when('/profile', {
			templateUrl: "../views/profil.html",
			controller: 'profileController'
		})
		.otherwise({
			redirectTo: '/'
		});
});