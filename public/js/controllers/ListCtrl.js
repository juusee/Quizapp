angular.module('ListCtrl', []).controller('ListController', function($scope, $http) {
    $http.get('/questions')
        .then(function(res) {
            $scope.questions = res.data.questions;
        });

    $scope.getQuestions = function() {
        $http.get('/questions')
            .then(function(res) {
                $scope.questions = res.data.questions;
            });
    };

    $scope.deleteQuestion = function(id) {
        $http({
            method: 'delete',
            url: 'questions/' + id,
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
        })
            .success(function () {
                $scope.getQuestions();
            });
    }
});