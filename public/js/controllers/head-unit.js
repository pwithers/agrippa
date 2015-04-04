'use strict';
angular.module('app.controllers')
.controller('HeadUnit',['$scope','userService',function($scope,userService) {
    $scope.main = {username:'Loading...',
                        orgname:'orgname'};
    userService.user().then(function(r){
      $scope.main.username = r.username;}
      );

}]);
