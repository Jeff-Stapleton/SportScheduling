(function(){
	var app = angular.module('home', []);

	app.controller('HomeCtrl', function(){
		this.user = user; 
	});

	app.controller('FacilityController', function(){
		this.facilities = facilities;
	});

	var user = {


	}

	var facilities = [
		
		{
			name: 'Provo Recreation Center',
			file: 'ProvoRec.jpg',
			link: '',
			images: [
				"ProvoRec.jpg" 
			]
		}
		{
			name: 'Orem Recreation Center',
			file: 'OremRec.jpg',
			link: 'http://www.oremrecreation.com/index.php/fitness-center',
			images: [ 
				"OremRec.jpg"
			]
		}
		{
			name: 'Richards Building - BYU'
			file: 'rb.jpg',
			link: 'http://rbfacilities.byu.edu/content/information-center',
			images: [ 
				"rb.jpg"
			]
		}
		{
			name: '24 Hour Fitness',
			file: '24Hour.jpg',
			link: 'https://www.24hourfitness.com/Website/Club/343',
			images: [
				"24Hour.jpg"
			]
		}
		{
			name: 'Provo Recreation Center',
			file: 'ProvoRec.jpg',
			link: '',
			images: [
				"ProvoRec.jpg" 
			]
		}
		{
			name: 'Orem Recreation Center',
			file: 'OremRec.jpg',
			link: 'http://www.oremrecreation.com/index.php/fitness-center',
			images: [ 
				"OremRec.jpg"
			]
		}
		{
			name: 'Richards Building - BYU'
			file: 'rb.jpg',
			link: 'http://rbfacilities.byu.edu/content/information-center',
			images: [ 
				"rb.jpg"
			]
		}
		{
			name: '24 Hour Fitness',
			file: '24Hour.jpg',
			link: 'https://www.24hourfitness.com/Website/Club/343',
			images: [
				"24Hour.jpg"
			]
		}
	]

})();