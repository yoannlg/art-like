app.controller("ProfilController", ['$scope', '$http', function($scope, $http) {
	$http.jsonp('../js/data/users.json')
	.success(function (data) {
		$scope.data = data;
		$scope.user = data[0];

	});
	
}]);