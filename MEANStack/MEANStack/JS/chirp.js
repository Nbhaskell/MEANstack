var app = angular.module('chirp', []);

app.controller('mainController', function($scope){
    $scope.posts = [];
    $scope.newPost = {create_by: '', text: '', create_at: ''};

    $scope.post = function(){
        $scope.newPost.created_at = Date.now();
        $scope.posts.push($scope.newPost);
        $scope.newPost = {created_by: '', text: '', created_at: ''};
    };
});

app.controller('authController', function ($scope) {
    $scope.user = {username: '', password: ''};
    $scope.error_message = '';

    $scope.login = function () {
        //Placeholder until authentication is implimented
        $scope.error_message = 'login request for ' + $scope.user.username;
    };

    $scope.register = function () {
        //Placeholder until authentication is implimented
        $scope.error_message = 'registration request for ' + $scope.user.username;
    };
});