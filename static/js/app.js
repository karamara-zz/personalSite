var app = angular.module('app', ['ngRoute'])
.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl:'static/partials/index.html'
	})
	.otherwise({
		redirectTo: '/'
	})
})