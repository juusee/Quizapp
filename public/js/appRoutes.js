angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/list', {
			templateUrl: 'views/list.html',
			controller: 'ListController'
		})

		.when('/create', {
			templateUrl: 'views/create.html',
			controller: 'CreateController'
		});

	$locationProvider.html5Mode(true);

}]);