myApp.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'pages/home.html',
			controller: 'controllerHome'
		})
		
		.otherwise({redirectTo : '/'})
});