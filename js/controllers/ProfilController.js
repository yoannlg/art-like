app.controller("ProfilController", ['$scope', '$http', function($scope) {
	
	$scope.users = users;
	$scope.user = $scope.users[0];
	this.users = users;
	console.log($scope.user);
}]);


var users = [
	{
		"name": "yoann51",
		"description": "Photographe amateur",
		"hobbies": "Animes, rammstein, Bretagne, moto",
		"gallery": [
			"img/"
		]

	},
	{
		"name": "celia91",
		"description": "Photographe amateur",
		"hobbies": "NCIS, foot(PSG), Friends, Rap & Hip Hop US",
		"gallery": [
			"../img/forêt.jpg",
			"img/mountains.jpg",
			"img/toits.jpg",
			"img/cadenas.jpg",
			"img/paysage.jpg",
			"img/tour.jpg",
		]
	},
	{
		"name": "riri93",
		"description": "Photographe amateur",
		"hobbies": ["Teaching", "Musique", "Animes"],
		"gallery": [
			"img/pic1.jpeg",
			"img/pic2.jpeg",
			"img/pic3.jpeg",
			"img/pic4.jpeg",
			"img/pic5.jpeg",
			"img/pic6.jpeg",
		]
	}
];