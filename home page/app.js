(function(){
	var app = angular.module('home', []);

	app.controller('HomeCtrl', function(){
		this.user = user; 
	});

	app.controller('FacilityCtrl', function(){
		this.facilities = facilities;
	});

	var user = {


	}

	var facilites = [
		
		{
			name: 'Provo Recreation Center',
			file: 'ProvoRec.jpg',
			link: '',
			imageLink: '<img src="ProvoRec.jpg" alt="Provo Rec Center" >',
		}
		{
			name: 'Orem Recreation Center',
			file: 'OremRec.jpg',
			link: 'http://www.oremrecreation.com/index.php/fitness-center',
			imageLink: '<img src="OremRec.jpg" alt="Orem Rec Center" >',
		}
		{
			name: 'Richards Building - BYU'
			file: 'rb.jpg',
			link: 'http://rbfacilities.byu.edu/content/information-center',
			imageLink: '<img src="rb.jpg" alt="Richards Building - BYU" >',
		}
		{
			name: '24 Hour Fitness',
			file: '24Hour.jpg',
			link: 'https://www.24hourfitness.com/Website/Club/343',
			imageLink: '<img src="24Hour.jpg" alt="24 Hour Fitness" >',
		}
		{
			name: 'Provo Recreation Center',
			file: 'ProvoRec.jpg',
			link: '',
			imageLink: '<img src="ProvoRec.jpg" alt="Provo Rec Center" >',
		}
		{
			name: 'Orem Recreation Center',
			file: 'OremRec.jpg',
			link: 'http://www.oremrecreation.com/index.php/fitness-center',
			imageLink: '<img src="OremRec.jpg" alt="Orem Rec Center" >',
		}
		{
			name: 'Richards Building - BYU'
			file: 'rb.jpg',
			link: 'http://rbfacilities.byu.edu/content/information-center',
			imageLink: '<img src="rb.jpg" alt="Richards Building - BYU" >',
		}
		{
			name: '24 Hour Fitness',
			file: '24Hour.jpg',
			link: 'https://www.24hourfitness.com/Website/Club/343',
			imageLink: '<img src="24Hour.jpg" alt="24 Hour Fitness" >',
		}
	]

})();