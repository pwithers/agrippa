'use strict';
angular.module('app.controllers')
.controller('HeadUnit',['$scope','userService',function($scope,userService) {
    var self = this;
    $scope.main = {username:userService.hello(),
                        orgname:'orgname'};
    this.init = function(element) {
      self.$element = element;
    };
}]);
