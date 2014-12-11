
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
						var userVals = JSON.parse(data);
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



(function() {
var modal = angular.module('modalTest',['ui.bootstrap','dialogs'])
modal.controller('dialogServiceTest',function($scope,$rootScope,$timeout,$dialogs){
  $scope.confirmed = 'You have yet to be confirmed!';
  $scope.name = '"Your name here."';
  
  $scope.launch = function(which){
    var dlg = null;
    switch(which){
        
      // Error Dialog
      case 'error':
        dlg = $dialogs.error('This is my error message');
        break;
        
      // Wait / Progress Dialog
      case 'wait':
        dlg = $dialogs.wait(msgs[i++],progress);
        fakeProgress();
        break;
        
      // Notify Dialog
      case 'notify':
        dlg = $dialogs.notify('Something Happened!','Something happened that I need to tell you.');
        break;
        
      // Confirm Dialog
      case 'confirm':
        dlg = $dialogs.confirm('Please Confirm','Is this awesome or what?');
        dlg.result.then(function(btn){
          $scope.confirmed = 'You thought this quite awesome!';
        },function(btn){
          $scope.confirmed = 'Shame on you for not thinking this is awesome!';
        });
        break;
       
      // Create Your Own Dialog
      case 'create':
        dlg = $dialogs.create('/dialogs/whatsyourname.html','whatsYourNameCtrl',{},{key: false,back: 'static'});
        dlg.result.then(function(name){
          $scope.name = name;
        },function(){
          $scope.name = 'You decided not to enter in your name, that makes me sad.';
        });
        
        break;
    }; // end switch
  }; // end launch
  
  // for faking the progress bar in the wait dialog
  var progress = 25;
  var msgs = [
    'Hey! I\'m waiting here...',
    'About half way done...',
    'Almost there?',
    'Woo Hoo! I made it!'
  ];
  var i = 0;
  
  var fakeProgress = function(){
    $timeout(function(){
      if(progress < 100){
        progress += 25;
        $rootScope.$broadcast('dialogs.wait.progress',{msg: msgs[i++],'progress': progress});
        fakeProgress();
      }else{
        $rootScope.$broadcast('dialogs.wait.complete');
      }
    },1000);
  }; // end fakeProgress 
  
}) // end dialogsServiceTest
.controller('whatsYourNameCtrl',function($scope,$modalInstance,data){
  $scope.user = {name : ''};

  $scope.cancel = function(){
    $modalInstance.dismiss('canceled');  
  }; // end cancel
  
  $scope.save = function(){
    $modalInstance.close($scope.user.name);
  }; // end save
  
  $scope.hitEnter = function(evt){
    if(angular.equals(evt.keyCode,13) && !(angular.equals($scope.name,null) || angular.equals($scope.name,'')))
				$scope.save();
  }; // end hitEnter
}) // end whatsYourNameCtrl
.run(['$templateCache',function($templateCache){
  $templateCache.put('/dialogs/whatsyourname.html','<div class="modal"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h4 class="modal-title"><span class="glyphicon glyphicon-star"></span> User\'s Name</h4></div><div class="modal-body"><ng-form name="nameDialog" novalidate role="form"><div class="form-group input-group-lg" ng-class="{true: \'has-error\'}[nameDialog.username.$dirty && nameDialog.username.$invalid]"><label class="control-label" for="username">Name:</label><input type="text" class="form-control" name="username" id="username" ng-model="user.name" ng-keyup="hitEnter($event)" required><span class="help-block">Enter your full name, first &amp; last.</span></div></ng-form></div><div class="modal-footer"><button type="button" class="btn btn-default" ng-click="cancel()">Cancel</button><button type="button" class="btn btn-primary" ng-click="save()" ng-disabled="(nameDialog.$dirty && nameDialog.$invalid) || nameDialog.$pristine">Save</button></div></div></div></div>');
}]); // end run / module

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