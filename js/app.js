var app = angular.module('ArtLike', []);

app.config(['$routeProvider'], function($routeProvider) {
	$routeProvider
	.when('/', {templateUrl: 'index.html'})
	.when('/contest', {templateUrl: 'views/contest.html', controller: 'contestController'})
	.when('/profile', {templateUrl: 'views/profil.html', controller: 'profileController'})
	.otherwise({redirectTo: '/'})
})