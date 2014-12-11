
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

		$('#modal').modal();  
		
		$scope.submit = function(phone) {
		 	$scope.user.phone = phone;
		 	localStorage.phone = phone;
		 	$scope.update();
		};

		$scope.log = function() {
		 	console.log($scope.user.firstName);
		 	console.log($scope.user.lastName);
		 	console.log($scope.user.email);
		 	console.log($scope.user.fbUserId);
		};

		$scope.setUser = function(){
			if(localStorage.getItem("loggedIn") === "true"){
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
			var changed = false;
			$scope.userGetPath = '/users/' + $scope.user.fbUserId;
			$http({method: 'GET', url: $scope.userGetPath}).
				success(function(data, status) {
					if(data.length) {
						/*var userVals = JSON.parse(data);
						$scope.user.firstName = userVals.firstName;
						$scope.user.lastName = userVals.lastName;
						$scope.user.email = userVals.email;
						$scope.user.fbUserId = userVals.fbUserId;
						$scope.user.loggedIn = userVals.loggedIn;
						$scope.user.image = localStorage.image;
						$scope.user.phone = userVals.phone;*/
						var userVals = data[0];
						$scope.user.firstName = userVals.firstName;
						$scope.user.lastName = userVals.lastName;
						$scope.user.email = userVals.email;
						$scope.user.fbUserId = userVals.fbUserId;
						$scope.user.loggedIn = userVals.loggedIn;
						$scope.user.image = localStorage.image;
						$scope.user.phone = userVals.phone;

						/*if(localStorage.phone.length){
							if(localStorage.phone != userVals.phone){
								$scope.user.phone = localStorage.phone;
								changed = true;
							} else {
								$scope.user.phone = userVals.phone;
							}
						} else {
							$scope.user.phone = userVals.phone;
						}

						if(changed) {
							$scope.put();
						}*/
						
					} else {
						$scope.put();
					}
				});
		};

		$scope.update = function() {
			$scope.userPutPath = '/users/' + $scope.user.fbUserId + '/' + $scope.user.email + '/' + $scope.user.phone;

			$http({method: 'PUT', url: $scope.userPutPath}).
				success(function(data, status) {
					if(status = '200'){
						console.log(data);
					}
				});
		};

		$scope.put = function() {

			$scope.user.firstName = localStorage.getItem("first_name");
			$scope.user.lastName = localStorage.getItem("last_name");
			$scope.user.email = localStorage.getItem("email");
			$scope.user.fbUserId = localStorage.getItem("id");
			$scope.user.image = localStorage.getItem("image");
			$scope.user.phone = localStorage.getItem("phone");
			$scope.user.loggedIn = localStorage.getItem("loggedIn");

			$scope.userPutPath = '/users/' + $scope.user.firstName + '/' + $scope.user.lastName + '/' + $scope.user.email + '/' + $scope.user.phone + '/' + $scope.user.loggedIn + '/' + $scope.user.fbUserId;

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
				image: "../assets/rb.jpg"			
			},
			{
				name: 'Falcon Court',
				image: "../assets/rb.jpg"				
			},
			{
				name: 'Shark Court',
				image: "../assets/rb.jpg"							
			},
			{
				name: 'Courgar Court',
				image: "../assets/rb.jpg"						
			}

		];
	}]);

	app.controller('CalendarController', ['$scope', function($scope){
	 		$scope.calendars = [
			['7 am','7 am','7 am','7 am','7 am','7 am','7 am'],	
			['8 am','8 am','8 am','8 am','8 am','8 am','8 am'],	
			['9 am','9 am','9 am','9 am','9 am','9 am','9 am'],	
			['10 am','10 am','10 am','10 am','10 am','10 am','10 am'],	
			['11 am','11 am','11 am','11 am','11 am','11 am','11 am'],	
			['12 pm','12 pm','12 pm','RESERVED','12 pm','12 pm','12 pm'],	
			['1 pm','1 pm','1 pm','1 pm','1 pm','1 pm','1 pm'],	
			['2 pm','2 pm','2 pm','2 pm','2 pm','2 pm','2 pm'],	
			['3 pm','3 pm','3 pm','3 pm','3 pm','3 pm','3 pm'],	
			['4 pm','4 pm','4 pm','4 pm','4 pm','4 pm','4 pm'],	
			['5 pm','5 pm','5 pm','5 pm','5 pm','5 pm','5 pm'],	
			['6 pm','6 pm','6 pm','6 pm','6 pm','6 pm','6 pm'],	
			['7 pm','7 pm','7 pm','7 pm','7 pm','7 pm','7 pm'],	
			['8 pm','8 pm','8 pm','8 pm','8 pm','8 pm','8 pm']				
		
			];

		}]);

})();
