angular.module('LosGatos').config(function($routeProvider, authProvider, $httpProvider, $locationProvider,
  jwtInterceptorProvider){
	$routeProvider
		.when('/', {
			redirectTo: '/home'
		})
		
		.when('/home', {
			templateUrl: '/html/home.html',
			controller: 'HomeController'

		})

		.when('/contact', {
			templateUrl: '/html/contact.html',
			controller: 'ContactController',
			requiresLogin: true

		})

		.when('/profile/:id/edit', {
			templateUrl: '/html/profile.html',
			controller: 'ProfileController',
			requiresLogin: true

		})

		.when('/notes/:id', {
			templateUrl: 'assets/templates/notes/show.html',
			controller: 'NotesShowController'

		})

		.when('/notes/:id/edit', {
			templateUrl: 'assets/templates/notes/edit.html',
			controller: 'NotesEditController'

		})

		.when('/users', {
			templateUrl: 'assets/templates/users/index.html',
			controller: 'UserIndexController'

		})

		.when('/users/new', {
			templateUrl: 'assets/templates/users/new.html',
			controller: 'UserCreateController'
		})

		.when('/users/:id/', {
			templateUrl: 'assets/templates/users/show.html',
			controller: 'UserShowController'

		})

		.when('/users/:id/edit', {
			templateUrl: 'assets/templates/users/edit.html',
			controller: 'UserEditController'

		});

	authProvider.init({
		domain: 'migbot.auth0.com',
     	clientID: 'GlesvnfO7FdReEHnV8dmZhCjdTbqrXgp',
    	loginUrl: '/login'
	});

	//Called when login is successful
	authProvider.on('loginSuccess', function($location, profilePromise, idToken, store, $rootScope) {
	  	console.log("Login Success");
	  	profilePromise.then(function(profile) {
        	if(profile.identities[0].provider === "facebook"){
        		profile.picture = "https://graph.facebook.com/" + profile.identities[0].user_id + "/picture?width=9999";
        	}
        	if(profile.identities[0].provider === "google-oauth2"){
        		console.log('google-oauth2');
        		profile.picture = profile.picture + "?sz=5000";
        	}
	    	store.set('profile', profile);
	    	store.set('token', idToken);
	    	$rootScope.profile = profile;
        	console.log (profile.picture);


// $rootScope.profilePic = function(pic) {
//         if(auth.profile.identities[0].provider === "facebook"){
//             console.log("true");
//             pic = "https://graph.facebook.com/" + auth.profile.identities[0].user_id + "/picture?width=9999";
//         } else {
//             pic = auth.profile.picture;
//         }
//         console.log(pic);
//         return pic;
//     }






	 	});
	  	$location.path('/');
	});

	//Called when login fails
	authProvider.on('loginFailure', function() {
	  	console.log("Error logging in");
	  	$location.path('/login');
	});

	//Angular HTTP Interceptor function
	jwtInterceptorProvider.tokenGetter = function(store) {
    	return store.get('token');
	}
	
	//Push interceptor function to $httpProvider's interceptors
	$httpProvider.interceptors.push('jwtInterceptor');
});