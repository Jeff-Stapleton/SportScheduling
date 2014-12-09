/*(function() {
	var app = angular.module('SportScheduler', ['SportScheduler-User', 'SportScheduler-Facility']);


})();*/
(function() {
	var app = angular.module('SportScheduler', []);
 
 	app.controller('UserController', function($scope){
 		$scope.user = {
 		firstName: 'Jeff',
 		lastName: 'Stapleton',
 		fbUserId: '',
 		accessToken: '',
 		image: 'http://4.bp.blogspot.com/-xsZFgAwTaow/UumqvTFjURI/AAAAAAAACGI/LdXISuoVc00/s1600/vscocam_1390962236.676736.55.jpg'
		} 
	});
	
})();


// var myApp = angular.module('SportScheduler',[])
//    .config(function($routeProvider) {
//        $routeProvider
//                .when('/homePage', {templateUrl: "views/homePage.html", controller: "homeCtrl"})
//                .when('/login', {templateUrl: "views/login.html", controller: "loginCtrl"})
//                .when('/project/:projectId', {templateUrl: "views/project.html", controller: "projectCtrl"})
//                .when('/editproject/:projectId', {templateUrl: "views/editproject.html", controller: "editProjectCtrl"})
//                .otherwise({redirectTo: '/home'});
//    });