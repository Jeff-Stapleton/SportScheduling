/*(function() {
	var app = angular.module('SportScheduler', ['SportScheduler-User', 'SportScheduler-Facility']);


})();*/
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
 		image: 'https://www.facebook.com/l.php?u=https%3A%2F%2Ffbcdn-profile-a.akamaihd.net%2Fhprofile-ak-xfp1%2Fv%2Ft1.0-1%2Fp50x50%2F10468678_10152267330671715_3349094449835870340_n.jpg%3Foh%3Dfa466be0700b08f266681ada54e60f1c%26oe%3D54FA059B%26__gda__%3D1426170608_f09e69a365e0e0f1c4373de54912545c&h=GAQGA3i6k'
		};

		$scope.userGetPath = '/users/' + $scope.user.fbUserId;
		$scope.userPutPath = '/users/' + $scope.user.firstName + '/' + $scope.user.lastName + '/' + $scope.user.email + '/' + $scope.user.phone + '/' + $scope.user.image;

		$scope.submit = function() {
		 	
		};

		$scope.log = function() {
		 	console.log($scope.user.firstName);
		 	console.log($scope.user.lastName);
		 	console.log($scope.user.email);
		 	console.log($scope.user.fbUserId);
		};

		$scope.setUser = function(firstName, lastName, email, id){
			$scope.user.firstName = firstName;
			$scope.user.lastName = lastName;
			$scope.user.email = email;
			$scope.user.fbUserId = id;
		};

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
				hours: '6:00 am - 9:45 pm Mon-Sat',
				phone: '(801) 422-3644',
				images: "../assets/rb.jpg"
				
			},
			{
				name: '24 Hour Fitness',
				hours: '6:00 am - 12:00 pm Mon-Sat',
				phone: '(801) 224-2096',
				images: "../assets/24Hour.jpg"
				
			},
			{
					name: 'Orem Recreation Center',
					hours: '5:00 am - 10:00 pm Mon-Fri 7:00 am - 7:00 pm Sat',
					phone: '(801) 852-6600',
					images: "../assets/OremRec.jpg"
					
				},
				{
					name: 'Provo Recreation Center',
					hours: '5:00 am - 10:00 pm Mon-Fri 7:00 am - 8:00 pm Sat',
					phone: '(801) 229-7154',
					images: "../assets/ProvoRec.jpg" 
					
				}

		];

	}]);

	app.controller('CourtController', ['$scope', function($scope){
	 		$scope.courts = [
				{
					name: 'Bulldog',
					image: "../assets/rb.jpg",
					hours: ['7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm'],
					hoursOfOp: [
							[0, 0, 0, 0, 0, 0, 0],
							[0, 0, 0, 0, 0, 0, 0],
							[0, 0, 0, 0, 0, 0, 0],
							[0, 0, 0, 0, 0, 0, 0],
							[0, 0, 0, 0, 0, 0, 0],
							[0, 0, 0, 0, 0, 0, 0],
							[0, 0, 0, 0, 0, 0, 0],
							[0, 0, 0, 0, 0, 0, 0],
							[0, 0, 0, 0, 0, 0, 0],
							[0, 0, 0, 0, 0, 0, 0],
							[0, 0, 0, 0, 0, 0, 0],
							[0, 0, 0, 0, 0, 0, 0],
							[0, 0, 0, 0, 0, 0, 0]
						],		
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