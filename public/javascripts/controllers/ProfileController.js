angular.module('LosGatos').controller('ProfileController', function(User, $routeParams, $scope, auth, store, $rootScope){
	
	$scope.Name = $rootScope.profile.user_metadata.altName || $rootScope.profile.name;

	$scope.Nick = $rootScope.profile.user_metadata.altNick || $rootScope.profile.nickname;

	$scope.Email = $rootScope.profile.user_metadata.altEmail || $rootScope.profile.email;


	
});