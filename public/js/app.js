// (function() {
// 	var app = angular.module('SportScheduler', ['ngRoute', 'appRoutes', 'MainCtrl', 'NerdCtrl', 
// 								'NerdService', 'GeekCtrl', 'GeekService']);

// ))();




(function(){
	var app = angular.module('SportScheduler', []);

	app.controller('HomeCtrl', function(){
		this.user = user; 
	});

	app.controller('FacilityController', function(){
		this.facilities = facilities;
	});

	var user = {
		firstName: 'Jeff',
		lastName: 'Stapleton',
		email: 'jeff.d.stapleton@gmail.com',
		phone: '(949) 632-0102'
	}

	var facilities = [
		
		{
			name: 'Richards Building - BYU',
			hours: '6:00 am - 9:45 pm Mon-Sat',
			phone: '(801) 422-3644',
			images: [ 
				"../assets/rb.jpg"
			]
		}
		{
			name: '24 Hour Fitness',
			hours: '6:00 am - 12:00 pm Mon-Sat',
			phone: '(801) 224-2096',
			images: [
				"../assets/24Hour.jpg"
			]
		}
		{
			name: 'Orem Recreation Center',
			hours: '5:00 am - 10:00 pm Mon-Fri
					7:00 am - 7:00 pm Sat',
			phone: '(801) 852-6600',
			images: [ 
				"../assets/OremRec.jpg"
			]
		}
		{
			name: 'Provo Recreation Center',
			hours: '5:00 am - 10:00 pm Mon-Fri
					7:00 am - 8:00 pm Sat',
			phone: '(801) 229-7154',
			images: [
				"../assets/ProvoRec.jpg" 
			]
		}
	]

	var facility = {
		name: '',
		hours: '',
		phone: '',
		images: [],
		courts: [

			{
				name: '',
				img: '',
				schedule: [
					date: '',
					
				]

			}
		],
	}

})();