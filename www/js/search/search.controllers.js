angular.module('your_app_name.search.controllers', [])

.controller('SearchCtrl', function($scope, FoodService, results) {

	$scope.search = { query : 'vegetarian' };
	$scope.products = results;

	$scope.cancelSearch = function(){
		$scope.search = { query : '' };
	};
})


;
