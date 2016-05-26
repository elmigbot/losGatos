angular.module('LosGatos').controller('HomeController', function($scope, $http, $rootScope){
	
	$scope.getMessage = function() {
		$http.get('http://localhost:3000/public', { skipAuthorization: true}).then(function(res){
			alert(res.data)
		})
		
	};


	$scope.getPrivateMessage = function() {
		$http.get('http://localhost:3000/private').then(function(res){
			alert(res.data)
		}, function(err){
			if(err.status == 401 ){
				alert("not signed in!!")
			}
		})
		
	};
});	