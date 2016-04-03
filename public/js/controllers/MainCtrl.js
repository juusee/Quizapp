angular.module('MainCtrl', []).controller('MainController', function($scope, $http) {
	$http.get('/questions/page/0')
		.then(function(res) {
			$scope.question = res.data.question;
			$scope.hasNext = res.data.hasNext;
			$scope.offset = res.data.offset;
		});

	$scope.newQuestion = function(v) {
		var offset = parseInt($scope.offset) + parseInt(v);
		$http.get('/questions/page/' + offset)
			.then(function(res) {
				$scope.question = res.data.question;
				$scope.hasNext = res.data.hasNext;
				$scope.offset = res.data.offset;
			})
	}
});