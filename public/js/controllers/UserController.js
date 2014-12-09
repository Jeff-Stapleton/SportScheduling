var User = require('./models/user');
angular.module('UserController', []).controller('UserController', function($scope) {

	$scope.firstName = '';
	$scope.lastName = '';
    
	$scope.email = '';
        
	$scope.phone = '';
    
	$scope.picture = '';

});