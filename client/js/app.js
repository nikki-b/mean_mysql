(function(){
	var myApp = angular.module('myApp', ['ngRoute']);

	myApp.config(function($routeProvider){
		$routeProvider
		// =====================================
 		// LOAD MAIN PARTIAL ===================
  	// =====================================
		.when("/",
		{
			templateUrl: "partials/main.html"
		})
	})
}());