(function(){
	var app = angular.module('home', []);

	app.controller('HomeCtrl', function(){
		this.user = user; 
	});

	app.controller('FacilityCtrl', function(){
		this.facilities = facilities;
	});

	app.controller('CourtCtrl', function(){
		this.courts = courts;
	});

	var user = {


	}

	var facilites = [
		
		{
			name: 'Provo Recreation Center',
			file: 'ProvoRec.jpg',
			link: '',
			imageLink: '<img src="img/ProvoRec.jpg" alt="Provo Rec Center" >',
		}
		{
			name: 'Orem Recreation Center',
			file: 'OremRec.jpg',
			link: 'http://www.oremrecreation.com/index.php/fitness-center',
			imageLink: '<img src="img/OremRec.jpg" alt="Orem Rec Center" >',
		}
		{
			name: 'Richards Building - BYU'
			file: 'rb.jpg',
			link: 'http://rbfacilities.byu.edu/content/information-center',
			imageLink: '<img src="img/rb.jpg" alt="Richards Building - BYU" >',
		}
		{
			name: '24 Hour Fitness',
			file: '24Hour.jpg',
			link: 'https://www.24hourfitness.com/Website/Club/343',
			imageLink: '<img src="img/24Hour.jpg" alt="24 Hour Fitness" >',
		}
		{
			name: 'Provo Recreation Center',
			file: 'ProvoRec.jpg',
			link: '',
			imageLink: '<img src="img/ProvoRec.jpg" alt="Provo Rec Center" >',
		}
		{
			name: 'Orem Recreation Center',
			file: 'OremRec.jpg',
			link: 'http://www.oremrecreation.com/index.php/fitness-center',
			imageLink: '<img src="img/OremRec.jpg" alt="Orem Rec Center" >',
		}
		{
			name: 'Richards Building - BYU'
			file: 'rb.jpg',
			link: 'http://rbfacilities.byu.edu/content/information-center',
			imageLink: '<img src="img/rb.jpg" alt="Richards Building - BYU" >',
		}
		{
			name: '24 Hour Fitness',
			file: '24Hour.jpg',
			link: 'https://www.24hourfitness.com/Website/Club/343',
			imageLink: '<img src="img/24Hour.jpg" alt="24 Hour Fitness" >',
		}
	]

	var courts = [
		{
			name: 'Bulldog',
			image: "../assets/rb.jpg"
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
	]

})();

(function(){
	var app = angular.module('SportSceduler', []);

	app.controller('UserCtrl', function(){
		this.user = user; 
	});

	var user = {
		userId: 0,
		firstName: '',
		lastName: '',
		isSignedIn: false,
	}


})();
