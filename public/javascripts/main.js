angular.module('LosGatos', ['auth0', 'angular-storage', 'angular-jwt', 'ngRoute', 'ngResource'])
	
	.run(function($rootScope, auth, store, jwtHelper, $location) {
  
	  // This hooks all auth events to check everything as soon as the app starts
	  
	  	auth.hookEvents();



	  	$rootScope.$on('$locationChangeStart', function() {

	  	var token = store.get('token');
	    	if (token) {
	      		if (!jwtHelper.isTokenExpired(token)) {
	        		if (!auth.isAuthenticated) {
	          			//Re-authenticate user if token is valid
	          			auth.authenticate(store.get('profile'), token);
	        }
	      		} else {
	        		// Either show the login page or use the refresh token to get a new idToken
	        		$location.path('/');
	      		}
	    	}
	  	});

	  
});


