angular.module('LosGatos').controller('LoginController', function($routeParams, User, $scope, auth, store, $location, $rootScope){
	
	$scope.auth = auth;
	

//$scope.user = User.get({id: $routeParams.id});

	$scope.login = function() {
		auth.signin();
		
	};

	//var localProfile = User.get({id: $routeParams.id});
	//console.log(localProfile);

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