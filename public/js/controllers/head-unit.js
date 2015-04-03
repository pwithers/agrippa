'use strict';
angular.module('app.controllers')
.controller('HeadUnit',['$scope','userService',function($scope,userService) {
    var self = this;
    $scope.main = {username:'Loading...',
                        orgname:'orgname'};
    userService.user().then(function(r){
      $scope.main.username = r.username;}
      );

    this.init = function(element) {
      self.$element = element;
    };
}]);
