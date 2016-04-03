angular.module('CreateCtrl', []).controller('CreateController', function($scope, $http, $location) {

	$scope.formData = {};

	$scope.createQuestion = function () {
		$http({
			method: 'post',
			url: 'questions',
			data: $.param($scope.formData),
			headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
		})
			.success(function (data) {
				if (data.success) {
					$scope.formData = null;
					$scope.message = data.message;
				}
			});
	};
});