var myApp = angular.module("myApp");
myApp.factory("MainFactory", function($http){
	var factory = {};
	factory.show = function(callback){
		$http.get("/index").success(function(output){
			callback(output);
		});
	};
	return factory;
});