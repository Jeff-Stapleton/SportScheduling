
(function() {
	var app = angular.module('SportScheduler', []);
 
 	app.controller('UserController', ['$scope', '$http', function($scope, $http){
 		$scope.user = {
 		firstName: '',
 		lastName: '',
 		email: '',
 		phone: '',
 		fbUserId: '',
 		accessToken: '',
 		image: '',
 		loggedIn: 'false'
		};

		$scope.userGetPath = '/users/' + $scope.user.fbUserId;
		$scope.userPutPath = '/users/' + $scope.user.firstName + '/' + $scope.user.lastName + '/' + $scope.user.email + '/' + $scope.user.phone + '/' + $scope.user.image + '/' + $scope.user.loggedIn + '/' + $scope.user.fbUserId;

		$scope.submit = function(phone) {
		 	$scope.user.phone = phone;
		 	localStorage.phone = phone;
		 	$scope.put();
		};

		$scope.log = function() {
		 	console.log($scope.user.firstName);
		 	console.log($scope.user.lastName);
		 	console.log($scope.user.email);
		 	console.log($scope.user.fbUserId);
		};

		$scope.setUser = function(){
			if(localStorage.getItem("loggedIn") === "true"){
				/*$scope.user.firstName = localStorage.getItem("first_name");
				$scope.user.lastName = localStorage.getItem("last_name");
				$scope.user.email = localStorage.getItem("email");
				$scope.user.fbUserId = localStorage.getItem("id");
				$scope.user.image = localStorage.getItem("image");
				$scope.user.phone = localStorage.getItem("phone");
				$scope.user.loggedIn = localStorage.getItem("loggedIn");*/
				$scope.get();
			}
		};

		$scope.logout = function() {
			localStorage.setItem("loggedIn", "false");
			localStorage.setItem("first_name", "");
			localStorage.setItem("last_name", "");
			localStorage.setItem("email", "");
			localStorage.setItem("id", "");
			localStorage.setItem("image", "");
			localStorage.setItem("phone", "");
			alert("You have logged out of the application, but you are still logged into Facebook.")
			window.location = "../";
		}

		$scope.get = function() {
			$http({method: 'GET', url: $scope.userGetPath}).
				success(function(data, status) {
					if(data.length) {
						var userVals = JSON.parse(data);
						$scope.user.firstName = userVals.firstName;
						$scope.user.lastName = userVals.lastName;
						$scope.user.email = userVals.email;
						$scope.user.phone = userVals.phone;
						$scope.user.image = userVals.picture;
						$scope.user.fbUserId = userVals.fbUserId;
						$scope.user.loggedIn = userVals.loggedIn;
					} else {
						$scope.put();
					}
				});
		};

		$scope.put = function() {
			$http({method: 'PUT', url: $scope.userPutPath}).
				success(function(data, status) {
					if(status = '200'){
						console.log(data);
					}
				});
		};

	}]);

	app.controller('FacilityController', ['$scope', function($scope){
 		$scope.facilities = [
 			{
				name: 'Richards Building - BYU',
				hours: '6 am-10 pm Mon-Sat',
				phone: '(801) 422-3644',
				images: "../assets/rb.jpg"
				
			},
			{
				name: '24 Hour Fitness',
				hours: '6 am-12 pm Mon-Sat',
				phone: '(801) 224-2096',
				images: "../assets/24Hour.jpg"
				
			},
			{
					name: 'Orem Recreation Center',
					hours: '5 am-10 pm Mon-Fri 7 am-7 pm Sat',
					phone: '(801) 852-6600',
					images: "../assets/OremRec.jpg"
					
				},
				{
					name: 'Provo Recreation Center',
					hours: '5 am-10 pm Mon-Fri 7 am-8 pm Sat',
					phone: '(801) 229-7154',
					images: "../assets/ProvoRec.jpg" 
					
				}

		];

	}]);

	app.controller('CourtController', ['$scope', function($scope){
 		$scope.courts = [
			{
				name: 'Bulldog Court',
				image: "../assets/rb.jpg",
				calendar: [
				['7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm', '8 pm']	
				['7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm', '8 pm']
				['7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm', '8 pm']
				['7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm', '8 pm']
				['7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm', '8 pm']
				['7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm', '8 pm']
				['7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm', '8 pm']
				]				
			},
			{
				name: 'Falcon Court',
				image: "../assets/rb.jpg"
				calendar: [
				['7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm', '8 pm']	
				['7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm', '8 pm']
				['7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm', '8 pm']
				['7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm', '8 pm']
				['7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm', '8 pm']
				['7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm', '8 pm']
				['7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm', '8 pm']
				]			
			},
			{
				name: 'Shark Court',
				image: "../assets/rb.jpg"
				calendar: [
				['7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm', '8 pm']	
				['7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm', '8 pm']
				['7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm', '8 pm']
				['7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm', '8 pm']
				['7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm', '8 pm']
				['7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm', '8 pm']
				['7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm', '8 pm']
				]			
			},
			{
				name: 'Courgar Court',
				image: "../assets/rb.jpg"
				calendar: [
				['7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm', '8 pm']	
				['7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm', '8 pm']
				['7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm', '8 pm']
				['7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm', '8 pm']
				['7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm', '8 pm']
				['7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm', '8 pm']
				['7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm', '8 pm']
				]					
			}

		];
	}]);


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