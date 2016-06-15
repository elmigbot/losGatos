angular.module('LosGatos').factory('User', function($resource){
	return $resource('/profile/:id', {id: "@id"}, {
		update: {
			method: 'PATCH'
		}
	});
});