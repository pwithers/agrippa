'use strict';
angular.module('app.services')
.factory('userService', ['$http', function($http){
   var userService = {};

   var user = $http.get('/api/user').then(function(resp) {
      return resp.data;
   });


   userService.user = function () {return user;};
   return userService;

}]);
