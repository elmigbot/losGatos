angular.module('LosGatos').controller('LoginController', function($scope, auth, store, $location, $rootScope){
	
	$scope.auth = auth;
	console.log($rootScope.profile, 'top');
	



	$scope.login = function() {
		auth.signin();
		
	};

	$rootScope.profile = store.get('profile'); 
		
	$scope.logout = function() {
		auth.signout();
		store.remove('profile');
		store.remove('token');
		$location.path('/');
	};

	$scope.resetPassword = function(){
   		auth.reset({
      		connection: 'Username-Password-Authentication'
   		 });
	};
	
});