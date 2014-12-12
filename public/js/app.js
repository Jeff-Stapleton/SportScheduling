
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

		$(document).ready(function(){
		    $(".toggle-modal").click(function(){
		        $("#myModal").modal('toggle');
		    });
		});

		$('.dropdown-inverse li > a').click(function(e){
		    $('.status').text(this.innerHTML);
		});

		$(".dropdown-inverse li a").click( function() {
		    var yourText = $(this).text();
		    var temp = yourText.slice(0,0);
		    var duration = parseInt(duration, temp); 
		});

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
			$scope.userGetPath = '/users/' + localStorage.id;
			$http({method: 'GET', url: $scope.userGetPath}).
				success(function(data, status) {
					if(data.length) {
						var userVals = data[0];
						$scope.user.firstName = userVals.firstName;
						$scope.user.lastName = userVals.lastName;
						$scope.user.email = userVals.email;
						$scope.user.fbUserId = userVals.fbUserId;
						$scope.user.loggedIn = userVals.loggedIn;
						$scope.user.image = localStorage.image;
						$scope.user.phone = userVals.phone;
						
					} else {
						$scope.put();
					}
				});
		};

		$scope.update = function() {
			$scope.userPutPath = '/users/update/' + $scope.user.fbUserId + '/' + $scope.user.email + '/' + $scope.user.phone + '/' + $scope.user.firstName + '/' + $scope.user.lastName + '/' + $scope.user.loggedIn;

			$http({method: 'POST', url: $scope.userPutPath}).
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



	app.controller('FacilityController', ['$scope', '$http', function($scope, $http){

		$scope.facilityId = 0;

		$scope.facility = {
			name: "",
			hours: "",
			phone: "",
			image: ""

		}

		/*$scope.initFac = function(){
			$scope.facilityId = sessionStorage.facId;

			for(var i = 0; i < 4; i++) 
				var fac = $scope.facilities[i];
				if(fac.id === $scope.facilityId){
					$scope.facility.name = fac.name;
					$scope.facility.hours = fac.hours;
					$scope.facility.phone = fac.phone;
					$scope.facility.image = fac.image;
				}
			

		};*/

		var fac = $scope;
 		fac.facilities = [];

 		$scope.facilities = [];

 		$scope.get = function() {
			$http({method: 'GET', url: '/facilities/'}).
						success(function(data, status) {
							fac.facilities = data;
						});
						return fac.facilities;
 		};

 		$scope.initGet = function(){
 			$scope.facilities = $scope.get();
 			console.log($scope.facilities);
 		};

 		$scope.setFac = function(){
 			var fac = $scope.getFac();
 			$scope.facility.name = fac.name;
			$scope.facility.hours = fac.hours;
			$scope.facility.phone = fac.phone;
			$scope.facility.image = fac.image;
 		};


		$scope.getFac = function() {
			var path = '/facilities/' + sessionStorage.facId;	
			$http({method: 'GET', url: $scope.userGetPath}).
				success(function(data, status) {
					if(data.length) {
						var facVals = data[0];
						fac.name = facVals.name;
						fac.hours = facVals.hours;
						fac.phone = facVals.phone;
						fac.image = facVals.image;	
						return fac;					
					} 
				});
		};
        
		$scope.courts = [];

    $scope.initCourts = function(facId){
        console.log(facId);
        var url = '/courts/fac/'+facId;
        $http({method:'GET',url:url}).
            success(function(data,status){
                console.log(data);
            
           
            for(var x in data){
                $scope.courts.push(data[x]);
                
                 $('.courtBox').append(
                 	'<div class="col-xs-12 col-sm-6 col-md-4">'+
                   	'<div class="row">'+
							'<div class="col-xs-12 cover-tile-image" style="text-align: left;">'+
								'<div class="court">'+
      							'<a href="../views/court.html" onclick="sessionStorage.courtName = data[x].name">'+
      							'<div class="row">'+
        							'<div class="col-xs-12 cover-tile-image" style="text-align: left;">'+
          								'<div id="nameBlock">'+
                  							'<p style="color: #0099ff; padding-left: 5px; padding-top: 5px;">'+data[x].name+'</p>'+
                    					'</div>'+
                    				'</div>'+
                    			'</div>'+
                    			'<div class="row">'+
                    				'<div class="col-xs-12 cover-tile-text" style="text-align: left;">'+
                                    	'<div id="picBlock">'+
                                    		'<img class="courtPic" src="../assets/'+data[x].image+'"/>'+
                  						'</div>'+
                  					'</div>'+
                  				'</div>'+
		                  		'<div class="row">'+
		                  			'<div class="col-xs-12 cover-tile-text" style="text-align: left;">'+
		          						'<h5 style="font-weight: bold;">Availability</h5>'+
		          						'<h5>Time slots available</h5>'+
		          					'</div>'+
		          				'</div>'+
	          				'</div>'+
	          			'</div>'+
	          		'</div>'+
          		'</div>');

                console.log(data[x].image);
            }
            console.log($scope.courts);
        });
    };
    
    console.log($scope.courts);

	}]);

	app.controller('CourtController', ['$scope', function($scope){
		$scope.court = {
			name: "",
			facId: "",
			image: "",
			id: ""
		}

 		$scope.courts = [
			{
				name: 'Bulldog Court',
				image: "../assets/bulldog.png"			
			},
			{
				name: 'Falcon Court',
				image: "../assets/bulldog.png"				
			},
			{
				name: 'Shark Court',
				image: "../assets/bulldog.png"							
			},
			{
				name: 'Courgar Court',
				image: "../assets/bulldog.png"						
			}

		];

		$scope.getCourts = function(){
			var path = '/courts/fac/' + $scope.court.facId;	
			$http({method: 'GET', url: $scope.userGetPath}).
				success(function(data, status) {
					if(data.length) {
						$scope.courts =  data[0];				
					} 
				});
		}

		$scope.getCourt = function(){
			var path = '/courts/' + $scope.court.name;	
			$http({method: 'GET', url: $scope.userGetPath}).
				success(function(data, status) {
					if(data.length) {
						var courtVals = data[0];
						$scope.court.name = courtVals.name;
						$scope.court.facId = courtVals.facId;
						$scope.court.image = courtVals.image;					
					} 
				});
		}

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
