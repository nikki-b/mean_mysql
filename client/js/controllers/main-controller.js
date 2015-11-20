var myApp = angular.module("myApp");
myApp.controller("MainController", function(MainFactory){
	console.log("MainController loaded");
	var that = this;
	this.info = [];
	var getInfo = function(){
		MainFactory.show(function(output){
			that.info = output;
		})
	}

	getInfo();
});