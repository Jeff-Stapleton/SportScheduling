(function(){
	var app = angular.module('SportSceduler', []);

	app.controller('UserCtrl', function(){
		this.user = user; 
	});

	var user = {
		userId: 0,
		firstName: '',
		lastName: '',
		isSignedIn: false,
	}


})();



