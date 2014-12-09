
(function() {
	var app = angular.module('SportScheduler-User', []);

	app.controller('UserController', ['$scope', function($scope){
		$scope.user = {
		firstName: 'Jeff',
		lastName: 'Stapleton',
		email: 'jeff.d.stapleton@gmail.com',
		phone: '(949) 632-0102',
		fbUserId: '',
		accessToken: '',
		image: 'http://4.bp.blogspot.com/-xsZFgAwTaow/UumqvTFjURI/AAAAAAAACGI/LdXISuoVc00/s1600/vscocam_1390962236.676736.55.jpg'
		}; 

	app.submit = function(data) {

	};

	app.getUser = function(){
		return this.user;
	};

})();